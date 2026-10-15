// RENDERIZADO Y LECTURA DE DOCUMENTOS PEDAGÓGICOS NTICx 2026
// EES N° 33 "16 de septiembre" | Docente: Nahuel Lemos

const salida = document.getElementById("documento");
const archivo = new URLSearchParams(location.search).get("archivo") || "";
const vista = new URLSearchParams(location.search).get("vista") || "";
const audiencia = new URLSearchParams(location.search).get("audiencia") || "";

function escapar(texto) {
  return texto.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function generarSlug(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatoEnLinea(texto) {
  let t = escapar(texto.replace(/ {2}$/, "\u0000"))
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace("\u0000", "<br>");

  // Tareas / Checkboxes
  t = t.replace(/\[ \]\s*/g, '<span class="task-check-icon"></span>')
       .replace(/\[x\]\s*/gi, '<span class="task-check-icon checked">✓</span>');

  return t;
}

function renderMarkdown(markdown) {
  const html = [];
  const lineas = markdown.replace(/\r/g, "").split("\n");
  let i = 0;

  while (i < lineas.length) {
    const linea = lineas[i];

    // Bloque de código con syntax/ascii
    if (linea.startsWith("```")) {
      const codigo = [];
      i++;
      while (i < lineas.length && !lineas[i].startsWith("```")) {
        codigo.push(lineas[i]);
        i++;
      }
      i++; // saltar cierre de ```
      html.push(`<pre><code>${escapar(codigo.join("\n"))}</code></pre>`);
      continue;
    }

    // Regla horizontal
    if (/^\s*---+\s*$/.test(linea)) {
      html.push("<hr>");
      i++;
      continue;
    }

    // Encabezados con slug ID para el índice de navegación
    const encabezado = linea.match(/^(#{1,6})\s+(.+)$/);
    if (encabezado) {
      const nivel = encabezado[1].length;
      const texto = encabezado[2].trim();
      const slug = generarSlug(texto.replace(/[*_`]/g, ""));
      html.push(`<h${nivel} id="${slug}">${formatoEnLinea(texto)}</h${nivel}>`);
      i++;
      continue;
    }

    // Callouts estilo GitHub (> [!NOTE], > [!TIP], etc.)
    const calloutMatch = linea.match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
    if (calloutMatch) {
      const tipo = calloutMatch[1].toLowerCase();
      const calloutLines = [];
      i++;
      while (i < lineas.length && lineas[i].startsWith(">")) {
        calloutLines.push(lineas[i].replace(/^>\s?/, ""));
        i++;
      }
      const iconos = {
        note: "ℹ️",
        tip: "💡",
        important: "📌",
        warning: "⚠️",
        caution: "🛑"
      };
      const titulos = {
        note: "Nota pedagógica",
        tip: "Consejo práctico",
        important: "Punto clave importante",
        warning: "Atención",
        caution: "Precaución"
      };
      const cuerpo = calloutLines.map(l => `<p>${formatoEnLinea(l)}</p>`).join("");
      html.push(`
        <div class="doc-callout callout-${tipo}">
          <div class="callout-header">
            <span>${iconos[tipo] || "💡"}</span> ${titulos[tipo] || tipo}
          </div>
          ${cuerpo}
        </div>
      `);
      continue;
    }

    // Citas normales (blockquote agrupado)
    if (linea.startsWith("> ")) {
      const quoteLines = [];
      while (i < lineas.length && lineas[i].startsWith("> ")) {
        quoteLines.push(lineas[i].slice(2));
        i++;
      }
      html.push(`<blockquote>${quoteLines.map(formatoEnLinea).join("<br>")}</blockquote>`);
      continue;
    }

    // Tablas Markdown (| Col 1 | Col 2 |)
    if (/^\s*\|(.+)\|\s*$/.test(linea)) {
      const tableLines = [];
      while (i < lineas.length && /^\s*\|(.+)\|\s*$/.test(lineas[i])) {
        tableLines.push(lineas[i]);
        i++;
      }
      if (tableLines.length >= 2) {
        const parseRow = row => row.split("|").slice(1, -1).map(c => c.trim());
        const headers = parseRow(tableLines[0]);
        // Ignorar fila divisoria |--|--|
        const bodyRows = tableLines.slice(2).map(parseRow);

        let tableHtml = '<div class="table-responsive-wrapper"><table><thead><tr>';
        headers.forEach(h => { tableHtml += `<th>${formatoEnLinea(h)}</th>`; });
        tableHtml += '</tr></thead><tbody>';
        bodyRows.forEach(row => {
          tableHtml += '<tr>';
          row.forEach(cell => { tableHtml += `<td>${formatoEnLinea(cell)}</td>`; });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>';
        html.push(tableHtml);
      }
      continue;
    }

    // Listas (ul / ol) agrupadas
    const itemMatch = linea.match(/^\s*([-*+]|\d+\.)\s+(.+)$/);
    if (itemMatch) {
      const esOrdenada = /^\s*\d+\./.test(linea);
      const tag = esOrdenada ? "ol" : "ul";
      const items = [];
      while (i < lineas.length) {
        const curMatch = lineas[i].match(/^\s*([-*+]|\d+\.)\s+(.+)$/);
        if (!curMatch) break;
        items.push(`<li>${formatoEnLinea(curMatch[2])}</li>`);
        i++;
      }
      html.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }

    // Párrafos comunes
    if (!linea.trim()) {
      i++;
      continue;
    }

    html.push(`<p>${formatoEnLinea(linea)}</p>`);
    i++;
  }

  return html.join("\n");
}

function inicializarSelectorFuente() {
  const botones = {
    sm: document.getElementById("btn-font-sm"),
    md: document.getElementById("btn-font-md"),
    lg: document.getElementById("btn-font-lg"),
    xl: document.getElementById("btn-font-xl")
  };

  const viewer = document.getElementById("documento");
  const STORAGE_KEY = "nticx-reader-font";

  function cambiarFuente(tam) {
    if (!viewer) return;
    viewer.classList.remove("font-size-sm", "font-size-md", "font-size-lg", "font-size-xl");
    viewer.classList.add(`font-size-${tam}`);
    localStorage.setItem(STORAGE_KEY, tam);

    Object.keys(botones).forEach(k => {
      if (botones[k]) botones[k].classList.toggle("active", k === tam);
    });
  }

  Object.keys(botones).forEach(tam => {
    if (botones[tam]) {
      botones[tam].addEventListener("click", () => cambiarFuente(tam));
    }
  });

  const savedSize = localStorage.getItem(STORAGE_KEY) || "md";
  cambiarFuente(savedSize);
}

async function cargarDocumento() {
  if (!/^[\w./-]+\.md$/.test(archivo) || archivo.includes("..")) {
    salida.innerHTML = `
      <div style="text-align:center; padding: 40px 20px;">
        <h2>Documento no disponible</h2>
        <p style="color:var(--text-muted); margin: 12px 0 20px;">El material solicitado no es válido o ha sido movido.</p>
        <a href="materiales.html" class="btn-icon">← Volver al catálogo de materiales</a>
      </div>
    `;
    return;
  }

  try {
    const respuesta = await fetch(`../${encodeURI(archivo)}`);
    if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");
    let markdown = await respuesta.text();

    if (vista === "estudiantes" && archivo.endsWith("Evaluacion_Trimestral_1.md")) {
      markdown = markdown.split(/^# GUÍA DE CORRECCIÓN Y CRITERIOS PARA EL DOCENTE/m)[0];
    }

    // Encontrar título más relevante (si es ficha, evitar el membrete de escuela)
    const headings = [...markdown.matchAll(/^#{1,3}\s+(.+)$/gm)].map(m => m[1].replace(/[*_`]/g, ""));
    const tituloFicha = headings.find(h => /ficha de actividades|manual del estudiante|guía docente|evaluación|trabajo práctico|proyecto integrador/i.test(h));
    const tituloFinal = tituloFicha || headings[0] || "Documento NTICx";

    document.title = `${tituloFinal} | NTICx 4° Año • EES N° 33`;

    const aviso = audiencia === "docente"
      ? '<p class="document-audience teacher">👨‍🏫 <strong>Uso Docente</strong> · Este documento incluye orientaciones pedagógicas, solucionario y criterios de corrección RITE.</p>'
      : '<p class="document-audience student">🎒 <strong>Material para Estudiantes</strong> · Formato adaptado para lectura, impresión y carpeta de estudio.</p>';

    const original = audiencia === "docente"
      ? ` · <a href="../${encodeURI(archivo)}" target="_blank" rel="noopener noreferrer">Abrir archivo .md original (nueva pestaña)</a>`
      : "";

    salida.innerHTML = `
      ${aviso}
      <p class="document-source">Materia: NTICx 4° 1° • EES N° 33 “16 de septiembre” • Prof. Nahuel Lemos${original}</p>
      ${renderMarkdown(markdown)}
    `;

    // Si la URL contiene un ancla, hacer scroll suave al elemento
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.slice(1);
        const elemento = document.getElementById(id);
        if (elemento) elemento.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  } catch (err) {
    salida.innerHTML = `
      <div style="text-align:center; padding: 40px 20px;">
        <h2>Error al cargar el documento</h2>
        <p style="color:var(--text-muted); margin: 12px 0 20px;">Ocurrió un problema al leer el archivo en el servidor.</p>
        <a href="materiales.html" class="btn-icon">← Volver a Materiales</a>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarSelectorFuente();
  cargarDocumento();
});
