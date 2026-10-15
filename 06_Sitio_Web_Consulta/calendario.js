const calendarGrid = document.getElementById("calendar-grid");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const dias = ["D", "L", "M", "X", "J", "V", "S"];
const hoy = new Date();
const feriados = {
  "2026-01-01": "Año Nuevo",
  "2026-02-16": "Carnaval",
  "2026-02-17": "Carnaval",
  "2026-03-23": "Día no laborable con fines turísticos",
  "2026-03-24": "Día Nacional de la Memoria por la Verdad y la Justicia",
  "2026-04-02": "Día del Veterano y de los Caídos en la Guerra de Malvinas",
  "2026-04-03": "Viernes Santo",
  "2026-05-01": "Día del Trabajador",
  "2026-05-25": "Día de la Revolución de Mayo",
  "2026-06-15": "Paso a la Inmortalidad del General Martín Miguel de Güemes (trasladado)",
  "2026-06-19": "Paso a la Inmortalidad del General Manuel Belgrano (trasladado)",
  "2026-07-09": "Día de la Independencia",
  "2026-07-10": "Día no laborable con fines turísticos",
  "2026-08-17": "Paso a la Inmortalidad del General José de San Martín",
  "2026-10-12": "Día del Respeto a la Diversidad Cultural",
  "2026-11-09": "Feriado nacional especial",
  "2026-11-11": "Feriado especial en la Provincia de Buenos Aires",
  "2026-11-23": "Día de la Soberanía Nacional (trasladado)",
  "2026-12-07": "Día no laborable con fines turísticos",
  "2026-12-08": "Inmaculada Concepción de María",
  "2026-12-25": "Navidad"
};
const hitos = {
  "2026-03-02": { label: "Inicio del 1° cuatrimestre", type: "term-start" },
  "2026-07-17": { label: "Fin del 1° cuatrimestre", type: "term-end" },
  "2026-07-20": { label: "Inicio del receso invernal", type: "recess" },
  "2026-07-31": { label: "Fin del receso invernal", type: "recess" },
  "2026-08-03": { label: "Inicio del 2° cuatrimestre", type: "term-start" },
  "2026-12-22": { label: "Fin del ciclo lectivo y del 2° cuatrimestre", type: "term-end" }
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
