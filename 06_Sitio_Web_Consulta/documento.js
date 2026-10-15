const salida = document.getElementById("documento");
const archivo = new URLSearchParams(location.search).get("archivo") || "";
const vista = new URLSearchParams(location.search).get("vista") || "";
const audiencia = new URLSearchParams(location.search).get("audiencia") || "";

function escapar(texto) {
  return texto.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function formatoEnLinea(texto) {
  return escapar(texto.replace(/ {2}$/, "\u0000"))
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace("\u0000", "<br>");
}

function renderMarkdown(markdown) {
  const html = [];
  let tipoLista = null;
  let enCodigo = false;
  let codigo = [];
  const cerrarLista = () => { if (tipoLista) { html.push(`</${tipoLista}>`); tipoLista = null; } };
  for (const linea of markdown.replace(/\r/g, "").split("\n")) {
    if (linea.startsWith("```")) {
      cerrarLista();
      if (enCodigo) { html.push(`<pre><code>${escapar(codigo.join("\n"))}</code></pre>`); codigo = []; }
      enCodigo = !enCodigo;
      continue;
    }
    if (enCodigo) { codigo.push(linea); continue; }
    if (/^\s*---+\s*$/.test(linea)) { cerrarLista(); html.push("<hr>"); continue; }
    const encabezado = linea.match(/^(#{1,6})\s+(.+)$/);
    if (encabezado) { cerrarLista(); const nivel = encabezado[1].length; html.push(`<h${nivel}>${formatoEnLinea(encabezado[2])}</h${nivel}>`); continue; }
    const item = linea.match(/^\s*[-*+]\s+(.+)$/) || linea.match(/^\s*\d+\.\s+(.+)$/);
    if (item) {
      const nuevoTipo = /^\s*\d+\./.test(linea) ? "ol" : "ul";
      if (tipoLista !== nuevoTipo) { cerrarLista(); html.push(`<${nuevoTipo}>`); tipoLista = nuevoTipo; }
      html.push(`<li>${formatoEnLinea(item[1])}</li>`);
      continue;
    }
    cerrarLista();
    if (!linea.trim()) continue;
    if (linea.startsWith("> ")) { html.push(`<blockquote>${formatoEnLinea(linea.slice(2))}</blockquote>`); continue; }
    html.push(`<p>${formatoEnLinea(linea)}</p>`);
  }
  cerrarLista();
  return html.join("\n");
}

async function cargarDocumento() {
  if (!/^[\w./-]+\.md$/.test(archivo) || archivo.includes("..")) {
    salida.innerHTML = "<h1>Documento no disponible</h1><p>Elegí un material desde la sección de materiales.</p>";
    return;
  }
  try {
    const respuesta = await fetch(`../${encodeURI(archivo)}`);
    if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");
    let markdown = await respuesta.text();
    if (vista === "estudiantes" && archivo.endsWith("Evaluacion_Trimestral_1.md")) {
      markdown = markdown.split(/^# GUÍA DE CORRECCIÓN Y CRITERIOS PARA EL DOCENTE/m)[0];
    }
    const titulo = markdown.match(/^#\s+(.+)$/m)?.[1]?.replace(/[*_`]/g, "") || "Documento NTICx";
    document.title = `${titulo} | NTICx 4° Año`;
    const aviso = audiencia === "docente" ? '<p class="document-audience teacher">👨‍🏫 Uso docente · Este documento incluye criterios o claves de corrección.</p>' : '<p class="document-audience student">🎒 Material para estudiantes · Disponible para imprimir o guardar como PDF.</p>';
    const original = audiencia === "docente" ? ` · <a href="../${encodeURI(archivo)}" target="_blank" rel="noopener noreferrer">Abrir archivo original (nueva pestaña)</a>` : "";
    salida.innerHTML = `${aviso}<p class="document-source">Material del proyecto NTICx${original}</p>${renderMarkdown(markdown)}`;
  } catch {
    salida.innerHTML = "<h1>No se pudo cargar el documento</h1><p>Volvé a <a href=\"materiales.html\">Materiales</a> e intentá nuevamente.</p>";
  }
}

cargarDocumento();
