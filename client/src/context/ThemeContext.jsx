import React, { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Force dark theme for the entire app. Toggle option removed per user request.
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const value = { isDark: true, toggleTheme: () => {} };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
