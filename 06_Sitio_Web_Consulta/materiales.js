// GESTIÓN Y RENDERIZADO DE MATERIALES PEDAGÓGICOS NTICx 2026
// EES N° 33 "16 de septiembre" | Docente: Nahuel Lemos

const fichas = [
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

const evaluacionesData = [
  {
    path: "05_Evaluaciones/Evaluacion_Diagnostica_Inicial.md",
    badge: "Diagnóstica",
    badgeClass: "eval",
    title: "Evaluación Diagnóstica Inicial de NTICx",
    module: "1° Trimestre • Diagnóstico",
    desc: "Relevamiento de saberes previos, nociones de hardware, sistemas operativos conocidos y conectividad escolar y familiar.",
    audience: "estudiantes"
  },
  {
    path: "05_Evaluaciones/Evaluacion_Trimestral_1.md",
    badge: "Trimestral 1",
    badgeClass: "eval",
    title: "Evaluación Escrita Integradora N° 1",
    module: "Módulos 1 y 2 • 1° Trimestre",
    desc: "Modelo Von Neumann, unidades de medida de almacenamiento, sistema binario, medios de transmisión y redes TCP/IP.",
    audience: "estudiantes",
    studentVersion: true
  },
  {
    path: "05_Evaluaciones/Trabajo_Practico_Evaluativo_2.md",
    badge: "TP Evaluativo 2",
    badgeClass: "eval",
    title: "Trabajo Práctico Evaluativo N° 2",
    module: "Módulos 3, 4 y 5 • 2° Trimestre",
    desc: "Producción de campaña visual con semiótica de Peirce, ESI (mandatos estéticos), Ley Mica Ortega (grooming) y Fake News.",
    audience: "estudiantes"
  },
  {
    path: "05_Evaluaciones/Proyecto_Integrador_Anual_3.md",
    badge: "ABP Final",
    badgeClass: "eval",
    title: "Proyecto Integrador Anual (ABP)",
    module: "Módulos 6, 7 y 8 • 3° Trimestre",
    desc: "Producción comunitaria multimedia escolar, huella digital, defensa oral con rúbrica RITE y muestra comunitaria anual.",
    audience: "estudiantes"
  }
];

const evaluacionDocenteData = [
  {
    path: "05_Evaluaciones/Evaluacion_Trimestral_1.md",
    badge: "Docente RITE",
    badgeClass: "doc",
    title: "Evaluación Trimestral 1 (Con Claves y Solucionario)",
    module: "1° Trimestre • Criterios",
    desc: "Instrumento con respuestas esperadas, pautas de corrección formativa, ponderación RITE (TEA, TEP, TED) y adaptaciones pedagógicas.",
    audience: "docente"
  }
];

function crearTarjeta(datos) {
  const card = document.createElement("a");
  card.className = "card-item-modern";
  if (datos.id) card.id = datos.id;

  const params = new URLSearchParams({ archivo: datos.path });
  if (datos.studentVersion) params.set("vista", "estudiantes");
  if (datos.audience === "docente") params.set("audiencia", "docente");
  card.href = `documento.html?${params}`;

  card.setAttribute("data-search", `${datos.title} ${datos.module} ${datos.desc} ${datos.badge}`.toLowerCase());

  card.innerHTML = `
    <div class="card-item-header">
      <span class="badge-num-pill ${datos.badgeClass}">${datos.badge}</span>
      <span class="card-item-module" title="${datos.module}">${datos.module}</span>
    </div>
    <h3 class="card-item-title">${datos.title}</h3>
    <p class="card-item-desc">${datos.desc}</p>
    <div class="card-item-footer">
      <span>${datos.audience === "docente" ? "👨‍🏫 Uso Docente" : "🎒 Para Estudiantes"}</span>
      <span class="action-cue">Leer material →</span>
    </div>
  `;

  return card;
}

function renderFichas() {
  const t1Container = document.getElementById("fichas-1");
  const t2Container = document.getElementById("fichas-2");
  const t3Container = document.getElementById("fichas-3");

  const clasesDB = (typeof NTICX_DATA !== "undefined" && NTICX_DATA.clases) ? NTICX_DATA.clases : [];

  fichas.forEach((path, idx) => {
    const num = idx + 1;
    const clase = clasesDB.find(c => c.numero === num);
    const trim = num <= 12 ? 1 : num <= 25 ? 2 : 3;
    const badgeClass = `t${trim}`;
    const badgeText = `Ficha ${String(num).padStart(2, "0")}`;

    const title = clase ? clase.titulo : `Ficha de actividades N° ${num}`;
    const module = clase ? clase.modulo : `Trimestre ${trim}`;
    const desc = clase ? clase.objetivo : "Actividades desenchufadas en carpeta y expansión digital.";

    const datos = {
      path,
      id: `ficha-${num}`,
      badge: badgeText,
      badgeClass,
      title,
      module,
      desc,
      audience: "estudiantes"
    };

    const card = crearTarjeta(datos);

    if (trim === 1 && t1Container) t1Container.appendChild(card);
    else if (trim === 2 && t2Container) t2Container.appendChild(card);
    else if (trim === 3 && t3Container) t3Container.appendChild(card);
  });
}

function renderEvaluaciones() {
  const estContainer = document.getElementById("evaluaciones-estudiantes");
  if (estContainer) {
    evaluacionesData.forEach(item => {
      estContainer.appendChild(crearTarjeta(item));
    });
  }

  const docContainer = document.getElementById("evaluaciones-docente");
  if (docContainer) {
    evaluacionDocenteData.forEach(item => {
      docContainer.appendChild(crearTarjeta(item));
    });
  }
}

function initSearchAndFilter() {
  const searchInput = document.getElementById("materials-search");
  const filterBtns = document.querySelectorAll(".filter-chip-btn");

  const sections = {
    t1: document.getElementById("primer-trimestre"),
    t2: document.getElementById("segundo-trimestre"),
    t3: document.getElementById("tercer-trimestre"),
    evaluaciones: document.getElementById("sec-evaluaciones"),
    guias: [document.getElementById("sec-guias-estudiantes"), document.getElementById("sec-guias-docentes"), document.getElementById("sec-referencias")]
  };

  let activeFilter = "todos";

  function aplicarFiltros() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const cards = document.querySelectorAll(".card-item-modern");

    cards.forEach(card => {
      const searchData = card.getAttribute("data-search") || "";
      const matchesSearch = !query || searchData.includes(query);

      // Si hay búsqueda activa, ignorar temporalmente los filtros de categoría para encontrar coincidencias globales
      if (query) {
        card.style.display = matchesSearch ? "flex" : "none";
      } else {
        card.style.display = "flex";
      }
    });

    // Control de visibilidad de secciones enteras según el chip seleccionado
    if (!query) {
      if (activeFilter === "todos") {
        document.querySelectorAll(".resource-section").forEach(sec => sec.style.display = "block");
      } else {
        document.querySelectorAll(".resource-section").forEach(sec => sec.style.display = "none");
        if (activeFilter === "guias") {
          sections.guias.forEach(s => { if (s) s.style.display = "block"; });
        } else if (sections[activeFilter]) {
          sections[activeFilter].style.display = "block";
        }
      }
    } else {
      // Al buscar, mostrar todas las secciones que tengan al menos una tarjeta visible
      document.querySelectorAll(".resource-section").forEach(sec => {
        const visibleCards = sec.querySelectorAll(".card-item-modern:not([style*='display: none'])");
        sec.style.display = visibleCards.length > 0 ? "block" : "none";
      });
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", aplicarFiltros);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "todos";
      aplicarFiltros();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFichas();
  renderEvaluaciones();
  initSearchAndFilter();

  if (location.hash) {
    const anchor = document.getElementById(location.hash.slice(1));
    if (anchor) {
      setTimeout(() => anchor.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
    }
  }
});
