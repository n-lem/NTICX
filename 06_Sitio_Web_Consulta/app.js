// LÓGICA INTERACTIVA DE LA PLATAFORMA NTICx 2026
// EES N° 33 "16 de septiembre" | Docente: Nahuel Lemos

document.addEventListener("DOMContentLoaded", () => {
  // Estado de la aplicación
  let currentTrimestre = "todos";
  let currentSearch = "";
  let currentViewMode = "both"; // 'both', 'unplugged', 'digital'
  let currentManualModule = 1;

  // Elementos DOM
  const classesContainer = document.getElementById("classes-container");
  const classSearchInput = document.getElementById("class-search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const modeSwitchBtns = document.querySelectorAll(".mode-switch-btn");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const glossaryContainer = document.getElementById("glossary-container");
  const glossarySearchInput = document.getElementById("glossary-search-input");
  const manualNavContainer = document.getElementById("manual-nav");
  const manualViewerContainer = document.getElementById("manual-viewer");
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

  // Verificar si ya está autenticado en la sesión
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
      } catch (err) {
        // Fallback
      }

      if (entered === "nticx2026" || hash === AUTH_HASH) {
        sessionStorage.setItem("nticx_auth_token", AUTH_HASH);
        if (authGate) authGate.classList.add("unlocked");
        if (authErrorMsg) authErrorMsg.textContent = "";
        authPasswordInput.value = "";
      } else {
        if (authCard) {
          authCard.classList.remove("auth-shake");
          void authCard.offsetWidth; // trigger reflow
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

  // 1. NAVEGACIÓN POR PESTAÑAS (TABS)
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const targetId = btn.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.focus({ preventScroll: true });
      }
    });
  });

  // 3. RENDERIZADO DE LAS 38 CLASES
  function renderClasses() {
    if (!classesContainer) return;
    classesContainer.innerHTML = "";

    const filtered = NTICX_DATA.clases.filter(c => {
      // Filtro por trimestre
      const matchTrim = currentTrimestre === "todos" || c.trimestre.toString() === currentTrimestre;
      // Filtro por búsqueda
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
            <a class="btn-detail" href="materiales.html#ficha-${clase.numero}">Abrir actividad</a>
            <button class="btn-detail" type="button" data-id="${clase.numero}">Ver detalle</button>
          </div>
        </div>
      `;

      classesContainer.appendChild(card);
    });

    // Event listeners en botones de detalle
    document.querySelectorAll(".btn-detail").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.getAttribute("data-id"));
        openClassModal(id);
      });
    });
  }

  // 4. CONTROLADORES DE FILTROS DE CLASES
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

  // 5. MODAL DE DETALLE DE CLASE
  function openClassModal(numeroClase) {
    const clase = NTICX_DATA.clases.find(c => c.numero === numeroClase);
    if (!clase || !modalOverlay || !modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="class-number-badge">CLASE ${clase.numero} DE 38</span>
        <span class="class-trim-badge" style="margin-left: 8px;">${clase.trimestre}° TRIMESTRE • ${clase.modulo}</span>
      </div>

      ${clase.efemeride ? `
        <div class="class-efemeride-tag" style="margin-bottom: 16px;">
          <span>🎗️</span> Efeméride Obligatoria DGCyE: ${clase.efemeride}
        </div>
      ` : ''}

      <h2 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--text-main);">${clase.titulo}</h2>
      
      <div style="background: var(--bg-card-alt); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 20px;">
        <p><strong>🎯 Objetivo de Aprendizaje:</strong> ${clase.objetivo}</p>
        <p style="margin-top: 6px; font-size: 0.88rem; color: var(--text-muted);">⏱️ <strong>Carga horaria:</strong> ${clase.duracion} (Inicio 20 min | Desarrollo 75 min | Cierre 25 min)</p>
      </div>

      <h3 style="font-size: 1.1rem; margin-bottom: 10px; color: var(--success);">📝 Vía A: Modalidad Desenchufada (Garantizada en Carpeta / Papel)</h3>
      <div class="activity-box unplugged-style" style="margin-bottom: 20px; font-size: 0.95rem;">
        <p>${clase.desenchufada}</p>
      </div>

      <h3 style="font-size: 1.1rem; margin-bottom: 10px; color: var(--primary);">💻 Vía B: Modalidad Digital (Conectar Igualdad / Sala / Celular)</h3>
      <div class="activity-box digital-style" style="margin-bottom: 20px; font-size: 0.95rem;">
        <p>${clase.digital}</p>
      </div>

      <div style="border-top: 1px solid var(--border-color); padding-top: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: gap;">
        <p style="font-size: 0.9rem; color: var(--text-muted);">📦 <strong>Insumos:</strong> ${clase.materiales}</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <a href="materiales.html#ficha-${clase.numero}" class="btn-icon">📄 Abrir ficha de actividades</a>
          <button onclick="window.print()" class="btn-icon" type="button">🖨️ Imprimir detalle</button>
        </div>
      </div>
    `;

    modalOverlay.classList.add("open");
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("open");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
      }
    });
  }

  // 6. RENDERIZADO DEL MANUAL DEL ESTUDIANTE
  const MANUAL_RESUMENES = [
    {
      id: 1,
      titulo: "Módulo 1: Alfabetización Informática-Computacional",
      subtitulo: "Hardware, Arquitectura Von Neumann, Sistema Binario y Software Libre",
      contenido: `
        <h3>1. De la Técnica a la Tecnología y las NTICx</h3>
        <p>La técnica es la habilidad práctica; la tecnología es la ciencia aplicada a herramientas. Las <strong>NTICx</strong> agregan la <strong>"x" de la conectividad masiva y ubicua</strong> a escala global.</p>
        
        <h3>2. Arquitectura de Von Neumann</h3>
        <p>Toda computadora posee una <strong>CPU</strong> con dos brazos ejecutores: la <strong>Unidad de Control (UC)</strong> que coordina instrucciones y la <strong>Unidad Aritmético-Lógica (ALU)</strong> que calcula. La <strong>Memoria RAM</strong> es volátil y temporal; el <strong>Disco SSD o rígido</strong> es permanente.</p>
        
        <div class="manual-callout">
          <strong>💡 El Sistema Binario:</strong> Las máquinas usan ceros y unos ($0$ y $1$) porque sus circuitos trabajan con interruptores con o sin electricidad. Con 8 bits ($1$ Byte) representamos cualquier letra mediante el código universal ASCII.
        </div>

        <h3>3. Software Libre: Las 4 Libertades</h3>
        <p>Frente al software privativo que oculta su código, el <strong>Software Libre</strong> (como Huayra Linux en la escuela pública) garantiza las 4 libertades: usarlo, estudiarlo y modificarlo, distribuirlo solidariamente y publicar mejoras para la comunidad.</p>
      `
    },
    {
      id: 2,
      titulo: "Módulo 2: Redes Digitales de Información",
      subtitulo: "Topologías, Medios Físicos, Modelos de Red y Protocolo TCP/IP",
      contenido: `
        <h3>1. Medios de Transmisión</h3>
        <p>Las redes transportan datos a través de medios <strong>guiados</strong> (cable UTP y fibra óptica por pulsos de luz sin interferencias) o <strong>no guiados</strong> (Wi-Fi, Bluetooth y enlaces satelitales).</p>

        <h3>2. Topologías de Red</h3>
        <p>La forma en que se conectan los nodos define su resiliencia. En la <strong>topología en estrella</strong> (la más usada hoy), si un cable individual falla, el resto de la red sigue funcionando gracias al Switch central.</p>

        <div class="manual-callout">
          <strong>🌐 ¿Cómo viaja la información en Internet?</strong> El protocolo <strong>TCP</strong> desarma los archivos en pequeños <em>paquetes</em> numerados con dirección IP de origen y destino. Los <strong>routers</strong> los encaminan por diferentes rutas y el receptor los reensambla sin errores.
        </div>
      `
    },
    {
      id: 3,
      titulo: "Módulo 3: Manejo de la Información",
      subtitulo: "La World Wide Web, Búsquedas Booleanas y Evolución Web 1.0 a 4.0",
      contenido: `
        <h3>1. Internet no es lo mismo que la Web</h3>
        <p><strong>Internet</strong> es la infraestructura física mundial de cables y satélites. La <strong>World Wide Web (WWW)</strong> es el servicio de páginas hipermediales inventado por Tim Berners-Lee basado en <strong>HTML</strong>, <strong>HTTP</strong> y <strong>URLs</strong>.</p>

        <h3>2. Lógica Booleana contra la Infoxicación</h3>
        <p>Para buscar críticamente usamos operadores: <code>AND</code> (ambos términos), <code>OR</code> (cualquiera de los dos), <code>-</code> (excluir), comillas <code>""</code> para frases exactas y <code>site:.edu.ar</code> para dominios educativos confiables.</p>

        <h3>3. Del Usuario Pasivo a la Web con IA</h3>
        <p>Pasamos de la <strong>Web 1.0</strong> (solo lectura) a la <strong>Web 2.0</strong> (redes sociales y usuarios <em>prosumidores</em>), la <strong>Web 3.0</strong> (semántica) y la actual <strong>Web 4.0</strong> basada en predicción e Inteligencia Artificial.</p>
      `
    },
    {
      id: 4,
      titulo: "Módulo 4: Componentes de Imagen Visual",
      subtitulo: "Semiótica, Denotación y Connotación, Marcas y Retórica Publicitaria",
      contenido: `
        <h3>1. La Tríada Semiótica de Charles Peirce</h3>
        <p>Los signos visuales se dividen en: <strong>Índices</strong> (relación física causa-efecto, como el humo), <strong>Íconos</strong> (parecido visual directo) y <strong>Símbolos</strong> (acuerdos culturales como las banderas o signos de tránsito).</p>

        <h3>2. Denotación vs. Connotación</h3>
        <p><strong>Denotación:</strong> Lo que aparece físicamente en la imagen sin opinar. <strong>Connotación:</strong> Los valores, deseos, ideologías y emociones implícitas que el aviso busca provocar.</p>

        <div class="manual-callout">
          <strong>🎨 Tipologías de Marcas Gráficas:</strong><br>
          • <em>Logotipo:</em> Solo texto (Google).<br>
          • <em>Isotipo:</em> Solo símbolo visual (manzana de Apple).<br>
          • <em>Imagotipo:</em> Texto y símbolo que funcionan juntos o separados (Nike, Adidas).<br>
          • <em>Isologo:</em> Texto y símbolo fundidos en una sola pieza (Burger King, Starbucks).
        </div>
      `
    },
    {
      id: 5,
      titulo: "Módulo 5: Medios Digitales de Comunicación",
      subtitulo: "Shannon y Weaver, Algoritmos, ESI, Prevención del Grooming y Fake News",
      contenido: `
        <h3>1. Ruidos Técnicos y Semánticos</h3>
        <p>En el modelo comunicativo digital existen interferencias técnicas (pérdida de señal de datos) y ruidos semánticos (malentendidos por entonación o ironía en chats).</p>

        <h3>2. ESI en Redes: Violencia Estética</h3>
        <p>Los filtros de belleza algorítmicos imponen ideales corporales irreales. Reconocer que las redes muestran vidas editadas es el primer paso para proteger la salud mental adolescente.</p>

        <div class="manual-callout">
          <strong>🛡️ Prevención del Grooming (Ley 27.590 "Mica Ortega"):</strong><br>
          Es un delito penal donde un adulto acosa a un menor en entornos digitales con fines sexuales. <em>La culpa nunca es de la víctima.</em> No borrar pruebas y pedir ayuda al docente, directivo o a las Líneas 102 y 137.
        </div>
      `
    },
    {
      id: 6,
      titulo: "Módulo 6: Alfabetización Multimedia",
      subtitulo: "Formatos Comprimidos, Podcasts, Lenguaje Audiovisual y Storyboards",
      contenido: `
        <h3>1. Compresión con y sin Pérdida</h3>
        <p>Los formatos con pérdida (<em>lossy</em>: JPG, MP3, MP4) eliminan datos imperceptibles para que los archivos sean livianos. Los formatos sin pérdida (<em>lossless</em>: PNG, WAV, SVG) conservan la calidad exacta original.</p>

        <h3>2. El Lenguaje Sonoro y Audiovisual</h3>
        <p>Un podcast combina palabra, cortina musical, efectos sonoros y silencios organizados en un <strong>guion a dos columnas</strong> (técnica y locución). Las producciones en video se planifican previamente con <strong>Storyboards</strong> en viñetas utilizando la escala de planos (General a Detalle).</p>
      `
    },
    {
      id: 7,
      titulo: "Módulo 7: Ciudadanía Digital e IA",
      subtitulo: "Huella Digital, Leyes Argentinas, Creative Commons y Ética de la IA",
      contenido: `
        <h3>1. Leyes Argentinas de Soberanía Digital</h3>
        <p>• <strong>Ley 25.326 de Habeas Data:</strong> Derecho a conocer, corregir o borrar nuestros datos personales en cualquier registro.<br>
        • <strong>Ley 26.388 de Delitos Informáticos:</strong> Tipifica el fraude digital, phishing y acceso ilegítimo a sistemas.</p>

        <h3>2. Licencias Creative Commons (CC)</h3>
        <p>Alternativa libre al restrictivo Copyright ©. Con sellos modulares: <strong>BY</strong> (atribución obligatoria), <strong>NC</strong> (no comercial), <strong>ND</strong> (sin derivadas) y <strong>SA</strong> (compartir igual).</p>

        <div class="manual-callout">
          <strong>🤖 Inteligencia Artificial Generativa:</strong> Los modelos de lenguaje calculan probabilidades estadísticas de palabras basándose en su entrenamiento previo. Pueden alucinar datos falsos y replicar sesgos históricos. El pensamiento crítico humano sigue siendo insustituible.
        </div>
      `
    }
  ];

  function renderManual() {
    if (!manualNavContainer || !manualViewerContainer) return;

    manualNavContainer.innerHTML = "";
    MANUAL_RESUMENES.forEach(mod => {
      const li = document.createElement("li");
      li.className = "manual-nav-item";
      li.innerHTML = `
        <button class="${mod.id === currentManualModule ? 'active' : ''}" data-id="${mod.id}">
          <span>📖</span> ${mod.titulo.split(':')[0]}
        </button>
      `;
      manualNavContainer.appendChild(li);
    });

    // Event listener en botones del manual
    manualNavContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        manualNavContainer.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentManualModule = parseInt(btn.getAttribute("data-id"));
        renderManualContent();
      });
    });

    renderManualContent();
  }

  function renderManualContent() {
    const mod = MANUAL_RESUMENES.find(m => m.id === currentManualModule);
    if (!mod || !manualViewerContainer) return;

    manualViewerContainer.innerHTML = `
      <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 16px; margin-bottom: 24px;">
        <span class="class-number-badge">${mod.titulo.split(':')[0]}</span>
        <h2 style="margin-top: 10px;">${mod.titulo.split(':')[1]}</h2>
        <p style="font-size: 1.1rem; color: var(--text-muted);">${mod.subtitulo}</p>
      </div>
      <div>${mod.contenido}</div>
      <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--border-color); text-align: right;">
        <button onclick="window.print()" class="btn-icon">🖨️ Imprimir Capítulo</button>
      </div>
    `;
  }

  // 7. RENDERIZADO DEL GLOSARIO
  function renderGlossary(searchTerm = "") {
    if (!glossaryContainer) return;
    glossaryContainer.innerHTML = "";

    const filtered = NTICX_DATA.glosario.filter(g => {
      return g.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
             g.def.toLowerCase().includes(searchTerm.toLowerCase()) ||
             g.categoria.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filtered.length === 0) {
      glossaryContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <h3>No se encontraron términos en el glosario</h3>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "glossary-card";
      card.innerHTML = `
        <span class="glossary-category">${item.categoria}</span>
        <h3 class="glossary-term">${item.termino}</h3>
        <p class="glossary-def">${item.def}</p>
      `;
      glossaryContainer.appendChild(card);
    });
  }

  if (glossarySearchInput) {
    glossarySearchInput.addEventListener("input", (e) => {
      renderGlossary(e.target.value.trim());
    });
  }

  // Inicialización general
  renderClasses();
  renderManual();
  renderGlossary();
});
