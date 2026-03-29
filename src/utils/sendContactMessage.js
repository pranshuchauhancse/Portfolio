function getEndpointUrl() {
  const explicitEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
  if (explicitEndpoint) return explicitEndpoint;

  const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;
  if (formspreeEndpoint) return formspreeEndpoint;

  return null;
}

function buildRequestBody({ name, email, subject, message }) {
  return JSON.stringify({
    name: String(name || ""),
    email: String(email || ""),
    subject: String(subject || ""),
    message: String(message || ""),
  });
}

export async function sendContactMessage({ name, email, subject, message }) {
  const endpointUrl = getEndpointUrl();
  if (!endpointUrl) {
    return {
      ok: false,
      error:
        "Missing contact endpoint. Set REACT_APP_CONTACT_ENDPOINT or REACT_APP_FORMSPREE_ENDPOINT in .env.",
    };
  }

  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: buildRequestBody({ name, email, subject, message }),
  });

  if (response.ok) return { ok: true };

  let details = "";
  try {
    details = await response.text();
  } catch {
    details = "";
  }

  return {
    ok: false,
    error: details ? `Request failed: ${details}` : `Request failed with status ${response.status}.`,
  };
}
