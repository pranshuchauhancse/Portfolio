import React, { useEffect, useState } from "react";

const DEFAULT_PATHNAME = "/";

function normalizePathname(pathname) {
  if (!pathname) return DEFAULT_PATHNAME;
  const cleaned = pathname.split("?")[0].split("#")[0];
  if (cleaned.length > 1 && cleaned.endsWith("/")) return cleaned.slice(0, -1);
  return cleaned || DEFAULT_PATHNAME;
}

function isExternalHref(href) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#");
}

export function matchPath(pattern, pathname) {
  const current = normalizePathname(pathname);
  const target = normalizePathname(pattern);

  if (target === "*") return { params: {} };
  if (target === current) return { params: {} };

  const currentParts = current.split("/").filter(Boolean);
  const targetParts = target.split("/").filter(Boolean);
  if (currentParts.length !== targetParts.length) return null;

  const params = {};
  for (let i = 0; i < targetParts.length; i += 1) {
    const patternPart = targetParts[i];
    const valuePart = currentParts[i];

    if (patternPart.startsWith(":")) {
      params[patternPart.slice(1)] = decodeURIComponent(valuePart);
      continue;
    }

    if (patternPart !== valuePart) return null;
  }

  return { params };
}

export function navigate(to) {
  const href = typeof to === "string" ? to : DEFAULT_PATHNAME;
  if (!href || isExternalHref(href)) return;

  const current = normalizePathname(window.location.pathname);
  const next = normalizePathname(href);
  if (current === next) return;

  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => normalizePathname(window.location.pathname));

  useEffect(() => {
    const onChange = () => setPathname(normalizePathname(window.location.pathname));
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return pathname;
}

export function Link({ to, onClick, children, ...props }) {
  const href = typeof to === "string" ? to : DEFAULT_PATHNAME;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#");

  return (
    <a
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (props.target === "_blank") return;
        if (event.button !== 0) return;
        if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
        if (isExternal) return;

        event.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
