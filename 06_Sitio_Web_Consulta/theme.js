// GESTIÓN GLOBAL DE TEMA, SESIÓN Y NAVEGACIÓN
// Plataforma NTICx 2026 • EES N° 33 "16 de septiembre"
(() => {
  const THEME_KEY = "nticx-theme";
  const AUTH_KEY = "nticx_auth_token";
  const AUTH_HASH = "0bcae3312f35706863a35699527d76706ad4223ee1905b188233f1d9a8e372fc";

  // Verificación de autenticación para páginas protegidas
  const path = window.location.pathname.toLowerCase();
  const isIndex = path.endsWith("index.html") || path.endsWith("/06_sitio_web_consulta/") || path.endsWith("/06_sitio_web_consulta") || path.endsWith("/nticx/") || path.endsWith("/nticx") || path === "/";
  const isAuth = sessionStorage.getItem(AUTH_KEY) === AUTH_HASH;

  if (!isAuth && !isIndex) {
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
        window.location.href = "index.html";
      });
    });

    // 3. Resaltar enlace de navegación activo
    const navLinks = document.querySelectorAll(".header-nav .nav-link");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      const target = href.replace("./", "").toLowerCase();
      if ((target === "" && isIndex) || (target && path.includes(target))) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  });
})();
