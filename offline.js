(() => {
  const status = document.getElementById("offline-status");
  if (!status) return;

  function show(message, state) {
    status.textContent = message;
    status.dataset.state = state;
    status.hidden = false;
  }

  if (location.protocol === "file:") {
    show("Copia USB: el sitio y los materiales integrados funcionan sin Internet. Los enlaces a sitios externos sí requieren conexión.", "ready");
    return;
  }

  function updateConnection() {
    if (!navigator.onLine) {
      show("Sin conexión: usando los archivos guardados en este dispositivo.", "offline");
    } else if (navigator.serviceWorker?.controller) {
      show("Conectado. Los materiales también están disponibles sin conexión en este dispositivo.", "ready");
    } else {
      show("Conectado. La copia offline se está preparando; mantené esta página abierta hasta que termine.", "pending");
    }
  }

  window.addEventListener("online", updateConnection);
  window.addEventListener("offline", updateConnection);
  navigator.serviceWorker?.addEventListener("controllerchange", updateConnection);
  updateConnection();

  if (!("serviceWorker" in navigator)) {
    show("Este navegador no permite preparar el modo offline. Descargá la copia USB del repositorio para usarla sin conexión.", "warning");
    return;
  }

  const scriptUrl = document.currentScript?.src || location.href;
  const workerUrl = new URL("service-worker.js", scriptUrl);
  const scopeUrl = new URL("./", scriptUrl);
  navigator.serviceWorker.register(workerUrl, { scope: scopeUrl.pathname })
    .then(() => navigator.serviceWorker.ready)
    .then(updateConnection)
    .catch(error => {
      if (!navigator.onLine && navigator.serviceWorker.controller) {
        updateConnection();
        return;
      }
      show(`No se pudo preparar la copia offline: ${error.message}`, "warning");
    });
})();
