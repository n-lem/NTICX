(() => {
  const storageKey = "nticx-theme";

  function aplicarTema(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);
    const button = document.getElementById("theme-toggle-btn");
    if (button) {
      const dark = theme === "dark";
      button.setAttribute("aria-pressed", String(dark));
      button.innerHTML = dark ? "<span>☀️</span> Modo Claro" : "<span>🌙</span> Modo Oscuro";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem(storageKey) || "light";
    aplicarTema(savedTheme);
    const button = document.getElementById("theme-toggle-btn");
    if (button) {
      button.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        aplicarTema(currentTheme === "dark" ? "light" : "dark");
      });
    }
  });
})();
