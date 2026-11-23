(() => {
  const byId = id => document.getElementById(id);

  const pcGroups = [
    { title: "Componentes de la placa", pieces: [
      { id: "cpu", label: "Procesador", zone: "cpu", detail: "Ejecuta instrucciones y procesa datos." },
      { id: "ram", label: "Memoria RAM", zone: "ram", detail: "Guarda temporalmente datos y programas en uso." }
    ] },
    { title: "Dispositivos de entrada", pieces: [
      { id: "teclado", label: "Teclado", zone: "entrada", detail: "Permite ingresar texto y comandos." },
      { id: "mouse", label: "Mouse", zone: "entrada", detail: "Permite señalar y seleccionar en pantalla." },
      { id: "microfono", label: "Micrófono", zone: "entrada", detail: "Permite ingresar sonidos." },
      { id: "camara", label: "Cámara", zone: "entrada", detail: "Permite ingresar imágenes." }
    ] },
    { title: "Dispositivos de salida", pieces: [
      { id: "monitor", label: "Monitor", zone: "salida", detail: "Muestra información e imágenes." },
      { id: "parlantes", label: "Parlantes", zone: "salida", detail: "Reproducen sonido." },
      { id: "impresora", label: "Impresora", zone: "salida", detail: "Permite obtener información en papel." }
    ] },
    { title: "Programas", pieces: [
      { id: "texto", label: "Editor de texto", zone: "software", detail: "Sirve para crear y editar textos." },
      { id: "dibujo", label: "Programa de dibujo", zone: "software", detail: "Sirve para crear imágenes." },
      { id: "musica", label: "Reproductor de música", zone: "software", detail: "Sirve para reproducir audio." },
      { id: "juego", label: "Juego", zone: "software", detail: "Permite interactuar con una actividad lúdica." }
    ] }
  ];
  const pcPieces = pcGroups.flatMap(group => group.pieces);
  const pcZones = { cpu: "Procesador", ram: "Memoria RAM", entrada: "Entrada", salida: "Salida", software: "Programas" };
  const pcArt = {
    cpu: '<rect x="14" y="6" width="36" height="36" rx="4" fill="#334155"/><path d="M20 2v4m8-4v4m8-4v4m8-4v4M20 42v4m8-4v4m8-4v4m8-4v4M10 12h4m-4 8h4m-4 8h4m-4 8h4m36-24h4m-4 8h4m-4 8h4m-4 8h4" stroke="#64748b" stroke-width="3"/><rect x="22" y="14" width="20" height="20" rx="2" fill="#38bdf8"/>',
    ram: '<rect x="5" y="12" width="54" height="25" rx="3" fill="#15803d"/><path d="M10 37v4m6-4v4m6-4v4m6-4v4m6-4v4m6-4v4m6-4v4m6-4v4" stroke="#eab308" stroke-width="3"/><path d="M11 18h8v11h-8zm12 0h8v11h-8zm12 0h8v11h-8zm12 0h8v11h-8z" fill="#1e293b"/>',
    teclado: '<rect x="4" y="13" width="56" height="25" rx="4" fill="#475569"/><path d="M10 19h4m3 0h4m3 0h4m3 0h4m3 0h4m3 0h4m3 0h4M10 24h4m3 0h4m3 0h4m3 0h4m3 0h4m3 0h4m3 0h4M18 31h28" stroke="#f8fafc" stroke-width="2" stroke-linecap="round"/>',
    mouse: '<rect x="20" y="4" width="24" height="40" rx="12" fill="#64748b"/><path d="M32 5v13m-11 0h22" stroke="#f8fafc" stroke-width="2"/><rect x="30" y="9" width="4" height="6" rx="2" fill="#38bdf8"/>',
    microfono: '<rect x="24" y="4" width="16" height="25" rx="8" fill="#7c3aed"/><path d="M18 21v3a14 14 0 0 0 28 0v-3M32 38v6m-9 0h18" fill="none" stroke="#475569" stroke-width="3" stroke-linecap="round"/>',
    camara: '<rect x="9" y="12" width="46" height="28" rx="5" fill="#475569"/><path d="M18 12l4-6h13l4 6" fill="#64748b"/><circle cx="32" cy="26" r="9" fill="#38bdf8"/><circle cx="32" cy="26" r="4" fill="#1e293b"/>',
    monitor: '<rect x="5" y="4" width="54" height="34" rx="4" fill="#334155"/><rect x="9" y="8" width="46" height="25" rx="2" fill="#7dd3fc"/><path d="M32 38v6m-11 0h22" stroke="#475569" stroke-width="3" stroke-linecap="round"/>',
    parlantes: '<rect x="9" y="4" width="20" height="40" rx="4" fill="#475569"/><rect x="35" y="4" width="20" height="40" rx="4" fill="#475569"/><circle cx="19" cy="29" r="7" fill="#94a3b8"/><circle cx="45" cy="29" r="7" fill="#94a3b8"/><circle cx="19" cy="14" r="3" fill="#38bdf8"/><circle cx="45" cy="14" r="3" fill="#38bdf8"/>',
    impresora: '<path d="M17 17V5h30v12" fill="#e2e8f0" stroke="#475569" stroke-width="3"/><rect x="7" y="16" width="50" height="24" rx="4" fill="#64748b"/><path d="M17 30h30v15H17z" fill="#fff" stroke="#475569" stroke-width="2"/><path d="M22 35h20m-20 5h14" stroke="#3b82f6" stroke-width="2"/><circle cx="50" cy="22" r="2" fill="#4ade80"/>',
    texto: '<rect x="15" y="3" width="34" height="42" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><path d="M22 12h20m-20 7h20m-20 7h20m-20 7h13" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>',
    dibujo: '<rect x="10" y="5" width="44" height="36" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><circle cx="21" cy="16" r="5" fill="#f59e0b"/><path d="M15 35l12-12 9 8 7-7 6 11z" fill="#22c55e"/>',
    musica: '<rect x="12" y="4" width="40" height="40" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><path d="M36 11v19a6 6 0 1 1-3-5V14l11-3v15a6 6 0 1 1-3-5V10z" fill="#7c3aed"/>',
    juego: '<path d="M15 15h34q8 0 10 15l1 7q0 7-7 5l-10-7H21l-10 7q-7 2-7-5l1-7q2-15 10-15z" fill="#2563eb"/><path d="M18 21v10m-5-5h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="44" cy="23" r="3" fill="#facc15"/><circle cx="50" cy="29" r="3" fill="#f472b6"/>'
  };
  const pcInstalled = new Set();
  let pcSelected = null;
  const pcSlots = [...document.querySelectorAll("[data-pc-slot]")];
  const pcPalette = byId("pc-palette");
  function pcIcon(id) {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 64 48");
    icon.setAttribute("aria-hidden", "true");
    icon.classList.add("pc-piece-art");
    icon.innerHTML = pcArt[id];
    return icon;
  }
  function updatePc() {
    pcSlots.forEach(slot => {
      const type = slot.dataset.pcSlot;
      const items = pcPieces.filter(piece => piece.zone === type && pcInstalled.has(piece.id));
      slot.replaceChildren();
      const title = document.createElement("strong");
      title.textContent = pcZones[type];
      slot.appendChild(title);
      if (items.length) {
        const content = document.createElement("div");
        content.className = "pc-slot-pieces";
        items.forEach(item => {
          const piece = document.createElement("button");
          piece.type = "button";
          piece.className = "pc-slot-piece";
          piece.dataset.pcPlaced = item.id;
          piece.setAttribute("aria-label", `Quitar ${item.label}`);
          piece.title = `Quitar ${item.label}`;
          piece.append(pcIcon(item.id), document.createTextNode(item.label));
          piece.addEventListener("click", () => {
            pcInstalled.delete(item.id);
            if (pcSelected?.id === item.id) pcSelected = null;
            byId("pc-selection").textContent = `${item.label} se quitó del rompecabezas.`;
            byId("pc-result").replaceChildren();
            updatePc();
            (slot.querySelector(".pc-slot-piece") || slot.querySelector(".pc-place")).focus();
          });
          content.appendChild(piece);
        });
        slot.appendChild(content);
      }
      const place = document.createElement("button");
      place.type = "button";
      place.className = "pc-place";
      place.textContent = items.length ? "+ Colocar otra pieza" : "+ Colocar aquí";
      place.setAttribute("aria-label", `Colocar pieza en ${pcZones[type]}`);
      place.addEventListener("click", () => installPcPart(type));
      slot.appendChild(place);
      slot.classList.toggle("is-filled", items.length > 0);
      slot.classList.toggle("is-target", Boolean(pcSelected && pcSelected.zone === type));
      slot.setAttribute("aria-label", pcZones[type]);
    });
    pcPalette.querySelectorAll("[data-pc-part]").forEach(button => {
      button.setAttribute("aria-pressed", String(Boolean(pcSelected && button.dataset.pcPart === pcSelected.id)));
      button.classList.toggle("is-placed", pcInstalled.has(button.dataset.pcPart));
      const piece = pcPieces.find(item => item.id === button.dataset.pcPart);
      button.setAttribute("aria-label", `${piece.label}${pcInstalled.has(piece.id) ? ", ya colocado" : ""}. ${piece.detail}`);
    });
  }
  function selectPcPart(item) {
    pcSelected = item;
    byId("pc-selection").textContent = `Elegiste ${item.label}. ${item.detail} Colocala en la zona resaltada: ${pcZones[item.zone]}.`;
    updatePc();
    const target = pcSlots.find(slot => slot.dataset.pcSlot === item.zone);
    const place = target.querySelector(".pc-place");
    place.focus({ preventScroll: true });
    place.scrollIntoView({ block: "center" });
  }
  function installPcPart(type) {
    if (!pcSelected) {
      byId("pc-selection").textContent = "Primero elegí una pieza de la lista.";
      return;
    }
    if (pcSelected.zone !== type) {
      byId("pc-selection").textContent = `${pcSelected.label} no va en esa zona. Buscá ${pcZones[pcSelected.zone]}, que está resaltada.`;
      return;
    }
    const item = pcSelected;
    pcSelected = null;
    const slot = pcSlots.find(zone => zone.dataset.pcSlot === type);
    const restoreFocus = slot.contains(document.activeElement);
    if (pcInstalled.has(item.id)) {
      byId("pc-selection").textContent = `${item.label} ya estaba en el rompecabezas. Tocá la pieza colocada para quitarla.`;
    } else {
      pcInstalled.add(item.id);
      byId("pc-selection").textContent = `${item.label} se agregó. ${item.detail}`;
      byId("pc-result").replaceChildren();
    }
    updatePc();
    if (restoreFocus) slot.querySelector(`[data-pc-placed="${item.id}"]`).focus();
  }
  pcGroups.forEach(group => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "pc-part-group";
    const legend = document.createElement("legend");
    legend.textContent = group.title;
    fieldset.appendChild(legend);
    group.pieces.forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pc-part";
      button.draggable = true;
      button.dataset.pcPart = item.id;
      const text = document.createElement("span");
      text.textContent = item.label;
      button.append(pcIcon(item.id), text);
      button.addEventListener("click", () => selectPcPart(item));
      button.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", `nticx-pc:${item.id}`);
        event.dataTransfer.effectAllowed = "copy";
        pcSelected = item;
        byId("pc-selection").textContent = `Arrastrando ${item.label}: soltala en ${pcZones[item.zone]}.`;
        updatePc();
      });
      fieldset.appendChild(button);
    });
    pcPalette.appendChild(fieldset);
  });
  pcSlots.forEach(slot => {
    slot.addEventListener("dragover", event => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
    });
    slot.addEventListener("drop", event => {
      event.preventDefault();
      const [prefix, id] = event.dataTransfer.getData("text/plain").split(":");
      const item = prefix === "nticx-pc" ? pcPieces.find(part => part.id === id) : null;
      if (!item) {
        byId("pc-selection").textContent = "Elegí una pieza de la lista para colocarla.";
        return;
      }
      pcSelected = item;
      installPcPart(slot.dataset.pcSlot);
    });
  });
  byId("pc-reset").addEventListener("click", () => {
    pcInstalled.clear();
    pcSelected = null;
    byId("pc-selection").textContent = "Rompecabezas reiniciado. Elegí una pieza para empezar.";
    byId("pc-result").replaceChildren();
    updatePc();
  });
  byId("pc-form").addEventListener("submit", event => {
    event.preventDefault();
    const requirements = {
      texto: { action: "Escribir un texto", needs: [{ ids: ["monitor"], label: "monitor" }, { ids: ["teclado"], label: "teclado" }] },
      dibujo: { action: "Crear un dibujo", needs: [{ ids: ["monitor"], label: "monitor" }, { ids: ["mouse"], label: "mouse" }] },
      musica: { action: "Escuchar música", needs: [{ ids: ["monitor"], label: "monitor" }, { ids: ["parlantes"], label: "parlantes" }, { ids: ["teclado", "mouse"], label: "teclado o mouse para controlar el reproductor" }] },
      juego: { action: "Jugar", needs: [{ ids: ["monitor"], label: "monitor" }, { ids: ["teclado", "mouse"], label: "teclado o mouse para controlar el juego" }] }
    };
    const base = [{ ids: ["cpu"], label: "procesador" }, { ids: ["ram"], label: "memoria RAM" }];
    const selectedApps = pcGroups.find(group => group.title === "Programas").pieces.filter(item => pcInstalled.has(item.id));
    const result = byId("pc-result");
    result.replaceChildren();
    const intro = document.createElement("p");
    intro.textContent = "En este modelo simplificado:";
    result.appendChild(intro);
    if (!selectedApps.length) {
      const message = document.createElement("p");
      const missingBase = base.filter(need => !need.ids.some(id => pcInstalled.has(id))).map(need => need.label);
      message.textContent = `${missingBase.length ? `Para empezar, agregá ${missingBase.join(" y ")}. ` : ""}Agregá al menos un programa para explorar qué podrías hacer con tu selección.`;
      result.appendChild(message);
      return;
    }
    const list = document.createElement("ul");
    selectedApps.forEach(app => {
      const scenario = requirements[app.id];
      const missing = [...base, ...scenario.needs].filter(need => !need.ids.some(id => pcInstalled.has(id))).map(need => need.label);
      const entry = document.createElement("li");
      entry.textContent = missing.length
        ? `${scenario.action}: para este ejemplo faltaría agregar ${missing.join(", ")}.`
        : `${scenario.action}: tu selección tiene las piezas necesarias para este ejemplo.`;
      list.appendChild(entry);
    });
    result.appendChild(list);
  });
  updatePc();

  const dataCases = [
    { text: "23", answer: "dato", explanation: "Sin una referencia no sabemos qué mide ese número." },
    { text: "La biblioteca prestó 23 libros durante el lunes.", answer: "informacion", explanation: "El número tiene contexto: indica qué se contó, dónde y cuándo." },
    { text: "18 °C", answer: "dato", explanation: "Es una medición aislada: falta saber dónde y cuándo se registró." },
    { text: "A las 9, la temperatura del aula era de 18 °C.", answer: "informacion", explanation: "La medición se interpreta con un lugar y un momento." }
  ];
  const dataCase = byId("data-case");
  function showDataCase() {
    byId("data-example").textContent = dataCases[Number(dataCase.value)].text;
    byId("data-answer").value = "";
    byId("data-result").textContent = "";
  }
  dataCase.addEventListener("change", showDataCase);
  byId("data-form").addEventListener("submit", event => {
    event.preventDefault();
    const answer = byId("data-answer").value;
    if (!answer) {
      byId("data-result").textContent = "Elegí una clasificación.";
      return;
    }
    const item = dataCases[Number(dataCase.value)];
    byId("data-result").textContent = `${answer === item.answer ? "¡Correcto!" : "Revisá la clasificación."} ${item.explanation}`;
  });
  showDataCase();

  let packetParts = [];
  let packetTimers = [];
  const packetPaths = [...document.querySelectorAll(".network-path")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function clearPacketTimers() {
    packetTimers.forEach(clearTimeout);
    packetTimers = [];
  }
  function resetPacketDisplay() {
    clearPacketTimers();
    packetPaths.forEach((path, index) => {
      path.className = "network-path";
      path.querySelector(".packet-token").textContent = String(index + 1);
      byId(`packet-inbox-${index + 1}`).textContent = `${index + 1} · esperando`;
      byId(`packet-inbox-${index + 1}`).className = "";
    });
    byId("packet-retry").disabled = true;
  }
  function packetAfter(delay, callback) {
    packetTimers.push(setTimeout(callback, reducedMotion.matches ? 0 : delay));
  }
  byId("packet-form").addEventListener("submit", event => {
    event.preventDefault();
    resetPacketDisplay();
    const characters = Array.from(byId("packet-message").value.trim());
    if (characters.length < 3 || characters.length > 30) {
      byId("packet-result").textContent = "Ingresá un mensaje ficticio de 3 a 30 caracteres.";
      packetParts = [];
      return;
    }
    packetParts = [0, 1, 2].map(index => characters.slice(Math.floor(index * characters.length / 3), Math.floor((index + 1) * characters.length / 3)).join(""));
    packetPaths.forEach((path, index) => {
      path.querySelector(".packet-token").textContent = String(index + 1);
      path.classList.add("is-travelling");
    });
    byId("packet-result").textContent = `Enviando: 1 «${packetParts[0]}», 2 «${packetParts[1]}», 3 «${packetParts[2]}». Mirá el recorrido de cada parte.`;
    packetAfter(1200, () => {
      byId("packet-inbox-3").textContent = `3 · ${packetParts[2]}`;
      byId("packet-inbox-3").className = "received";
    });
    packetAfter(1550, () => {
      packetPaths[1].classList.add("is-lost");
      byId("packet-inbox-2").textContent = "2 · perdida";
      byId("packet-inbox-2").className = "missing";
    });
    packetAfter(1900, () => {
      byId("packet-inbox-1").textContent = `1 · ${packetParts[0]}`;
      byId("packet-inbox-1").className = "received";
      byId("packet-result").textContent = "Llegaron primero la parte 3 y luego la 1; la 2 se perdió. El receptor espera la parte faltante. Retransmitila para reconstruir el mensaje.";
      byId("packet-retry").disabled = false;
    });
  });
  byId("packet-retry").addEventListener("click", () => {
    byId("packet-retry").disabled = true;
    packetPaths[1].classList.remove("is-travelling", "is-lost");
    packetPaths[1].classList.add("is-retrying");
    byId("packet-inbox-2").textContent = "2 · reenviando";
    byId("packet-result").textContent = "El receptor pidió de nuevo la parte 2; está viajando hacia el destino.";
    packetAfter(1200, () => {
      byId("packet-inbox-2").textContent = `2 · ${packetParts[1]}`;
      byId("packet-inbox-2").className = "received";
      byId("packet-result").textContent = `Se retransmitió y recibió la parte 2 «${packetParts[1]}». El receptor ordenó las partes 1, 2 y 3. Mensaje reconstruido: «${packetParts.join("")}».`;
    });
  });

  const documents = [
    { title: "Huerta escolar", text: "La escuela cuida la huerta y ahorra agua." },
    { title: "El ciclo del agua", text: "El agua circula entre la tierra, el aire y los ríos." },
    { title: "Radio de la escuela", text: "La escuela produce un programa de radio." },
    { title: "Huertas urbanas", text: "Una huerta necesita sol, tierra y agua." }
  ];
  const normalize = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  byId("search-form").addEventListener("submit", event => {
    event.preventDefault();
    const first = normalize(byId("search-first").value.trim());
    const second = normalize(byId("search-second").value.trim());
    const operator = byId("search-operator").value;
    const result = byId("search-result");
    if (!first || !second) {
      result.textContent = "Escribí los dos términos para comparar la búsqueda.";
      return;
    }
    const matches = documents.filter(item => {
      const content = normalize(`${item.title} ${item.text}`);
      return operator === "AND" ? content.includes(first) && content.includes(second) : content.includes(first) || content.includes(second);
    });
    result.replaceChildren();
    const summary = document.createElement("p");
    summary.textContent = `${matches.length} resultado${matches.length === 1 ? "" : "s"} con ${operator}.`;
    result.appendChild(summary);
    const list = document.createElement("ul");
    matches.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.title}: ${item.text}`;
      list.appendChild(li);
    });
    if (matches.length) result.appendChild(list);
  });

  function updateHtmlPreview() {
    const template = document.createElement("template");
    template.innerHTML = byId("html-input").value;
    const allowed = new Set(["H1", "H2", "H3", "P", "STRONG", "EM", "UL", "OL", "LI", "BR"]);
    function copySafe(node, parent) {
      if (node.nodeType === Node.TEXT_NODE) {
        parent.appendChild(document.createTextNode(node.textContent));
      } else if (node.nodeType === Node.ELEMENT_NODE && allowed.has(node.tagName)) {
        const element = document.createElement(node.tagName.toLowerCase());
        node.childNodes.forEach(child => copySafe(child, element));
        parent.appendChild(element);
      }
    }
    const preview = byId("html-preview");
    preview.replaceChildren();
    template.content.childNodes.forEach(node => copySafe(node, preview));
  }
  byId("html-form").addEventListener("submit", event => {
    event.preventDefault();
    updateHtmlPreview();
  });
  updateHtmlPreview();

  function luminance(hex) {
    const channels = hex.match(/[0-9a-f]{2}/gi).map(channel => parseInt(channel, 16) / 255);
    const [red, green, blue] = channels.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  }
  function updateDesign() {
    const background = byId("design-background").value;
    const text = byId("design-text").value;
    const preview = byId("design-preview");
    preview.style.backgroundColor = background;
    preview.style.color = text;
    preview.style.fontFamily = byId("design-font").value;
    preview.style.textAlign = byId("design-align").value;
    const values = [luminance(background), luminance(text)].sort((a, b) => b - a);
    const contrast = (values[0] + 0.05) / (values[1] + 0.05);
    byId("design-result").textContent = `Contraste: ${contrast.toFixed(2)}:1. ${contrast >= 4.5 ? "Alcanza la referencia de 4,5:1 para texto normal." : "Para texto normal, probá una combinación que alcance al menos 4,5:1."} La legibilidad también depende del tamaño, la tipografía y la composición.`;
  }
  ["design-background", "design-text", "design-font", "design-align"].forEach(id => byId(id).addEventListener("change", updateDesign));
  updateDesign();

  const storyKey = "nticx-storyboard-v1";
  const initialScenes = () => [
    { id: "b", title: "Escena B", description: "El grupo descubre que algunos libros quedaron desordenados.", sound: "ambiente", transition: "corte" },
    { id: "c", title: "Escena C", description: "El grupo organiza los libros para que otras personas los encuentren.", sound: "musica", transition: "fundido" },
    { id: "a", title: "Escena A", description: "Un grupo llega a la biblioteca para buscar un libro.", sound: "silencio", transition: "corte" }
  ];
  const sounds = { silencio: "Silencio", ambiente: "Sonido ambiente", musica: "Música" };
  const transitions = { corte: "Corte", fundido: "Fundido", ninguna: "Sin transición" };
  const storyBackground = '<rect width="300" height="160" fill="#dbeafe"/><rect y="125" width="300" height="35" fill="#bfdbad"/><rect x="185" y="24" width="92" height="101" rx="4" fill="#a16207"/><path d="M190 57h82M190 90h82" stroke="#fef3c7" stroke-width="5"/><rect x="194" y="31" width="10" height="22" fill="#ef4444"/><rect x="208" y="28" width="10" height="25" fill="#3b82f6"/><rect x="223" y="33" width="11" height="20" fill="#22c55e"/>';
  const storyArt = {
    a: '<rect x="20" y="25" width="52" height="100" rx="3" fill="#475569"/><rect x="25" y="31" width="42" height="94" fill="#fef3c7"/><circle cx="58" cy="79" r="3" fill="#475569"/><circle cx="116" cy="63" r="15" fill="#f59e0b"/><path d="M96 124V100q0-22 20-22t20 22v24" fill="#2563eb"/><path d="M135 100l23-12" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/><rect x="197" y="65" width="10" height="21" fill="#a78bfa"/><rect x="213" y="62" width="10" height="24" fill="#f97316"/>',
    b: '<circle cx="112" cy="65" r="15" fill="#f59e0b"/><path d="M92 124V102q0-22 20-22t20 22v22" fill="#2563eb"/><path d="M132 100l22-8" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/><rect x="194" y="68" width="11" height="18" transform="rotate(-20 194 68)" fill="#a78bfa"/><rect x="214" y="70" width="11" height="18" transform="rotate(22 214 70)" fill="#f97316"/><rect x="150" y="120" width="30" height="8" transform="rotate(-8 150 120)" fill="#ef4444"/><rect x="160" y="113" width="28" height="8" transform="rotate(10 160 113)" fill="#3b82f6"/><text x="135" y="55" font-size="27" fill="#1e3a8a" font-family="sans-serif">?</text>',
    c: '<circle cx="112" cy="65" r="15" fill="#f59e0b"/><path d="M92 124V102q0-22 20-22t20 22v22" fill="#2563eb"/><path d="M132 95l45-17" stroke="#2563eb" stroke-width="8" stroke-linecap="round"/><rect x="166" y="63" width="12" height="22" fill="#ef4444"/><rect x="194" y="64" width="11" height="22" fill="#a78bfa"/><rect x="209" y="62" width="11" height="24" fill="#f97316"/><rect x="224" y="66" width="11" height="20" fill="#14b8a6"/><rect x="239" y="63" width="11" height="23" fill="#ef4444"/><path d="M152 39l7 7 15-17" fill="none" stroke="#15803d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  let scenes = initialScenes();
  let draggedStoryId = null;
  const storyResult = byId("story-result");
  try {
    const saved = localStorage.getItem(storyKey);
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      const ids = initialScenes().map(scene => scene.id);
      if (!Array.isArray(parsed) || parsed.length !== ids.length || new Set(parsed.map(scene => scene?.id)).size !== ids.length ||
          parsed.some(scene => !scene || !ids.includes(scene.id) || typeof scene.description !== "string" || scene.description.length > 300 ||
            !Object.prototype.hasOwnProperty.call(sounds, scene.sound) || !Object.prototype.hasOwnProperty.call(transitions, scene.transition))) {
        throw new Error("Formato de storyboard inválido");
      }
      scenes = parsed.map(scene => ({ ...scene, title: initialScenes().find(item => item.id === scene.id).title }));
      storyResult.textContent = "Storyboard guardado recuperado de este navegador.";
    }
  } catch (error) {
    storyResult.textContent = "No se pudo recuperar el storyboard guardado. Podés practicar y volver a intentar guardarlo.";
    console.error("Error al recuperar el storyboard:", error);
  }
  function storySelect(labelText, options, value, change) {
    const label = document.createElement("label");
    label.textContent = labelText;
    const select = document.createElement("select");
    Object.entries(options).forEach(([key, text]) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = text;
      select.appendChild(option);
    });
    select.value = value;
    select.addEventListener("change", () => {
      change(select.value);
      storyResult.textContent = "Hay cambios sin guardar.";
    });
    label.appendChild(select);
    return label;
  }
  function renderStory() {
    const container = byId("story-scenes");
    container.replaceChildren();
    scenes.forEach((scene, index) => {
      const card = document.createElement("article");
      card.className = "story-scene";
      card.dataset.storyId = scene.id;
      card.addEventListener("dragover", event => {
        if (!draggedStoryId || draggedStoryId === scene.id) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        card.classList.add("is-drop-target");
      });
      card.addEventListener("dragleave", event => {
        if (!card.contains(event.relatedTarget)) card.classList.remove("is-drop-target");
      });
      card.addEventListener("drop", event => {
        event.preventDefault();
        card.classList.remove("is-drop-target");
        const from = scenes.findIndex(item => item.id === draggedStoryId);
        const to = scenes.findIndex(item => item.id === scene.id);
        draggedStoryId = null;
        if (from === -1 || to === -1 || from === to) return;
        moveStory(from, to);
        byId(`story-heading-${scenes[to].id}`).focus();
      });
      const heading = document.createElement("div");
      heading.className = "story-heading";
      const title = document.createElement("h3");
      title.id = `story-heading-${scene.id}`;
      title.tabIndex = -1;
      title.textContent = `${index + 1}. ${scene.title}`;
      heading.appendChild(title);
      const handle = document.createElement("span");
      handle.className = "story-drag";
      handle.textContent = "⠿ Arrastrar";
      handle.title = "Arrastrá esta viñeta con el mouse; también podés usar los botones de orden.";
      handle.setAttribute("aria-hidden", "true");
      handle.draggable = true;
      handle.addEventListener("dragstart", event => {
        draggedStoryId = scene.id;
        event.dataTransfer.setData("text/plain", scene.id);
        event.dataTransfer.effectAllowed = "move";
      });
      handle.addEventListener("dragend", () => {
        draggedStoryId = null;
        container.querySelectorAll(".is-drop-target").forEach(element => element.classList.remove("is-drop-target"));
      });
      heading.appendChild(handle);
      card.appendChild(heading);
      const illustration = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      illustration.setAttribute("viewBox", "0 0 300 160");
      illustration.setAttribute("aria-hidden", "true");
      illustration.classList.add("story-illustration");
      illustration.innerHTML = storyBackground + storyArt[scene.id];
      card.appendChild(illustration);
      const label = document.createElement("label");
      label.textContent = "Descripción de la escena";
      const description = document.createElement("textarea");
      description.rows = 2;
      description.maxLength = 300;
      description.value = scene.description;
      description.addEventListener("input", () => {
        scene.description = description.value;
        storyResult.textContent = "Hay cambios sin guardar.";
      });
      label.appendChild(description);
      card.appendChild(label);
      card.appendChild(storySelect("Sonido", sounds, scene.sound, value => { scene.sound = value; }));
      card.appendChild(storySelect("Transición a la siguiente escena", transitions, scene.transition, value => { scene.transition = value; }));
      const controls = document.createElement("div");
      controls.className = "activity-controls";
      [[-1, "← Antes"], [1, "Después →"]].forEach(([direction, text]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn-detail activity-button";
        button.textContent = text;
        button.id = `story-${scene.id}-${direction === -1 ? "up" : "down"}`;
        button.setAttribute("aria-label", `${text} ${scene.title}`);
        button.disabled = index + direction < 0 || index + direction >= scenes.length;
        button.addEventListener("click", () => {
          moveStory(index, index + direction);
          const moved = byId(button.id);
          if (!moved.disabled) moved.focus();
          else byId(`story-${scene.id}-${direction === -1 ? "down" : "up"}`).focus();
        });
        controls.appendChild(button);
      });
      card.appendChild(controls);
      container.appendChild(card);
    });
  }
  function moveStory(from, to) {
    const [scene] = scenes.splice(from, 1);
    scenes.splice(to, 0, scene);
    renderStory();
    storyResult.textContent = `${scene.title} está en la posición ${to + 1}. Guardá para conservar los cambios.`;
  }
  byId("story-save").addEventListener("click", () => {
    try {
      localStorage.setItem(storyKey, JSON.stringify(scenes));
      storyResult.textContent = "Storyboard guardado en este navegador.";
    } catch (error) {
      storyResult.textContent = "No se pudo guardar el storyboard en este navegador. Podés seguir trabajando mientras la página esté abierta.";
      console.error("Error al guardar el storyboard:", error);
    }
  });
  byId("story-reset").addEventListener("click", () => {
    try {
      localStorage.removeItem(storyKey);
      scenes = initialScenes();
      renderStory();
      storyResult.textContent = "Storyboard reiniciado y copia guardada eliminada.";
    } catch (error) {
      storyResult.textContent = "No se pudo borrar el storyboard guardado en este navegador.";
      console.error("Error al borrar el storyboard:", error);
    }
  });
  renderStory();

  const scamCases = [
    { message: "Mensaje ficticio: «Tu cuenta será cerrada en una hora. Enviá tu contraseña para conservarla»", signals: ["urgencia", "secreto"], explanation: "La presión y el pedido de contraseña son señales de alerta. Una organización legítima no necesita que le envíes tu contraseña." },
    { message: "Mensaje ficticio: «Ganaste un premio inesperado. Entrá ahora a un enlace desconocido para reclamarlo»", signals: ["urgencia", "enlace", "premio"], explanation: "Un premio inesperado, la urgencia y un enlace desconocido son señales para detenerse y verificar." },
    { message: "Mensaje ficticio: «La biblioteca invita al taller de lectura el viernes. Consultá el horario por el canal habitual de la escuela»", signals: [], explanation: "En el texto no aparecen las señales de la lista. Eso no garantiza su autenticidad: verificá por un canal conocido." }
  ];
  const scamCase = byId("scam-case");
  function showScamCase() {
    byId("scam-message").textContent = scamCases[Number(scamCase.value)].message;
    byId("scam-form").querySelectorAll('input[name="scam-signal"]').forEach(input => { input.checked = false; });
    byId("scam-action").value = "";
    byId("scam-result").textContent = "";
  }
  scamCase.addEventListener("change", showScamCase);
  byId("scam-form").addEventListener("submit", event => {
    event.preventDefault();
    const action = byId("scam-action").value;
    if (!action) {
      byId("scam-result").textContent = "Elegí cómo actuarías. Si no ves señales, dejá las casillas sin marcar.";
      return;
    }
    const item = scamCases[Number(scamCase.value)];
    const selected = [...byId("scam-form").querySelectorAll('input[name="scam-signal"]:checked')].map(input => input.value);
    const signalsCorrect = selected.length === item.signals.length && selected.every(signal => item.signals.includes(signal));
    byId("scam-result").textContent = `${signalsCorrect && action === "verificar" ? "¡Bien identificado!" : "Revisá las señales y la decisión."} ${item.explanation} No compartas secretos; verificá por un canal conocido, sin usar el enlace del mensaje.`;
  });
  showScamCase();
})();
