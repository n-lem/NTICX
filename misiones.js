(() => {
  const byId = id => document.getElementById(id);

  byId("pc-form").addEventListener("submit", event => {
    event.preventDefault();
    const cpu = byId("pc-cpu").value;
    const board = byId("pc-board").value;
    const ram = Number(byId("pc-ram").value);
    const storage = Number(byId("pc-storage").value);
    const cost = (cpu === "basico" ? 150 : 300) + (board === "a" ? 150 : 200)
      + ({ 4: 80, 8: 120, 16: 200 })[ram] + ({ 128: 80, 256: 120, 512: 200 })[storage];
    const compatible = (cpu === "basico" && board === "a") || (cpu === "avanzado" && board === "b");
    const feedback = [
      `Total: ${cost} de 700 puntos. ${cost <= 700 ? "Está dentro del presupuesto." : "Supera el presupuesto."}`,
      compatible ? "El procesador y la placa usan la misma plataforma ficticia." : "El procesador y la placa son incompatibles: elegí la misma plataforma.",
      ram >= 8 ? "La RAM elegida cubre la meta de 8 GB para esta actividad." : "Para esta consigna, probá al menos 8 GB de RAM.",
      storage >= 256 ? "El almacenamiento cumple la meta de 256 GB de esta actividad." : "Para los archivos de la biblioteca, probá al menos 256 GB."
    ];
    if (compatible && cost <= 700 && ram >= 8 && storage >= 256) feedback.push("¡Equipo listo para la misión!");
    byId("pc-result").textContent = feedback.join(" ");
  });

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
  byId("packet-form").addEventListener("submit", event => {
    event.preventDefault();
    const characters = Array.from(byId("packet-message").value.trim());
    if (characters.length < 3 || characters.length > 30) {
      byId("packet-result").textContent = "Ingresá un mensaje ficticio de 3 a 30 caracteres.";
      byId("packet-retry").disabled = true;
      packetParts = [];
      return;
    }
    packetParts = [0, 1, 2].map(index => characters.slice(Math.floor(index * characters.length / 3), Math.floor((index + 1) * characters.length / 3)).join(""));
    byId("packet-result").textContent = `Partes enviadas: 1 «${packetParts[0]}», 2 «${packetParts[1]}», 3 «${packetParts[2]}». Llegaron primero la 3 y luego la 1; la 2 se perdió. El receptor espera la parte faltante antes de reconstruir el mensaje.`;
    byId("packet-retry").disabled = false;
  });
  byId("packet-retry").addEventListener("click", () => {
    byId("packet-result").textContent = `Se retransmitió y recibió la parte 2 «${packetParts[1]}». El receptor ordenó las partes 1, 2 y 3. Mensaje reconstruido: «${packetParts.join("")}».`;
    byId("packet-retry").disabled = true;
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
  let scenes = initialScenes();
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
      const title = document.createElement("h3");
      title.textContent = `${index + 1}. ${scene.title}`;
      card.appendChild(title);
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
      [[-1, "↑ Subir"], [1, "↓ Bajar"]].forEach(([direction, text]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn-detail activity-button";
        button.textContent = text;
        button.id = `story-${scene.id}-${direction === -1 ? "up" : "down"}`;
        button.setAttribute("aria-label", `${text} ${scene.title}`);
        button.disabled = index + direction < 0 || index + direction >= scenes.length;
        button.addEventListener("click", () => {
          [scenes[index], scenes[index + direction]] = [scenes[index + direction], scenes[index]];
          renderStory();
          const moved = byId(button.id);
          if (!moved.disabled) moved.focus();
          else byId(`story-${scene.id}-${direction === -1 ? "down" : "up"}`).focus();
          storyResult.textContent = `${scene.title} está en la posición ${index + direction + 1}. Guardá para conservar los cambios.`;
        });
        controls.appendChild(button);
      });
      card.appendChild(controls);
      container.appendChild(card);
    });
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
