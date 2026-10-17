// LÓGICA INTEGRADA DE LA PLATAFORMA NTICx 2026
// EES N° 33 "16 de septiembre" | Docente: Nahuel Lemos

document.addEventListener("DOMContentLoaded", () => {
  // Estado de la aplicación
  let currentTrimestre = "todos";
  let currentSearch = "";
  let currentViewMode = "both"; // 'both', 'unplugged', 'digital'
  let currentManualModule = 1;

  // Elementos DOM de clases
  const classesContainer = document.getElementById("classes-container");
  const classSearchInput = document.getElementById("class-search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const modeSwitchBtns = document.querySelectorAll(".mode-switch-btn");

  // Elementos de navegación por pestañas
  const tabBtns = document.querySelectorAll(".tab-btn");
  const navTabLinks = document.querySelectorAll(".nav-tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  // Elementos de glosario y manual
  const glossaryContainer = document.getElementById("glossary-container");
  const glossarySearchInput = document.getElementById("glossary-search-input");
  const manualNavContainer = document.getElementById("manual-nav");
  const manualViewerContainer = document.getElementById("manual-viewer");

  // Elementos de modal
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // Elementos de autenticación
  const authGate = document.getElementById("auth-gate");
  const authForm = document.getElementById("auth-form");
  const authCard = document.getElementById("auth-card");
  const authPasswordInput = document.getElementById("auth-password-input");
  const authTogglePwd = document.getElementById("auth-toggle-pwd");
  const authErrorMsg = document.getElementById("auth-error-msg");
  const lockSessionBtn = document.getElementById("lock-session-btn");
  const AUTH_HASH = "0bcae3312f35706863a35699527d76706ad4223ee1905b188233f1d9a8e372fc";

  // Rutas canónicas a las 38 fichas
  const fichasPaths = [
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_01_Diagn_stico_y_Mapa_de_Conectividad.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_02_T_cnica_Tecnolog_a_e_Innovaci_n_Las.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_03_Datos_Informaci_n_y_Memoria_Colecti.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_04_Arquitectura_de_la_Computadora_Von_.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_05_Perif_ricos_y_Unidades_de_Medida.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_06_El_Sistema_Binario_y_el_C_digo_ASCI.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_07_Sistemas_Operativos_y_Software_Libr.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_08_Redes_Inform_ticas_y_Medios_de_Tran.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_09_Topolog_as_de_Red_y_Convivencia_Dig.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_10_Cliente_Servidor_Redes_P2P_y_Cloud_.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_11_Protocolo_TCP_IP_y_el_Viaje_de_un_M.md",
    "04_Cuadernillo_Actividades/1_Trimestre/Ficha_12_Integraci_n_y_Repaso_1_Trimestre.md",

    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_13_De_ARPANET_a_la_Web_Hipertexto_y_HT.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_14_B_squedas_Avanzadas_y_Operadores_Bo.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_15_Evoluci_n_de_la_Web_De_la_1_0_a_la_.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_16_Cibercultura_y_Escritura_Colaborati.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_17_La_Imagen_como_Mensaje_Signos_y_Sem.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_18_Denotaci_n_y_Connotaci_n_en_la_Imag.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_19_Identidad_Visual_Logotipo_Isotipo_e.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_20_Ret_rica_Publicitaria_y_Psicolog_a_.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_21_El_Proceso_de_Comunicaci_n_Shannon_.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_22_Redes_Sociales_Filtros_y_Mandatos_E.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_23_Prevenci_n_del_Grooming_Ley_Mica_Or.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_24_Periodismo_Digital_y_Desarmado_de_F.md",
    "04_Cuadernillo_Actividades/2_Trimestre/Ficha_25_Medios_Digitales_y_Juventudes_16_de.md",

    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_26_El_Lenguaje_Multimedia_y_Formatos_d.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_27_El_Sonido_Digital_Ondas_y_Muestreo.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_28_Guion_Sonoro_Micro_Podcast_Educar_e.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_29_Lenguaje_Audiovisual_Planos_y_Story.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_30_Montaje_y_Edici_n_de_Video_Las_Tres.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_31_Huella_Digital_Privacidad_y_Soberan.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_32_Marco_Legal_Argentino_Habeas_Data_y.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_33_Propiedad_Intelectual_y_Licencias_C.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_34_Inteligencia_Artificial_Algoritmos_.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_35_Lanzamiento_del_Proyecto_Final_Inte.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_36_Taller_de_Producci_n_del_Proyecto_F.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_37_Defensa_Oral_y_Evaluaci_n_del_Proye.md",
    "04_Cuadernillo_Actividades/3_Trimestre/Ficha_38_Muestra_Comunitaria_y_Balance_Anual.md"
  ];

  // 1. AUTENTICACIÓN Y SEGURIDAD
  if (sessionStorage.getItem("nticx_auth_token") === AUTH_HASH) {
    if (authGate) authGate.classList.add("unlocked");
  } else {
    if (authPasswordInput) setTimeout(() => authPasswordInput.focus(), 150);
  }

  if (authForm) {
    authForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const entered = authPasswordInput.value.trim();
      if (!entered) return;

      let hash = "";
      try {
        const enc = new TextEncoder().encode(entered);
        const buf = await crypto.subtle.digest("SHA-256", enc);
        hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
      } catch (err) {}

      if (entered === "nticx2026" || hash === AUTH_HASH) {
        sessionStorage.setItem("nticx_auth_token", AUTH_HASH);
        if (authGate) authGate.classList.add("unlocked");
        if (authErrorMsg) authErrorMsg.textContent = "";
        authPasswordInput.value = "";
      } else {
        if (authCard) {
          authCard.classList.remove("auth-shake");
          void authCard.offsetWidth;
          authCard.classList.add("auth-shake");
        }
        if (authErrorMsg) authErrorMsg.textContent = "❌ Contraseña incorrecta. Consultá con el docente.";
        authPasswordInput.focus();
        authPasswordInput.select();
      }
    });
  }

  if (authTogglePwd && authPasswordInput) {
    authTogglePwd.addEventListener("click", () => {
      const isPwd = authPasswordInput.type === "password";
      authPasswordInput.type = isPwd ? "text" : "password";
      authTogglePwd.textContent = isPwd ? "🙈" : "👁️";
    });
  }

  if (lockSessionBtn) {
    lockSessionBtn.addEventListener("click", () => {
      sessionStorage.removeItem("nticx_auth_token");
      if (authGate) authGate.classList.remove("unlocked");
      if (authPasswordInput) {
        authPasswordInput.value = "";
        authPasswordInput.focus();
      }
      if (authErrorMsg) authErrorMsg.textContent = "🔒 Plataforma bloqueada.";
    });
  }

  // 2. SISTEMA UNIFICADO DE PESTAÑAS (TABS)
  function activarPestaña(targetId) {
    if (!targetId) return;

    // Actualizar botones de pestaña secundarios
    tabBtns.forEach(btn => {
      const match = btn.getAttribute("data-target") === targetId;
      btn.classList.toggle("active", match);
      btn.setAttribute("aria-selected", String(match));
    });

    // Actualizar enlaces de navegación superior
    navTabLinks.forEach(link => {
      const match = link.getAttribute("data-tab") === targetId;
      link.classList.toggle("active", match);
      link.setAttribute("aria-current", match ? "page" : "false");
    });

    // Actualizar paneles de contenido
    tabContents.forEach(content => {
      const match = content.id === targetId;
      content.classList.toggle("active", match);
    });

    // Sincronizar URL hash sin salto brusco
    history.replaceState(null, "", `#${targetId}`);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      activarPestaña(btn.getAttribute("data-target"));
    });
  });

  navTabLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activarPestaña(link.getAttribute("data-tab"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Activar pestaña según hash inicial si existe
  if (location.hash && document.getElementById(location.hash.slice(1))) {
    activarPestaña(location.hash.slice(1));
  }

  // 3. RENDERIZADO DE LAS 38 CLASES
  function renderClasses() {
    if (!classesContainer) return;
    classesContainer.innerHTML = "";

    const filtered = NTICX_DATA.clases.filter(c => {
      const matchTrim = currentTrimestre === "todos" || c.trimestre.toString() === currentTrimestre;
      const searchTerms = currentSearch.toLowerCase();
      const matchSearch = c.titulo.toLowerCase().includes(searchTerms) ||
                          c.objetivo.toLowerCase().includes(searchTerms) ||
                          c.modulo.toLowerCase().includes(searchTerms) ||
                          (c.efemeride && c.efemeride.toLowerCase().includes(searchTerms)) ||
                          c.desenchufada.toLowerCase().includes(searchTerms) ||
                          c.digital.toLowerCase().includes(searchTerms);

      return matchTrim && matchSearch;
    });

    if (filtered.length === 0) {
      classesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>🔍 No se encontraron clases con los criterios actuales</h3>
          <p>Probá con otra palabra clave o restablecé los filtros de trimestre.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(clase => {
      const card = document.createElement("article");
      card.className = "class-card";

      const showUnplugged = currentViewMode === "both" || currentViewMode === "unplugged";
      const showDigital = currentViewMode === "both" || currentViewMode === "digital";
      const fichaPath = fichasPaths[clase.numero - 1] || "";

      card.innerHTML = `
        <div class="class-header">
          <span class="class-number-badge">CLASE ${clase.numero}</span>
          <span class="class-trim-badge">${clase.trimestre}° TRIMESTRE • ${clase.modulo}</span>
        </div>

        ${clase.efemeride ? `
          <div class="class-efemeride-tag">
            <span>🎗️</span> ${clase.efemeride}
          </div>
        ` : ''}

        <h3 class="class-title">${clase.titulo}</h3>
        <p class="class-objective"><strong>Objetivo:</strong> ${clase.objetivo}</p>

        <div class="class-body">
          ${showUnplugged ? `
            <div class="activity-box unplugged-style">
              <div class="activity-label"><span>📝</span> Vía A: Desenchufada (Unplugged)</div>
              <p>${clase.desenchufada}</p>
            </div>
          ` : ''}

          ${showDigital ? `
            <div class="activity-box digital-style">
              <div class="activity-label"><span>💻</span> Vía B: Digital Situada</div>
              <p>${clase.digital}</p>
            </div>
          ` : ''}
        </div>

        <div class="class-footer">
          <span>📦 <strong>Material:</strong> ${clase.materiales}</span>
          <div class="class-actions">
            ${fichaPath ? `<a class="btn-detail" href="documento.html?archivo=${encodeURIComponent(fichaPath)}">📄 Ficha N° ${clase.numero}</a>` : ''}
            <button class="btn-detail" type="button" data-id="${clase.numero}">Ver detalle</button>
          </div>
        </div>
      `;

      classesContainer.appendChild(card);
    });

    // Event listeners en botones de detalle modal
    document.querySelectorAll(".btn-detail[data-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"));
        openClassModal(id);
      });
    });
  }

  // Filtros de clases
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTrimestre = btn.getAttribute("data-trim");
      renderClasses();
    });
  });

  if (classSearchInput) {
    classSearchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderClasses();
    });
  }

  modeSwitchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeSwitchBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentViewMode = btn.getAttribute("data-mode");
      renderClasses();
    });
  });

  // 4. RENDERIZADO DE LAS 38 FICHAS (TAB CUADERNILLO)
  function renderCuadernilloCards() {
    const container = document.getElementById("fichas-grid-container");
    if (!container) return;
    container.innerHTML = "";

    fichasPaths.forEach((path, idx) => {
      const num = idx + 1;
      const clase = NTICX_DATA.clases.find(c => c.numero === num);
      const trim = num <= 12 ? 1 : num <= 25 ? 2 : 3;
      const badgeClass = `t${trim}`;
      const badgeText = `Ficha ${String(num).padStart(2, "0")}`;

      const title = clase ? clase.titulo : `Ficha de actividades N° ${num}`;
      const module = clase ? clase.modulo : `Trimestre ${trim}`;
      const desc = clase ? clase.objetivo : "Actividades en carpeta y expansión digital.";

      const card = document.createElement("a");
      card.className = "card-item-modern ficha-item-card";
      card.id = `ficha-${num}`;
      card.href = `documento.html?archivo=${encodeURIComponent(path)}`;
      card.setAttribute("data-trim", trim);
      card.setAttribute("data-search", `${num} ficha ${num} ${title} ${module} ${desc}`.toLowerCase());

      card.innerHTML = `
        <div class="card-item-header">
          <span class="badge-num-pill ${badgeClass}">${badgeText}</span>
          <span class="card-item-module">${module}</span>
        </div>
        <h3 class="card-item-title">${title}</h3>
        <p class="card-item-desc">${desc}</p>
        <div class="card-item-footer">
          <span>🎒 ${trim}° Trimestre</span>
          <span class="action-cue">Leer e imprimir →</span>
        </div>
      `;

      container.appendChild(card);
    });

    // Buscador y filtros de fichas
    const fichasSearch = document.getElementById("fichas-search-input");
    const fichasFilterChips = document.querySelectorAll(".fichas-chip-btn");

    function filtrarFichas() {
      const query = fichasSearch ? fichasSearch.value.trim().toLowerCase() : "";
      const activeChip = document.querySelector(".fichas-chip-btn.active");
      const filterTrim = activeChip ? activeChip.getAttribute("data-filter") : "todos";

      const cards = container.querySelectorAll(".ficha-item-card");
      cards.forEach(card => {
        const matchesTrim = filterTrim === "todos" || card.getAttribute("data-trim") === filterTrim;
        const matchesQuery = !query || card.getAttribute("data-search").includes(query);
        card.style.display = matchesTrim && matchesQuery ? "flex" : "none";
      });
    }

    if (fichasSearch) fichasSearch.addEventListener("input", filtrarFichas);

    fichasFilterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        fichasFilterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        filtrarFichas();
      });
    });
  }

  // 5. RENDERIZADO DEL CALENDARIO ANUAL 2026 (TAB CALENDARIO)
  function renderCalendario() {
    const calendarGrid = document.getElementById("calendar-grid");
    if (!calendarGrid) return;
    calendarGrid.innerHTML = "";

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["D", "L", "M", "X", "J", "V", "S"];
    const hoy = new Date();

    const feriados = {
      "2026-01-01": "Año Nuevo",
      "2026-02-16": "Carnaval",
      "2026-02-17": "Carnaval",
      "2026-03-23": "Día no laborable con fines turísticos",
      "2026-03-24": "Día Nacional de la Memoria por la Verdad y la Justicia",
      "2026-04-02": "Día del Veterano y de los Caídos en Malvinas",
      "2026-04-03": "Viernes Santo",
      "2026-05-01": "Día del Trabajador",
      "2026-05-25": "Día de la Revolución de Mayo",
      "2026-06-15": "Paso a la Inmortalidad de Güemes (trasladado)",
      "2026-06-19": "Paso a la Inmortalidad de Belgrano (trasladado)",
      "2026-07-09": "Día de la Independencia",
      "2026-07-10": "Día no laborable con fines turísticos",
      "2026-08-17": "Paso a la Inmortalidad de San Martín",
      "2026-10-12": "Día del Respeto a la Diversidad Cultural",
      "2026-11-09": "Feriado especial",
      "2026-11-11": "Feriado Provincia de Buenos Aires",
      "2026-11-23": "Día de la Soberanía Nacional",
      "2026-12-07": "Día con fines turísticos",
      "2026-12-08": "Inmaculada Concepción",
      "2026-12-25": "Navidad"
    };

    const hitos = {
      "2026-03-02": { label: "Inicio 1° cuatrimestre", type: "term-start" },
      "2026-07-17": { label: "Fin 1° cuatrimestre", type: "term-end" },
      "2026-07-20": { label: "Inicio receso invernal", type: "recess" },
      "2026-07-31": { label: "Fin receso invernal", type: "recess" },
      "2026-08-03": { label: "Inicio 2° cuatrimestre", type: "term-start" },
      "2026-12-22": { label: "Fin ciclo lectivo", type: "term-end" }
    };

    for (let mes = 0; mes < 12; mes += 1) {
      const card = document.createElement("section");
      card.className = "calendar-month";
      const offset = new Date(Date.UTC(2026, mes, 1)).getUTCDay();
      const daysInMonth = new Date(Date.UTC(2026, mes + 1, 0)).getUTCDate();
      const dayLabels = dias.map(day => `<span class="calendar-weekday" aria-hidden="true">${day}</span>`).join("");
      const blanks = Array.from({ length: offset }, () => '<span class="calendar-day empty" aria-hidden="true"></span>').join("");

      const dayCells = Array.from({ length: daysInMonth }, (_, index) => {
        const day = index + 1;
        const isoDate = `2026-${String(mes + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const isToday = hoy.getFullYear() === 2026 && hoy.getMonth() === mes && hoy.getDate() === day;
        const holiday = feriados[isoDate];
        const hito = hitos[isoDate];
        const labels = [holiday, hito?.label].filter(Boolean);
        const classes = ["calendar-day", isToday && "today", holiday && "holiday", hito?.type].filter(Boolean).join(" ");
        const accessibleLabel = labels.length ? ` aria-label="${day} de ${meses[mes]}: ${labels.join(". ")}" title="${labels.join(" · ")}"` : "";
        return `<time class="${classes}" datetime="${isoDate}"${accessibleLabel}>${day}</time>`;
      }).join("");

      card.innerHTML = `<h3>${meses[mes]}</h3><div class="calendar-days">${dayLabels}${blanks}${dayCells}</div>`;
      calendarGrid.appendChild(card);
    }
  }

  // 6. RENDERIZADO DEL MANUAL DEL ESTUDIANTE (VISOR MODULAR)
  function renderManual() {
    if (!manualNavContainer || !manualViewerContainer) return;
    manualNavContainer.innerHTML = "";

    NTICX_DATA.modulos.forEach(mod => {
      const li = document.createElement("li");
      li.className = "manual-nav-item";
      li.innerHTML = `
        <button class="${mod.id === currentManualModule ? 'active' : ''}" data-mod="${mod.id}">
          <span>${mod.icono}</span>
          <span>Módulo ${mod.id}: ${mod.nombre}</span>
        </button>
      `;
      manualNavContainer.appendChild(li);
    });

    // Listener para cambiar de módulo
    manualNavContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        manualNavContainer.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentManualModule = parseInt(btn.getAttribute("data-mod"));
        loadManualModule(currentManualModule);
      });
    });

    loadManualModule(currentManualModule);
  }

  function loadManualModule(modId) {
    const modulo = NTICX_DATA.modulos.find(m => m.id === modId);
    if (!modulo) return;

    manualViewerContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span class="eval-card-badge">${modulo.trim}° TRIMESTRE • ${modulo.clases}</span>
        <a href="documento.html?archivo=03_Guia_Estudiantes/Manual_Estudiante_NTICX.md" class="btn-detail" style="text-decoration:none;">
          📖 Ver Manual Completo Imprimible →
        </a>
      </div>

      <h2>${modulo.icono} Módulo ${modulo.id}: ${modulo.nombre}</h2>
      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 24px;">${modulo.descripcion}</p>

      <div class="manual-callout">
        <strong>💡 Orientación Pedagógica del Módulo:</strong>
        <p style="margin-top: 6px;">Este módulo aborda los saberes prioritarios según el Diseño Curricular bonaerense y el libro de texto oficial de Ana María Andrada (Ed. Maipué).</p>
      </div>

      <h3>Contenidos Principales y Clases Asociadas</h3>
      <div class="resource-cards-grid" style="margin-top: 16px;">
        ${NTICX_DATA.clases
          .filter(c => c.trimestre === modulo.trim && (modId === 1 ? c.numero <= 7 : modId === 2 ? (c.numero >= 8 && c.numero <= 11) : true))
          .slice(0, 4)
          .map(c => `
            <div class="card-item-modern">
              <span class="badge-num-pill t${c.trimestre}">Clase ${c.numero}</span>
              <h4 style="margin: 8px 0 4px; font-size: 0.95rem;">${c.titulo}</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted);">${c.objetivo}</p>
            </div>
          `).join('')}
      </div>
    `;
  }

  // 7. RENDERIZADO DEL GLOSARIO TÉCNICO
  function renderGlossary() {
    if (!glossaryContainer) return;
    glossaryContainer.innerHTML = "";

    const query = glossarySearchInput ? glossarySearchInput.value.toLowerCase().trim() : "";

    const filtered = NTICX_DATA.glosario.filter(g => {
      return g.termino.toLowerCase().includes(query) ||
             g.definicion.toLowerCase().includes(query) ||
             g.categoria.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      glossaryContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>🔍 No se encontraron términos</h3>
          <p>Probá con otra palabra o concepto computacional.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "glossary-card";
      card.innerHTML = `
        <span class="glossary-category">${item.categoria}</span>
        <h4 class="glossary-term">${item.termino}</h4>
        <p class="glossary-def">${item.definicion}</p>
      `;
      glossaryContainer.appendChild(card);
    });
  }

  if (glossarySearchInput) {
    glossarySearchInput.addEventListener("input", renderGlossary);
  }

  // 8. MODAL DE DETALLE DE CLASE
  function openClassModal(numero) {
    const clase = NTICX_DATA.clases.find(c => c.numero === numero);
    if (!clase) return;

    const fichaPath = fichasPaths[clase.numero - 1] || "";

    modalBody.innerHTML = `
      <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 12px; flex-wrap: wrap;">
        <span class="class-number-badge">CLASE ${clase.numero}</span>
        <span class="class-trim-badge">${clase.trimestre}° TRIMESTRE • ${clase.modulo}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: auto;">⏱️ Duración: ${clase.duracion}</span>
      </div>

      <h2 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--primary);">${clase.titulo}</h2>
      
      ${clase.efemeride ? `
        <div class="class-efemeride-tag" style="margin-bottom: 16px;">
          <span>🎗️</span> Efeméride o Semana Especial: <strong>${clase.efemeride}</strong>
        </div>
      ` : ''}

      <div style="background: var(--bg-card-alt); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 20px;">
        <strong>🎯 Objetivo de Aprendizaje:</strong>
        <p style="margin-top: 4px; font-size: 0.95rem;">${clase.objetivo}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 20px;">
        <div class="activity-box unplugged-style">
          <div class="activity-label"><span>📝</span> Vía Pedagógica Desenchufada (En Carpeta)</div>
          <p style="line-height: 1.6;">${clase.desenchufada}</p>
        </div>

        <div class="activity-box digital-style">
          <div class="activity-label"><span>💻</span> Vía Pedagógica Digital Situada (Conectividad / PCs)</div>
          <p style="line-height: 1.6;">${clase.digital}</p>
        </div>
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">📦 <strong>Materiales:</strong> ${clase.materiales}</span>
        <div style="display: flex; gap: 8px;">
          ${fichaPath ? `<a href="documento.html?archivo=${encodeURIComponent(fichaPath)}" class="btn-detail" style="text-decoration:none;">📄 Abrir Ficha Imprimible →</a>` : ''}
          <button class="btn-detail" type="button" onclick="window.print()">🖨️ Imprimir</button>
        </div>
      </div>
    `;

    modalOverlay.classList.add("open");
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // Inicialización de componentes
  renderClasses();
  renderCuadernilloCards();
  renderCalendario();
  renderManual();
  renderGlossary();
});
