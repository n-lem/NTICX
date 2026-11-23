(() => {
  const byId = id => document.getElementById(id);
  const modulePanels = [...document.querySelectorAll(".module-panel")];
  const moduleLinks = [...document.querySelectorAll(".module-selector a")];
  let selectedModule = modulePanels[0];

  modulePanels.forEach(panel => {
    const heading = panel.querySelector(".module-heading");
    panel.querySelectorAll(".activity-card").forEach(card => {
      const back = document.createElement("a");
      back.className = "back-to-activities";
      back.href = `#${heading.id}`;
      back.textContent = "← Ver actividades del módulo";
      card.prepend(back);
    });
  });

  function showModuleFromHash() {
    const target = byId(location.hash.slice(1));
    const targetModule = target?.closest(".module-panel");
    if (targetModule) selectedModule = targetModule;
    else if (!location.hash) selectedModule = modulePanels[0];
    modulePanels.forEach(panel => { panel.hidden = panel !== selectedModule; });
    if (targetModule || !location.hash) {
      const selectedCard = target?.closest(".activity-card");
      selectedModule.querySelectorAll(".activity-card").forEach(card => { card.hidden = card !== selectedCard; });
      selectedModule.querySelectorAll(".activity-jump a").forEach(link => {
        if (selectedCard && link.getAttribute("href") === `#${selectedCard.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
    const heading = selectedModule.querySelector(".module-heading");
    moduleLinks.forEach(link => {
      if (link.getAttribute("href") === `#${heading.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    if (targetModule) requestAnimationFrame(() => {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: "start" });
    });
  }

  showModuleFromHash();
  window.addEventListener("hashchange", showModuleFromHash);
  const binaryDirection = byId("binary-direction");
  const binaryInput = byId("binary-input");

  binaryDirection.addEventListener("change", () => {
    binaryInput.value = "";
    binaryInput.placeholder = binaryDirection.value === "decimal" ? "Ejemplo: 22" : "Ejemplo: 10110";
    byId("binary-result").textContent = "";
  });

  byId("binary-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = binaryInput.value.trim();
    const decimalMode = binaryDirection.value === "decimal";
    const valid = decimalMode ? /^\d{1,5}$/.test(input) : /^[01]{1,16}$/.test(input);
    const value = valid ? parseInt(input, decimalMode ? 10 : 2) : NaN;
    if (!valid || value > 65535) {
      byId("binary-result").textContent = decimalMode
        ? "Ingresá un número entero entre 0 y 65535."
        : "Ingresá entre 1 y 16 dígitos, usando solo 0 y 1.";
      return;
    }
    const bits = decimalMode ? value.toString(2) : input;
    const terms = [...bits].map((bit, index) => {
      const power = bits.length - index - 1;
      return `${bit} × 2^${power} (${bit === "1" ? 2 ** power : 0})`;
    });
    byId("binary-result").textContent = `${value} en decimal = ${bits} en binario. Valores de cada posición: ${terms.join(" + ")} = ${value}.`;
  });

  byId("ascii-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = byId("ascii-input").value.trim();
    const bytes = input ? input.split(/\s+/) : [];
    if (!bytes.length || bytes.length > 100 || bytes.some(byte => !/^[01]{8}$/.test(byte))) {
      byId("ascii-result").textContent = "Ingresá entre 1 y 100 bytes de exactamente 8 ceros o unos, separados por espacios.";
      return;
    }
    const codes = bytes.map(byte => parseInt(byte, 2));
    if (codes.some(code => code < 32 || code > 126)) {
      byId("ascii-result").textContent = "Solo se admiten caracteres ASCII imprimibles: valores decimales de 32 a 126.";
      return;
    }
    byId("ascii-result").textContent = `Mensaje: ${String.fromCharCode(...codes)}. Valores ASCII: ${codes.join(", ")}.`;
  });

  const components = {
    entrada: ["Entrada", "Introduce datos e instrucciones en la computadora. Por ejemplo, el teclado y el micrófono."],
    cpu: ["CPU", "Ejecuta instrucciones y procesa datos; incluye la unidad de control y la ALU."],
    uc: ["Unidad de control", "Busca e interpreta instrucciones y coordina las operaciones de los componentes."],
    alu: ["Unidad aritmético-lógica", "Realiza cálculos aritméticos y comparaciones lógicas."],
    salida: ["Salida", "Presenta los resultados del procesamiento, por ejemplo mediante el monitor o los parlantes."],
    ram: ["RAM", "Memoria de trabajo temporal donde se cargan programas y datos en uso. Es volátil: se pierde su contenido al apagar el equipo."],
    rom: ["ROM", "Memoria no volátil que conserva instrucciones necesarias para iniciar el equipo."],
    almacenamiento: ["Almacenamiento secundario", "Guarda archivos y programas de manera persistente, por ejemplo en un SSD o un pendrive."],
    buses: ["Buses", "Conexiones por las que circulan datos, direcciones y señales de control entre componentes."],
    puertos: ["Puertos", "Conectores que permiten vincular periféricos, como USB, HDMI o Ethernet."]
  };
  const componentButtons = document.querySelectorAll("[data-component]");
  componentButtons.forEach(button => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      componentButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      const [name, description] = components[button.dataset.component];
      byId("component-result").textContent = `${name}: ${description}`;
    });
  });

  const units = [
    { name: "bit", bits: 1 },
    { name: "Byte", bits: 8 },
    { name: "KB", bits: 8 * 1024 },
    { name: "MB", bits: 8 * 1024 ** 2 },
    { name: "GB", bits: 8 * 1024 ** 3 },
    { name: "TB", bits: 8 * 1024 ** 4 }
  ];
  const from = byId("units-from");
  const to = byId("units-to");
  [from, to].forEach(select => units.forEach((unit, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = unit.name;
    select.appendChild(option);
  }));
  from.value = "4";
  to.value = "3";
  const format = number => new Intl.NumberFormat("es-AR", { maximumSignificantDigits: 12 }).format(number);
  byId("units-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = byId("units-value");
    const value = input.valueAsNumber;
    if (!Number.isFinite(value) || value < 0 || value > 1e9) {
      byId("units-result").textContent = "Ingresá una cantidad entre 0 y 1.000.000.000.";
      return;
    }
    const source = units[Number(from.value)];
    const target = units[Number(to.value)];
    const result = value * source.bits / target.bits;
    byId("units-result").textContent = `${format(value)} ${source.name} = ${format(result)} ${target.name} (aproximado si se redondea).`;
  });
  byId("capacity-form").addEventListener("submit", event => {
    event.preventDefault();
    const answer = byId("capacity-answer").valueAsNumber;
    if (!Number.isSafeInteger(answer) || answer < 0) {
      byId("capacity-result").textContent = "Ingresá una cantidad entera de canciones, igual o mayor que cero.";
      return;
    }
    byId("capacity-result").textContent = answer === 4096
      ? "¡Correcto! 16 GB × 1024 = 16.384 MB; 16.384 ÷ 4 = 4096 canciones."
      : "Todavía no. Convertí primero 16 GB a MB multiplicando por 1024 y dividí el resultado por 4.";
  });

  const topologyType = byId("topology-type");
  const topologyCable = byId("topology-cable");
  const topologySource = byId("topology-source");
  const topologyDestination = byId("topology-destination");
  const topologyToggle = byId("topology-toggle");
  const topologyDiagram = byId("topology-diagram");
  const topologyStatus = byId("topology-status");
  const topologyResult = byId("topology-result");
  const computers = ["A", "B", "C", "D"];
  const positions = {
    A: [100, 55], B: [500, 55], C: [500, 205], D: [100, 205],
    Switch: [300, 130]
  };
  const topologies = {
    bus: { name: "Bus", edges: [["Troncal", "A", "B"]], description: "Los equipos comparten un cable troncal." },
    ring: { name: "Anillo", edges: [["A–B", "A", "B"], ["B–C", "B", "C"], ["C–D", "C", "D"], ["D–A", "D", "A"]], description: "El mensaje circula en sentido A → B → C → D → A." },
    star: { name: "Estrella", edges: computers.map(node => [`${node}–Switch`, node, "Switch"]), description: "Cada equipo se conecta al switch central." },
    mesh: { name: "Malla", edges: [["A–B", "A", "B"], ["A–C", "A", "C"], ["A–D", "A", "D"], ["B–C", "B", "C"], ["B–D", "B", "D"], ["C–D", "C", "D"]], description: "Cada equipo tiene una conexión directa con los demás." }
  };
  let brokenCables = new Set();
  let currentRoute = null;
  const svgNS = "http://www.w3.org/2000/svg";

  [topologySource, topologyDestination].forEach(select => computers.forEach(node => {
    const option = document.createElement("option");
    option.value = node;
    option.textContent = `Equipo ${node}`;
    select.appendChild(option);
  }));
  topologyDestination.value = "C";

  function findRoute(start, end) {
    const topology = topologies[topologyType.value];
    if (topologyType.value === "bus") return brokenCables.size ? null : [start, "Troncal", end];
    if (topologyType.value === "ring" && brokenCables.size) return null;
    const queue = [[start]];
    const visited = new Set([start]);
    while (queue.length) {
      const path = queue.shift();
      const last = path[path.length - 1];
      if (last === end) return path;
      topology.edges.forEach(([id, a, b]) => {
        if (brokenCables.has(id)) return;
        const next = a === last ? b : topologyType.value !== "ring" && b === last ? a : null;
        if (next && !visited.has(next)) {
          visited.add(next);
          queue.push([...path, next]);
        }
      });
    }
    return null;
  }

  function svgElement(name, attributes, text) {
    const element = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    if (text) element.textContent = text;
    return element;
  }

  function drawTopology() {
    const type = topologyType.value;
    const topology = topologies[type];
    const svg = svgElement("svg", { viewBox: "0 0 600 260", "aria-hidden": "true" });
    const defs = svgElement("defs", {});
    const marker = svgElement("marker", { id: "route-arrow", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
    marker.appendChild(svgElement("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "var(--primary)" }));
    defs.appendChild(marker);
    svg.appendChild(defs);
    const line = (x1, y1, x2, y2, className, arrow = false) => {
      const attrs = { x1, y1, x2, y2, class: className };
      if (arrow) attrs["marker-end"] = "url(#route-arrow)";
      svg.appendChild(svgElement("line", attrs));
    };

    if (type === "bus") {
      const xs = { A: 90, B: 230, C: 370, D: 510 };
      line(60, 170, 540, 170, `cable${brokenCables.has("Troncal") ? " cable-cut" : ""}`);
      computers.forEach(node => line(xs[node], 80, xs[node], 170, "cable"));
      if (currentRoute) {
        const source = xs[currentRoute[0]];
        const destination = xs[currentRoute[2]];
        line(source, 104, source, 170, "route", true);
        line(source, 170, destination, 170, "route", true);
        line(destination, 170, destination, 104, "route", true);
      }
      computers.forEach(node => {
        svg.appendChild(svgElement("circle", { cx: xs[node], cy: 80, r: 23, class: "node" }));
        svg.appendChild(svgElement("text", { x: xs[node], y: 86 }, node));
      });
      svg.appendChild(svgElement("text", { x: 300, y: 212 }, "Cable troncal"));
    } else {
      topology.edges.forEach(([id, a, b]) => {
        const [x1, y1] = positions[a];
        const [x2, y2] = positions[b];
        line(x1, y1, x2, y2, `cable${brokenCables.has(id) ? " cable-cut" : ""}`);
      });
      if (currentRoute) {
        currentRoute.slice(1).forEach((node, index) => {
          const [x1, y1] = positions[currentRoute[index]];
          const [x2, y2] = positions[node];
          const length = Math.hypot(x2 - x1, y2 - y1);
          const dx = (x2 - x1) / length;
          const dy = (y2 - y1) / length;
          line(x1 + dx * 25, y1 + dy * 25, x2 - dx * 27, y2 - dy * 27, "route", true);
        });
      }
      const nodes = type === "star" ? [...computers, "Switch"] : computers;
      nodes.forEach(node => {
        const [x, y] = positions[node];
        svg.appendChild(svgElement("circle", { cx: x, cy: y, r: node === "Switch" ? 33 : 23, class: "node" }));
        svg.appendChild(svgElement("text", { x, y: y + 6 }, node));
      });
    }
    topologyDiagram.replaceChildren(svg);
    const cuts = brokenCables.size ? `Cables cortados: ${[...brokenCables].join(", ")}.` : "Todos los cables están conectados.";
    topologyDiagram.setAttribute("aria-label", `${topology.name}. ${topology.description} ${cuts} ${topologyResult.textContent}`);
  }

  function updateTopology() {
    const topology = topologies[topologyType.value];
    const selected = topologyCable.value;
    topologyCable.replaceChildren();
    topology.edges.forEach(([id]) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = `${id} (${brokenCables.has(id) ? "cortado" : "conectado"})`;
      topologyCable.appendChild(option);
    });
    if (topology.edges.some(([id]) => id === selected)) topologyCable.value = selected;
    topologyToggle.textContent = brokenCables.has(topologyCable.value) ? "Reparar cable" : "Cortar cable";
    let connectedPairs = 0;
    computers.forEach(source => computers.forEach(destination => {
      if (source !== destination && findRoute(source, destination)) connectedPairs++;
    }));
    topologyStatus.textContent = `${topology.description} ${brokenCables.size ? `Cables cortados: ${[...brokenCables].join(", ")}.` : "Todos los cables están conectados."} Son posibles ${connectedPairs} de 12 comunicaciones entre equipos, contando cada dirección por separado.`;
    drawTopology();
  }

  topologyType.addEventListener("change", () => {
    brokenCables = new Set();
    currentRoute = null;
    topologyResult.textContent = "";
    updateTopology();
  });
  topologyCable.addEventListener("change", () => {
    topologyToggle.textContent = brokenCables.has(topologyCable.value) ? "Reparar cable" : "Cortar cable";
  });
  topologyToggle.addEventListener("click", () => {
    const cable = topologyCable.value;
    if (brokenCables.has(cable)) brokenCables.delete(cable);
    else brokenCables.add(cable);
    currentRoute = null;
    topologyResult.textContent = "";
    updateTopology();
  });
  byId("topology-restore").addEventListener("click", () => {
    brokenCables.clear();
    currentRoute = null;
    topologyResult.textContent = "";
    updateTopology();
  });
  [topologySource, topologyDestination].forEach(select => select.addEventListener("change", () => {
    currentRoute = null;
    topologyResult.textContent = "";
    drawTopology();
  }));
  byId("topology-send").addEventListener("submit", event => {
    event.preventDefault();
    const source = topologySource.value;
    const destination = topologyDestination.value;
    if (source === destination) {
      currentRoute = null;
      topologyResult.textContent = "Elegí equipos de origen y destino diferentes.";
    } else {
      currentRoute = findRoute(source, destination);
      topologyResult.textContent = currentRoute
        ? `Mensaje entregado. Recorrido: ${currentRoute.join(" → ")}.`
        : "El mensaje no puede llegar: no hay una ruta disponible en este modelo. Repará los cables y probá de nuevo.";
    }
    drawTopology();
  });
  updateTopology();

  const webEras = [
    {
      title: "Web 1.0: lectura",
      description: "Predominan las páginas estáticas creadas por unas pocas personas; el público principalmente lee.",
      example: "un sitio institucional de los años 90 con páginas informativas y enlaces."
    },
    {
      title: "Web 2.0: participación",
      description: "La Web social facilita publicar, comentar y colaborar. Los usuarios pueden ser productores y consumidores de contenido: prosumidores.",
      example: "un blog con comentarios, un foro o una enciclopedia editada colaborativamente."
    },
    {
      title: "Web 3.0: Web semántica",
      description: "En el enfoque del manual, los datos se describen y vinculan mediante metadatos para que distintos sistemas puedan relacionarlos y reutilizarlos.",
      example: "un catálogo que vincula autores, libros y temas mediante datos estructurados."
    },
    {
      title: "Web 4.0: ubicuidad e inteligencia artificial",
      description: "Se agrupan aquí tendencias como servicios disponibles en distintos dispositivos, personalización, inteligencia artificial y objetos conectados.",
      example: "un asistente virtual que responde preguntas o un dispositivo conectado que ajusta la iluminación."
    }
  ];
  const timeline = document.querySelector(".web-timeline");
  const eraButtons = [...timeline.querySelectorAll(".web-era")];
  const previousEra = byId("web-previous");
  const nextEra = byId("web-next");
  let selectedEra = 0;

  function showEra(index) {
    selectedEra = index;
    const era = webEras[index];
    eraButtons.forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === index)));
    byId("web-era-title").textContent = era.title;
    byId("web-era-description").textContent = era.description;
    byId("web-era-example").textContent = era.example;
    previousEra.disabled = index === 0;
    nextEra.disabled = index === webEras.length - 1;
    const trackBounds = timeline.getBoundingClientRect();
    const buttonBounds = eraButtons[index].getBoundingClientRect();
    if (buttonBounds.left < trackBounds.left) timeline.scrollBy({ left: buttonBounds.left - trackBounds.left });
    else if (buttonBounds.right > trackBounds.right) timeline.scrollBy({ left: buttonBounds.right - trackBounds.right });
  }
  eraButtons.forEach((button, index) => button.addEventListener("click", () => showEra(index)));
  previousEra.addEventListener("click", () => showEra(selectedEra - 1));
  nextEra.addEventListener("click", () => showEra(selectedEra + 1));

  const brands = [
    { type: "logotipo", explanation: "Es un logotipo: está compuesto únicamente por texto." },
    { type: "isotipo", explanation: "Es un isotipo: el símbolo aparece sin texto." },
    { type: "imagotipo", explanation: "Es un imagotipo: el símbolo y el texto están juntos, pero pueden separarse." },
    { type: "isologo", explanation: "Es un isologo: las letras están recortadas dentro del emblema y forman una sola pieza." }
  ];
  const brandForm = byId("brand-form");
  const brandPrevious = byId("brand-previous");
  const brandNext = byId("brand-next");
  const brandResult = byId("brand-result");
  let brandIndex = 0;
  function showBrand(index) {
    brandIndex = index;
    document.querySelectorAll("[data-brand]").forEach((figure, position) => { figure.hidden = position !== index; });
    byId("brand-position").textContent = `Marca ${index + 1} de ${brands.length}`;
    brandPrevious.disabled = index === 0;
    brandNext.disabled = index === brands.length - 1;
    brandForm.reset();
    brandResult.textContent = "";
  }
  brandPrevious.addEventListener("click", () => showBrand(brandIndex - 1));
  brandNext.addEventListener("click", () => showBrand(brandIndex + 1));
  brandForm.addEventListener("submit", event => {
    event.preventDefault();
    const answer = brandForm.querySelector('input[name="brand-answer"]:checked');
    if (!answer) {
      brandResult.textContent = "Elegí una categoría antes de comprobar.";
      return;
    }
    const brand = brands[brandIndex];
    brandResult.textContent = `${answer.value === brand.type ? "¡Correcto!" : "Todavía no."} ${brand.explanation}`;
  });

  const colorDescriptions = {
    rojo: "Rojo: suele asociarse con energía, urgencia o peligro; puede usarse en alertas y publicidad de alimentos.",
    amarillo: "Amarillo: puede sugerir alegría u optimismo, y atraer la atención en carteles.",
    verde: "Verde: puede asociarse con naturaleza, salud o ecología, por ejemplo en campañas ambientales.",
    azul: "Azul: suele vincularse con calma, confianza o seguridad, por ejemplo en servicios de salud.",
    negro: "Negro: puede sugerir sobriedad o elegancia, por ejemplo en una identidad visual de lujo."
  };
  const colorButtons = document.querySelectorAll("[data-color]");
  colorButtons.forEach(button => button.addEventListener("click", () => {
    colorButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    byId("color-result").textContent = colorDescriptions[button.dataset.color];
  }));

  const factCases = [
    {
      headline: "Caso ficticio 1: la biblioteca abre en el recreo",
      message: "Mensaje firmado por la biblioteca de la Escuela Sol: «El viernes 8 de mayo de 2026 abrimos de 10:00 a 10:20 para préstamos». No incluye imágenes.",
      evidence: "Evidencia del caso: el aviso interno de la biblioteca de esa misma fecha informa que abre el viernes 8 de mayo, de 10:00 a 10:20, para préstamos.",
      verdict: "verdadera",
      reason: "coincide",
      explanation: "La afirmación coincide con la fecha, el horario y la actividad del aviso interno ficticio."
    },
    {
      headline: "Caso ficticio 2: clases suspendidas",
      message: "Mensaje anónimo: «URGENTE: el lunes 4 de mayo de 2026 se suspenden todas las clases de la Escuela Sol. ¡Reenviá!». No incluye imágenes.",
      evidence: "Evidencia del caso: el comunicado interno de la Escuela Sol para el lunes 4 de mayo de 2026 informa que las clases se dictarán con normalidad.",
      verdict: "falsa",
      reason: "contradice",
      explanation: "La afirmación contradice el comunicado ficticio: las clases de ese día se dictan normalmente."
    },
    {
      headline: "Caso ficticio 3: taller de radio para toda la escuela",
      message: "Titular de un boletín ficticio: «El 12 de mayo de 2026 hay un taller de radio para toda la escuela». El texto no detalla los destinatarios. No incluye imágenes.",
      evidence: "Evidencia del caso: la invitación interna para el 12 de mayo confirma el taller de radio, pero indica que está destinado únicamente a 4.º A.",
      verdict: "enganosa",
      reason: "alcance",
      explanation: "El taller existe, pero el titular amplía su alcance: la invitación ficticia lo destina solo a 4.º A."
    },
    {
      headline: "Caso ficticio 4: anuncio de un recreo extra",
      message: "Un mensaje sin firma afirma: «La Escuela Sol anunció un recreo extra para el viernes 15 de mayo de 2026». No incluye imágenes ni indica una fuente.",
      evidence: "Evidencia del caso: no se dispone de un anuncio de la escuela ni de otra fuente que confirme o desmienta el mensaje.",
      verdict: "insuficiente",
      reason: "falta",
      explanation: "La ausencia de confirmación no demuestra que sea verdadero ni falso: hace falta consultar una fuente confiable."
    }
  ];
  const factForm = byId("fact-form");
  const factCase = byId("fact-case");
  const factResult = byId("fact-result");
  function showFactCase() {
    const item = factCases[Number(factCase.value)];
    byId("fact-headline").textContent = item.headline;
    byId("fact-message").textContent = item.message;
    byId("fact-evidence").textContent = item.evidence;
    byId("fact-evidence").hidden = true;
    byId("fact-reveal").setAttribute("aria-expanded", "false");
    factForm.querySelectorAll('input[name="fact-step"]').forEach(input => { input.checked = false; });
    byId("fact-verdict").value = "";
    byId("fact-reason").value = "";
    factResult.textContent = "";
  }
  factCase.addEventListener("change", showFactCase);
  byId("fact-reveal").addEventListener("click", () => {
    byId("fact-evidence").hidden = false;
    byId("fact-reveal").setAttribute("aria-expanded", "true");
  });
  factForm.addEventListener("submit", event => {
    event.preventDefault();
    if (byId("fact-evidence").hidden) {
      factResult.textContent = "Consultá la evidencia antes de decidir.";
      return;
    }
    const steps = [...factForm.querySelectorAll('input[name="fact-step"]')];
    if (steps.some(input => !input.checked)) {
      factResult.textContent = "Revisá y marcá los cinco pasos antes de comprobar el veredicto.";
      return;
    }
    const verdict = byId("fact-verdict").value;
    if (!verdict) {
      factResult.textContent = "Elegí un veredicto antes de comprobar.";
      return;
    }
    const reason = byId("fact-reason").value;
    if (!reason) {
      factResult.textContent = "Elegí una justificación antes de comprobar.";
      return;
    }
    const item = factCases[Number(factCase.value)];
    const labels = { verdadera: "verdadera", falsa: "falsa", enganosa: "engañosa", insuficiente: "información insuficiente" };
    factResult.textContent = `${verdict === item.verdict && reason === item.reason ? "¡Correcto!" : `Revisá tu respuesta. Veredicto para este caso ficticio: ${labels[item.verdict]}.`} ${item.explanation} En situaciones reales, si falta evidencia suficiente, no se puede afirmar un veredicto definitivo.`;
  });
  showFactCase();

  const practicePassword = byId("password-practice");
  const passwordResult = byId("password-result");
  function updatePasswordPractice() {
    const value = practicePassword.value;
    if (!value) {
      passwordResult.textContent = "Escribí un ejemplo ficticio para revisar sus características.";
      return;
    }
    const checks = [
      [Array.from(value).length >= 16, "al menos 16 caracteres"],
      [/\p{Ll}/u.test(value), "letras minúsculas"],
      [/\p{Lu}/u.test(value), "letras mayúsculas"],
      [/[0-9]/.test(value), "números"],
      [/[^\p{L}\p{N}\s]/u.test(value), "símbolos"]
    ];
    passwordResult.textContent = `Características del ejemplo: ${checks.map(([met, description]) => `${met ? "✓" : "✗"} ${description}`).join(" · ")}. Esto no determina si es segura.`;
  }
  practicePassword.addEventListener("input", updatePasswordPractice);
  byId("password-clear").addEventListener("click", () => {
    practicePassword.value = "";
    updatePasswordPractice();
    practicePassword.focus();
  });
  window.addEventListener("pagehide", () => {
    practicePassword.value = "";
    updatePasswordPractice();
  });

  const questions = [
    {
      question: "¿Qué es una técnica?",
      options: ["Un procedimiento o conjunto de habilidades para lograr un resultado", "Un dispositivo que siempre necesita electricidad", "Una red de computadoras"],
      correct: 0,
      explanation: "Una técnica es una forma de hacer algo mediante pasos o habilidades."
    },
    {
      question: "¿Qué transforma un conjunto de datos en información?",
      options: ["Borrarlo", "Organizarlo y darle contexto", "Guardarlo en una memoria USB"],
      correct: 1,
      explanation: "La información surge cuando los datos se organizan y contextualizan para transmitir significado."
    },
    {
      question: "En NTICx, ¿qué destaca la letra x?",
      options: ["La impresión en papel", "El tamaño del procesador", "La conectividad entre dispositivos y personas"],
      correct: 2,
      explanation: "La x destaca la conectividad y la interacción en red."
    },
    {
      question: "¿Qué función cumple la unidad de control de la CPU?",
      options: ["Interpretar instrucciones y coordinar operaciones", "Mostrar imágenes en la pantalla", "Guardar archivos permanentemente"],
      correct: 0,
      explanation: "La unidad de control busca e interpreta instrucciones y coordina los componentes."
    },
    {
      question: "¿Qué ocurre con la información que está solo en la RAM al apagar el equipo?",
      options: ["Permanece intacta", "Se pierde porque la RAM es volátil", "Se convierte en una copia impresa"],
      correct: 1,
      explanation: "La RAM es memoria temporal y necesita alimentación para conservar su contenido."
    },
    {
      question: "¿Cuál de estos dispositivos es principalmente de entrada?",
      options: ["Monitor", "Parlante", "Teclado"],
      correct: 2,
      explanation: "El teclado introduce datos; el monitor y el parlante presentan información."
    },
    {
      question: "Según la convención de la ficha 5, ¿cuántos bits hay en 2 bytes?",
      options: ["16", "8", "1024"],
      correct: 0,
      explanation: "Un byte equivale a 8 bits, por lo tanto 2 bytes equivalen a 16 bits."
    },
    {
      question: "¿Cuánto vale 10110 en decimal?",
      options: ["18", "22", "26"],
      correct: 1,
      explanation: "10110 representa 16 + 4 + 2, que suma 22."
    },
    {
      question: "¿Cuál es una función del sistema operativo?",
      options: ["Administrar recursos y permitir la interacción con el equipo", "Ser únicamente una pieza física", "Impedir la ejecución de programas"],
      correct: 0,
      explanation: "El sistema operativo administra los recursos del equipo y permite utilizar aplicaciones."
    },
    {
      question: "¿Qué libertad caracteriza al software libre?",
      options: ["Ocultar siempre su código fuente", "Permitir estudiar, modificar y compartir el programa", "Prohibir su uso en escuelas"],
      correct: 1,
      explanation: "El software libre garantiza libertades de uso, estudio, modificación y distribución."
    }
  ];

  const networkQuestions = [
    {
      question: "¿Para qué se conectan dispositivos en una red informática?",
      options: ["Para compartir datos, recursos y servicios", "Para que todos tengan la misma pantalla", "Para evitar toda comunicación"],
      correct: 0,
      explanation: "Una red permite compartir información y recursos, como archivos, impresoras o servicios."
    },
    {
      question: "¿Qué medio transmite información mediante pulsos de luz?",
      options: ["Wi-Fi", "Fibra óptica", "Bluetooth"],
      correct: 1,
      explanation: "La fibra óptica es un medio guiado que transporta señales luminosas."
    },
    {
      question: "¿Qué tipo de red corresponde normalmente al laboratorio de una escuela?",
      options: ["WAN", "MAN", "LAN"],
      correct: 2,
      explanation: "Una LAN es una red de área local, por ejemplo la de un aula o edificio."
    },
    {
      question: "En una topología estrella, ¿qué pasa si se corta el cable de una computadora?",
      options: ["Esa computadora queda aislada; las demás pueden comunicarse", "Todas las computadoras quedan aisladas", "Se corta automáticamente Internet en toda la ciudad"],
      correct: 0,
      explanation: "Cada equipo tiene su propio enlace al dispositivo central; un corte en uno no corta los demás enlaces."
    },
    {
      question: "¿Qué ventaja puede ofrecer una topología en malla ante un corte?",
      options: ["Nunca necesita cables", "Puede disponer de otro camino entre nodos", "Todos los equipos deben reiniciarse"],
      correct: 1,
      explanation: "Las conexiones redundantes pueden permitir una ruta alternativa, si la red sigue conectada."
    },
    {
      question: "¿Qué función cumple un servidor en el modelo cliente-servidor?",
      options: ["Pide siempre recursos sin ofrecerlos", "Es exclusivamente un cable", "Ofrece datos o servicios a clientes"],
      correct: 2,
      explanation: "Los clientes realizan solicitudes y el servidor ofrece los recursos o servicios."
    },
    {
      question: "¿Qué caracteriza a una red P2P o entre pares?",
      options: ["Los equipos pueden compartir recursos directamente entre sí", "Solo puede existir un equipo", "Cada comunicación requiere obligatoriamente un servidor central"],
      correct: 0,
      explanation: "En P2P los pares pueden solicitar y ofrecer recursos, sin depender necesariamente de un servidor central."
    },
    {
      question: "¿Para qué se utiliza una dirección IP?",
      options: ["Para medir el tamaño de una pantalla", "Para identificar y localizar interfaces en una red", "Para nombrar un archivo de texto"],
      correct: 1,
      explanation: "Las direcciones IP permiten identificar interfaces y encaminar paquetes entre redes."
    },
    {
      question: "¿Qué hace un router cuando recibe un paquete IP?",
      options: ["Lo convierte en una hoja impresa", "Borra su dirección de destino", "Decide por qué camino reenviarlo"],
      correct: 2,
      explanation: "Un router examina la información de destino y reenvía paquetes hacia otra red."
    },
    {
      question: "¿Qué aporta TCP a una comunicación?",
      options: ["Ayuda a entregar los datos ordenados y recuperar los que faltan", "Asigna colores a los cables", "Reemplaza físicamente al router"],
      correct: 0,
      explanation: "TCP controla la entrega ordenada y solicita la retransmisión de datos perdidos."
    }
  ];

  const informationQuestions = [
    {
      question: "¿Cuál es la relación entre Internet y la Web?",
      options: ["Son exactamente lo mismo", "La Web es un servicio que funciona sobre Internet", "Internet es una página web"],
      correct: 1,
      explanation: "Internet conecta redes de dispositivos; la Web es uno de los servicios que funcionan sobre esa infraestructura."
    },
    {
      question: "¿Para qué se usa HTML en una página web?",
      options: ["Para estructurar su contenido mediante etiquetas", "Para reemplazar los cables de la red", "Para asignar direcciones IP a todos los dispositivos"],
      correct: 0,
      explanation: "HTML utiliza etiquetas para describir la estructura del contenido, como títulos, párrafos y enlaces."
    },
    {
      question: "¿Qué suele indicar una búsqueda entre comillas, como «\"Memoria, Verdad y Justicia\"»?",
      options: ["Excluir todas esas palabras", "Buscar una frase exacta", "Buscar solo imágenes"],
      correct: 1,
      explanation: "Las comillas indican al buscador que busque esas palabras juntas como frase."
    },
    {
      question: "¿Para qué sirve el operador site: en una búsqueda?",
      options: ["Para limitar los resultados a un sitio o dominio", "Para traducir automáticamente los resultados", "Para garantizar que la información sea verdadera"],
      correct: 0,
      explanation: "site: restringe la búsqueda a un sitio o dominio; aun así es necesario evaluar la fuente."
    },
    {
      question: "¿Qué conviene hacer antes de confiar en una página encontrada?",
      options: ["Confiar siempre en el primer resultado", "Revisar quién publica, la fecha y contrastar con otras fuentes", "Compartirla sin leerla"],
      correct: 1,
      explanation: "La autoría, la fecha, la evidencia y el contraste con otras fuentes ayudan a evaluar la información."
    },
    {
      question: "¿Qué caracteriza principalmente a la Web 1.0?",
      options: ["Páginas mayormente estáticas orientadas a la lectura", "Todos los sitios usan asistentes de inteligencia artificial", "Las personas editan colaborativamente cada página"],
      correct: 0,
      explanation: "En la Web 1.0 predominaban páginas estáticas que la mayoría de los usuarios consultaba."
    },
    {
      question: "¿Qué es un prosumidor en el contexto de la Web 2.0?",
      options: ["Un cable de fibra óptica", "Una persona que consume y también produce contenidos", "Un programa que impide comentar"],
      correct: 1,
      explanation: "La Web participativa permite que una persona tanto consuma como cree y comparta contenido."
    },
    {
      question: "Según el manual, ¿qué busca la Web semántica o Web 3.0?",
      options: ["Eliminar todos los enlaces", "Describir y relacionar datos para que los sistemas puedan reutilizarlos", "Impedir que las máquinas procesen datos"],
      correct: 1,
      explanation: "Los metadatos y datos estructurados facilitan relacionar información entre sistemas."
    },
    {
      question: "¿Cuál es un ejemplo de las tendencias asociadas a la Web 4.0?",
      options: ["Una página que solo muestra texto estático", "Un archivo en papel sin conexión", "Un asistente virtual que usa inteligencia artificial"],
      correct: 2,
      explanation: "El manual asocia la Web 4.0 con inteligencia artificial, personalización y dispositivos interconectados."
    },
    {
      question: "¿Para qué puede servir el historial de ediciones de un documento colaborativo?",
      options: ["Para revisar cambios y aportes de quienes participaron", "Para asegurar que todo lo escrito sea verdadero", "Para desconectar la computadora de la red"],
      correct: 0,
      explanation: "El historial permite revisar cambios, aunque la información todavía debe verificarse."
    }
  ];

  const imageQuestions = [
    {
      question: "¿Qué es una descripción denotativa de una imagen?",
      options: ["Una interpretación emocional", "Una descripción de los elementos que se ven", "Una opinión sobre el autor"],
      correct: 1,
      explanation: "La denotación describe literalmente los elementos visibles."
    },
    {
      question: "¿Qué es la connotación de una imagen?",
      options: ["Los sentidos o emociones que puede sugerir", "La cantidad exacta de píxeles", "El nombre del archivo"],
      correct: 0,
      explanation: "La connotación depende de interpretaciones y asociaciones culturales."
    },
    {
      question: "¿Cuál de estos signos funciona como indicio?",
      options: ["Una palabra escrita", "El humo que señala la presencia de fuego", "Una bandera acordada por una comunidad"],
      correct: 1,
      explanation: "El humo tiene una relación física con el fuego y puede indicar su presencia."
    },
    {
      question: "¿Cómo se llama una marca compuesta únicamente por texto?",
      options: ["Isotipo", "Isologo", "Logotipo"],
      correct: 2,
      explanation: "Un logotipo se construye con palabras o tipografía."
    },
    {
      question: "¿Qué caracteriza a un isotipo?",
      options: ["Tiene texto y símbolo separables", "Contiene únicamente texto", "Es solo un símbolo gráfico, sin texto"],
      correct: 2,
      explanation: "El isotipo es un símbolo gráfico que no necesita letras para presentarse."
    },
    {
      question: "¿Qué caracteriza a un imagotipo?",
      options: ["No contiene texto ni símbolo", "Tiene texto y símbolo que pueden funcionar por separado", "El texto y el símbolo son inseparables"],
      correct: 1,
      explanation: "En un imagotipo, texto y símbolo se combinan pero pueden separarse."
    },
    {
      question: "¿Qué distingue a un isologo?",
      options: ["Texto y símbolo forman una pieza integrada", "Es exclusivamente una palabra", "Siempre usa color azul"],
      correct: 0,
      explanation: "En el isologo, texto y símbolo están integrados en una sola pieza."
    },
    {
      question: "¿Qué es una hipérbole visual en publicidad?",
      options: ["Una exageración para destacar una idea", "Una descripción neutral sin intención", "Un tipo de cable de red"],
      correct: 0,
      explanation: "La hipérbole exagera una cualidad o efecto para llamar la atención."
    },
    {
      question: "¿Cómo deben interpretarse las asociaciones de los colores?",
      options: ["Son idénticas para todas las personas y culturas", "Dependen del contexto y pueden variar entre personas y culturas", "Nunca influyen en un mensaje visual"],
      correct: 1,
      explanation: "Los colores pueden evocar distintas ideas según la experiencia, la cultura y el contexto."
    }
  ];

  const mediaQuestions = [
    {
      question: "En un proceso de comunicación, ¿qué es el canal?",
      options: ["La opinión del receptor", "Una contraseña", "El medio por el que se transmite el mensaje"],
      correct: 2,
      explanation: "El canal es el medio por el que circula la señal, como el aire o un cable."
    },
    {
      question: "¿Cuál es un ejemplo de ruido técnico?",
      options: ["Interpretar mal una broma por falta de contexto", "Un audio interrumpido por falta de señal", "Una diferencia de opiniones"],
      correct: 1,
      explanation: "Una conexión defectuosa puede interferir técnicamente con la transmisión."
    },
    {
      question: "¿Qué puede hacer un algoritmo de recomendación?",
      options: ["Seleccionar contenido según señales de uso", "Garantizar que todo lo recomendado sea verdadero", "Eliminar automáticamente todos los prejuicios"],
      correct: 0,
      explanation: "Las plataformas pueden usar interacciones para seleccionar contenido; eso no garantiza veracidad."
    },
    {
      question: "¿Qué describe una burbuja de filtro?",
      options: ["Una protección física del celular", "Un método para cifrar archivos", "Ver principalmente contenidos afines y menos perspectivas distintas"],
      correct: 2,
      explanation: "La selección personalizada puede limitar el contacto con perspectivas diferentes."
    },
    {
      question: "¿Qué implica el consentimiento al compartir una imagen de otra persona?",
      options: ["Publicarla si otra persona insiste", "Pedir y respetar su autorización", "Suponer que siempre acepta"],
      correct: 1,
      explanation: "Pedir y respetar el consentimiento ayuda a cuidar la privacidad y los vínculos."
    },
    {
      question: "Si una persona adulta en línea presiona a un adolescente para obtener imágenes íntimas, ¿qué acción ayuda a cuidarse?",
      options: ["Guardar las pruebas y pedir ayuda a una persona adulta de confianza", "Enviar imágenes para que deje de insistir", "Eliminar inmediatamente toda evidencia"],
      correct: 0,
      explanation: "Es importante dejar de responder, conservar la evidencia y pedir ayuda a un adulto de confianza."
    },
    {
      question: "¿Qué conviene hacer con una noticia antes de compartirla?",
      options: ["Reenviarla solo por su titular impactante", "Suponer que un mensaje viral siempre es verdadero", "Revisar la fuente, la fecha y contrastar la información"],
      correct: 2,
      explanation: "Verificar fuente y contexto, y contrastar datos, ayuda a evitar la desinformación."
    },
    {
      question: "¿Para qué puede servir revisar el origen de una imagen?",
      options: ["Para asegurar que cualquier titular sea verdadero", "Para detectar si se usa fuera de su fecha o contexto", "Para identificar siempre a todas las personas retratadas"],
      correct: 1,
      explanation: "Una imagen auténtica también puede utilizarse fuera de contexto para apoyar una afirmación engañosa."
    }
  ];

  const multimediaQuestions = [
    {
      question: "¿Qué caracteriza a una producción multimedia?",
      options: ["El uso exclusivo de texto impreso", "La combinación de distintos lenguajes, como texto, imagen y sonido", "La ausencia de imágenes y sonido"],
      correct: 1,
      explanation: "Una producción multimedia integra diferentes formas de expresión, por ejemplo texto, imagen y audio."
    },
    {
      question: "¿Qué hace la compresión con pérdida?",
      options: ["Conserva siempre todos los datos originales", "Transforma cualquier archivo en papel", "Descarta información para reducir el tamaño"],
      correct: 2,
      explanation: "La compresión con pérdida reduce el tamaño descartando parte de la información original."
    },
    {
      question: "¿Qué formato suele utilizar compresión sin pérdida y admite transparencia?",
      options: ["PNG", "MP3", "Una cinta de audio"],
      correct: 0,
      explanation: "PNG admite transparencia y utiliza compresión sin pérdida."
    },
    {
      question: "¿Qué significa muestrear una señal de sonido?",
      options: ["Pintar la forma de onda", "Medir su amplitud a intervalos de tiempo", "Agregar música a una grabación"],
      correct: 1,
      explanation: "El muestreo toma valores de la señal en distintos momentos para representarla digitalmente."
    },
    {
      question: "¿Qué indica una frecuencia de muestreo de 44.100 Hz?",
      options: ["44.100 minutos de audio", "44.100 parlantes conectados", "44.100 muestras por segundo"],
      correct: 2,
      explanation: "La frecuencia de muestreo indica cuántas muestras se toman por segundo."
    },
    {
      question: "¿Cuál de estos elementos también comunica en una producción sonora?",
      options: ["Solo el tamaño del archivo", "El silencio", "La marca del micrófono"],
      correct: 1,
      explanation: "El silencio puede crear pausas y aportar ritmo o sentido a una producción sonora."
    },
    {
      question: "¿Qué plano suele destacar los gestos y las emociones del rostro?",
      options: ["Primer plano", "Gran plano general", "Plano general del paisaje"],
      correct: 0,
      explanation: "El primer plano acerca el rostro y permite destacar gestos y emociones."
    },
    {
      question: "¿Para qué sirve un storyboard?",
      options: ["Para comprimir automáticamente audio", "Para guardar una contraseña", "Para planificar escenas mediante viñetas antes del rodaje"],
      correct: 2,
      explanation: "El storyboard anticipa visualmente escenas, planos y otros elementos de una producción."
    }
  ];

  const citizenshipQuestions = [
    {
      question: "¿Cuál es un ejemplo de huella digital activa?",
      options: ["Datos de ubicación recogidos por una aplicación", "Un comentario publicado voluntariamente", "El registro automático de visitas"],
      correct: 1,
      explanation: "La huella activa incluye información que compartimos de forma consciente."
    },
    {
      question: "¿Qué permite ejercer la ley argentina 25.326 sobre datos personales?",
      options: ["Acceder sin permiso a cuentas ajenas", "Publicar cualquier dato privado sin autorización", "Conocer y solicitar la rectificación de datos personales"],
      correct: 2,
      explanation: "La ley reconoce derechos de acceso y rectificación, entre otros, sobre los datos personales."
    },
    {
      question: "¿Qué es phishing?",
      options: ["Un intento de engaño para obtener datos o acceso", "Una copia de seguridad local", "Una licencia para compartir una obra"],
      correct: 0,
      explanation: "El phishing utiliza suplantación o engaños para obtener datos, dinero o acceso."
    },
    {
      question: "¿Qué práctica ayuda a proteger las cuentas?",
      options: ["Reutilizar la misma contraseña en todos lados", "Usar contraseñas únicas y activar la verificación en dos pasos", "Compartir la contraseña con desconocidos"],
      correct: 1,
      explanation: "Las contraseñas únicas y un segundo factor reducen riesgos si se filtra una clave."
    },
    {
      question: "En una licencia Creative Commons, ¿qué significa BY?",
      options: ["Prohibir toda atribución", "Usar la obra solo de forma privada", "Dar atribución a la autoría"],
      correct: 2,
      explanation: "BY requiere reconocer la autoría según las condiciones de la licencia."
    },
    {
      question: "¿Qué indica la cláusula NC de una licencia Creative Commons?",
      options: ["Que el uso permitido no es comercial", "Que se exige usar la obra comercialmente", "Que no hace falta respetar ninguna condición"],
      correct: 0,
      explanation: "NC restringe los usos permitidos a fines no comerciales."
    },
    {
      question: "¿Por qué conviene verificar las respuestas de una inteligencia artificial?",
      options: ["Porque nunca puede cometer errores", "Porque puede generar información incorrecta o inventada", "Porque todas sus respuestas son fuentes oficiales"],
      correct: 1,
      explanation: "Los sistemas de IA pueden producir respuestas plausibles pero incorrectas; conviene contrastarlas."
    },
    {
      question: "¿Qué es un sesgo algorítmico?",
      options: ["Una garantía de neutralidad absoluta", "Un cable que conecta equipos", "Un resultado que puede reproducir o amplificar desigualdades"],
      correct: 2,
      explanation: "Un sistema puede reflejar sesgos presentes en sus datos, diseño o contexto de uso."
    }
  ];

  function setupQuiz(questions, storageKey, suffix, radioPrefix) {
    const storageStatus = byId(`storage-status${suffix}`);
    let answers = Array(questions.length).fill(null);
    let storageAvailable = true;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed) || parsed.length !== questions.length ||
            parsed.some((answer, index) => answer !== null && (!Number.isInteger(answer) || answer < 0 || answer >= questions[index].options.length))) {
          throw new Error("El progreso guardado tiene un formato inválido.");
        }
        answers = parsed;
      }
      storageStatus.textContent = "El progreso del cuestionario se guarda en este navegador.";
    } catch (error) {
      storageAvailable = false;
      storageStatus.textContent = `No se pudo cargar el progreso: ${error.message} Podés practicar, pero el progreso no se guardará.`;
    }

    const quizContainer = byId(`quiz-questions${suffix}`);
    const feedbackElements = [];
    questions.forEach((question, index) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-question";
      const legend = document.createElement("legend");
      legend.textContent = `${index + 1}. ${question.question}`;
      fieldset.appendChild(legend);
      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `${radioPrefix}-${index}`;
        input.value = String(optionIndex);
        input.checked = answers[index] === optionIndex;
        input.addEventListener("change", () => {
          answers[index] = optionIndex;
          if (storageAvailable) {
            try {
              localStorage.setItem(storageKey, JSON.stringify(answers));
            } catch (error) {
              storageAvailable = false;
              storageStatus.textContent = `No se pudo guardar el progreso: ${error.message} Podés seguir practicando sin guardarlo.`;
            }
          }
          updateQuiz();
        });
        label.append(input, document.createTextNode(option));
        fieldset.appendChild(label);
      });
      const feedback = document.createElement("p");
      feedback.className = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite");
      feedback.hidden = true;
      fieldset.appendChild(feedback);
      feedbackElements.push(feedback);
      quizContainer.appendChild(fieldset);
    });

    function updateQuiz() {
      let answered = 0;
      let correct = 0;
      questions.forEach((question, index) => {
        const answer = answers[index];
        const feedback = feedbackElements[index];
        feedback.hidden = answer === null;
        if (answer !== null) {
          answered++;
          const isCorrect = answer === question.correct;
          if (isCorrect) correct++;
          feedback.textContent = `${isCorrect ? "¡Correcto!" : `Todavía no. Respuesta correcta: ${question.options[question.correct]}.`} ${question.explanation}`;
        }
      });
      byId(`quiz-score${suffix}`).textContent = `Respondidas: ${answered} de ${questions.length}. Correctas: ${correct} de ${questions.length}.`;
    }

    byId(`quiz-reset${suffix}`).addEventListener("click", () => {
      answers = Array(questions.length).fill(null);
      quizContainer.querySelectorAll("input").forEach(input => { input.checked = false; });
      try {
        localStorage.removeItem(storageKey);
        storageAvailable = true;
        storageStatus.textContent = "Cuestionario reiniciado. El progreso se guarda en este navegador.";
      } catch (error) {
        storageAvailable = false;
        storageStatus.textContent = `No se pudo borrar el progreso guardado: ${error.message} El reinicio solo afecta a esta página.`;
      }
      updateQuiz();
    });
    updateQuiz();
  }

  setupQuiz(questions, "nticx-actividades-modulo1-quiz-v1", "", "pregunta");
  setupQuiz(networkQuestions, "nticx-actividades-modulo2-quiz-v1", "-redes", "pregunta-redes");
  setupQuiz(informationQuestions, "nticx-actividades-modulo3-quiz-v1", "-informacion", "pregunta-informacion");
  setupQuiz(imageQuestions, "nticx-actividades-modulo4-quiz-v1", "-imagen", "pregunta-imagen");
  setupQuiz(mediaQuestions, "nticx-actividades-modulo5-quiz-v1", "-medios", "pregunta-medios");
  setupQuiz(multimediaQuestions, "nticx-actividades-modulo6-quiz-v1", "-multimedia", "pregunta-multimedia");
  setupQuiz(citizenshipQuestions, "nticx-actividades-modulo7-quiz-v1", "-ciudadania", "pregunta-ciudadania");
})();
