const fichas = [
  "04_Cuadernillo_Actividades/1_Trimestre/Ficha_01_Diagn_stico_y_Mapa_de_Conectividad.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_02_T_cnica_Tecnolog_a_e_Innovaci_n_Las.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_03_Datos_Informaci_n_y_Memoria_Colecti.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_04_Arquitectura_de_la_Computadora_Von_.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_05_Perif_ricos_y_Unidades_de_Medida.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_06_El_Sistema_Binario_y_el_C_digo_ASCI.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_07_Sistemas_Operativos_y_Software_Libr.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_08_Redes_Inform_ticas_y_Medios_de_Tran.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_09_Topolog_as_de_Red_y_Convivencia_Dig.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_10_Cliente_Servidor_Redes_P2P_y_Cloud_.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_11_Protocolo_TCP_IP_y_el_Viaje_de_un_M.md","04_Cuadernillo_Actividades/1_Trimestre/Ficha_12_Integraci_n_y_Repaso_1_Trimestre.md",
  "04_Cuadernillo_Actividades/2_Trimestre/Ficha_13_De_ARPANET_a_la_Web_Hipertexto_y_HT.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_14_B_squedas_Avanzadas_y_Operadores_Bo.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_15_Evoluci_n_de_la_Web_De_la_1_0_a_la_.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_16_Cibercultura_y_Escritura_Colaborati.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_17_La_Imagen_como_Mensaje_Signos_y_Sem.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_18_Denotaci_n_y_Connotaci_n_en_la_Imag.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_19_Identidad_Visual_Logotipo_Isotipo_e.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_20_Ret_rica_Publicitaria_y_Psicolog_a_.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_21_El_Proceso_de_Comunicaci_n_Shannon_.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_22_Redes_Sociales_Filtros_y_Mandatos_E.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_23_Prevenci_n_del_Grooming_Ley_Mica_Or.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_24_Periodismo_Digital_y_Desarmado_de_F.md","04_Cuadernillo_Actividades/2_Trimestre/Ficha_25_Medios_Digitales_y_Juventudes_16_de.md",
  "04_Cuadernillo_Actividades/3_Trimestre/Ficha_26_El_Lenguaje_Multimedia_y_Formatos_d.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_27_El_Sonido_Digital_Ondas_y_Muestreo.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_28_Guion_Sonoro_Micro_Podcast_Educar_e.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_29_Lenguaje_Audiovisual_Planos_y_Story.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_30_Montaje_y_Edici_n_de_Video_Las_Tres.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_31_Huella_Digital_Privacidad_y_Soberan.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_32_Marco_Legal_Argentino_Habeas_Data_y.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_33_Propiedad_Intelectual_y_Licencias_C.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_34_Inteligencia_Artificial_Algoritmos_.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_35_Lanzamiento_del_Proyecto_Final_Inte.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_36_Taller_de_Producci_n_del_Proyecto_F.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_37_Defensa_Oral_y_Evaluaci_n_del_Proye.md","04_Cuadernillo_Actividades/3_Trimestre/Ficha_38_Muestra_Comunitaria_y_Balance_Anual.md"
];

const evaluacionesEstudiantes = ["05_Evaluaciones/Evaluacion_Diagnostica_Inicial.md", "05_Evaluaciones/Evaluacion_Trimestral_1.md", "05_Evaluaciones/Trabajo_Practico_Evaluativo_2.md", "05_Evaluaciones/Proyecto_Integrador_Anual_3.md"];
const evaluacionesDocente = ["05_Evaluaciones/Evaluacion_Trimestral_1.md"];

function nombreDeFicha(path) {
  const match = path.match(/Ficha_(\d+)_/);
  return match ? `Ficha de actividades N° ${Number(match[1])}` : path.split("/").pop().replace(/\.md$/, "").replaceAll("_", " ");
}

async function tituloDelDocumento(path, fallback) {
  try {
    const response = await fetch(`../${encodeURI(path)}`);
    const markdown = await response.text();
    const headings = [...markdown.matchAll(/^#{1,3}\s+(.+)$/gm)].map(match => match[1].replace(/[*_`]/g, ""));
    const heading = headings.find(title => /ficha de actividades|evaluaci[oó]n|trabajo pr[aá]ctico|proyecto integrador/i.test(title));
    return heading || fallback;
  } catch { return fallback; }
}

async function renderLista(targetId, paths, options = {}) {
  const target = document.getElementById(targetId);
  target.innerHTML = "<p class=\"loading\">Cargando materiales…</p>";
  const items = await Promise.all(paths.map(async path => ({ path, title: await tituloDelDocumento(path, nombreDeFicha(path)) })));
  target.replaceChildren(...items.map(({ path, title }) => {
    const link = document.createElement("a");
    link.className = "resource-list-item";
    const soloEstudiantes = options.studentVersion && path.endsWith("Evaluacion_Trimestral_1.md");
    const params = new URLSearchParams({ archivo: path });
    if (soloEstudiantes) params.set("vista", "estudiantes");
    if (options.audience === "docente") params.set("audiencia", "docente");
    link.href = `documento.html?${params}`;
    const numero = path.match(/Ficha_(\d+)_/)?.[1];
    if (numero) link.id = `ficha-${Number(numero)}`;
    link.innerHTML = "<span>📄</span>";
    const text = document.createElement("span");
    text.textContent = title;
    link.append(text);
    if (options.audience) {
      const badge = document.createElement("small");
      badge.className = `list-audience ${options.audience}`;
      badge.textContent = options.audience === "docente" ? "Uso docente" : "Estudiantes";
      link.append(badge);
    }
    return link;
  }));
  const anchor = location.hash && document.getElementById(location.hash.slice(1));
  if (anchor) anchor.scrollIntoView({ block: "center" });
}

renderLista("evaluaciones-estudiantes", evaluacionesEstudiantes, { audience: "estudiantes", studentVersion: true });
renderLista("evaluaciones-docente", evaluacionesDocente, { audience: "docente" });
renderLista("fichas-1", fichas.slice(0, 12), { audience: "estudiantes" });
renderLista("fichas-2", fichas.slice(12, 25), { audience: "estudiantes" });
renderLista("fichas-3", fichas.slice(25), { audience: "estudiantes" });
