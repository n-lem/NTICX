// GESTIÓN GLOBAL DE TEMA, SESIÓN Y NAVEGACIÓN
// Plataforma NTICx 2026 • EES N° 33 "16 de septiembre"
(() => {
  const THEME_KEY = "nticx-theme";
  const AUTH_KEY = "nticx_auth_token";
  const AUTH_HASH = "0bcae3312f35706863a35699527d76706ad4223ee1905b188233f1d9a8e372fc";

  // Verificación de autenticación para visor de documentos
  const path = window.location.pathname.toLowerCase();
  const isDocumento = path.includes("documento.html");
  const isAuth = sessionStorage.getItem(AUTH_KEY) === AUTH_HASH;

  if (isDocumento && !isAuth) {
    window.location.replace("index.html");
    return;
  }

  function aplicarTema(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    const buttons = document.querySelectorAll("#theme-toggle-btn, .theme-toggle-btn");
    buttons.forEach(btn => {
      const dark = theme === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.innerHTML = dark 
        ? '<span class="theme-icon">☀️</span> <span class="control-text">Modo Claro</span>' 
        : '<span class="theme-icon">🌙</span> <span class="control-text">Modo Oscuro</span>';
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializar tema
    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    aplicarTema(savedTheme);

    const buttons = document.querySelectorAll("#theme-toggle-btn, .theme-toggle-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        aplicarTema(currentTheme === "dark" ? "light" : "dark");
      });
    });

    // 2. Control de Bloqueo de Sesión
    const lockButtons = document.querySelectorAll("#lock-session-btn, .lock-session-btn");
    lockButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem(AUTH_KEY);
        if (window.location.pathname.includes("documento.html")) {
          window.location.href = "index.html";
        } else {
          const authGate = document.getElementById("auth-gate");
          if (authGate) authGate.classList.remove("unlocked");
          const authInput = document.getElementById("auth-password-input");
          if (authInput) {
            authInput.value = "";
            authInput.focus();
          }
          const authMsg = document.getElementById("auth-error-msg");
          if (authMsg) authMsg.textContent = "🔒 Sesión bloqueada.";
        }
      });
    });
  });
})();
