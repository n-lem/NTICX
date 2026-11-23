# NTICx 4° Año - Escuela de Educación Secundaria N° 33 “16 de septiembre”
### Nuevas Tecnologías de la Información y la Conectividad | Ciclo Lectivo 2026
**Docente:** Nahuel Lemos  
**Distrito:** José C. Paz | Región 9 | Dirección General de Cultura y Educación (DGCyE PBA)  
**Sitio Web en Vivo (GitHub Pages):** [https://n-lem.github.io/NTICX/](https://n-lem.github.io/NTICX/)  

---

## 📌 Presentación del Proyecto

Este repositorio contiene la planificación pedagógica anual integral, los recursos didácticos de aula, los manuales de estudio, las fichas de actividades y la plataforma web de consulta para la materia **NTICx (4° Año 1° División)**.

El proyecto está diseñado bajo el enfoque de **Alfabetización Digital-Informacional (ADI)** y el principio pedagógico de **Doble Vía de Aula**:
* **Vía A - Modalidad Desenchufada (*Unplugged* por defecto):** Actividades 100% realizables sin computadoras ni conexión a Internet (usando pizarrón, carpetas, tarjetas, juegos de roles y dinámicas corporales basadas en la colección de la Fundación Sadosky).
* **Vía B - Modalidad Digital Situada:** Variantes de taller en netbooks escolares de Conectar Igualdad (Huayra Linux / Windows), sala de computación o dispositivos móviles.

---

## 📁 Arquitectura del Repositorio

```
NTICX/
├── 📄 index.html                                        # Plataforma web principal
├── 📄 README.md                                          # Presentación general y documentación del proyecto
├── 📄 offline-documents.js                               # Documentos integrados para lectura directa desde USB
├── 📄 offline-manifest.js                                 # Recursos incluidos en el caché offline del navegador
├── 📄 service-worker.js                                   # Preparación del modo offline tras una visita con conexión
├── 📁 scripts/                                            # Herramientas para regenerar el paquete offline
├── 📁 00_Planificacion_Original/                        # Respaldo histórico del plan original
│   └── 📄 Planificación NTICX 4A (1).pdf
├── 📁 01_Planificacion_y_Cronograma/                     # Plan curricular DGCyE y cronograma maestro
│   ├── 📄 Planificacion_Anual_NTICX_2026_Actualizada.md
│   ├── 📄 Cronograma_Maestro_38_Clases.md
│   └── 📁 Clases_Individuales/                           # 38 planes de clase desglosados (Trimestres 1, 2 y 3)
├── 📁 02_Guia_Docente/                                  # Orientaciones pedagógicas, aula-taller y rúbricas RITE
│   └── 📄 Guia_Docente_NTICX.md
├── 📁 03_Guia_Estudiantes/                              # Manual de lectura para el estudiante
│   ├── 📄 Manual_Estudiante_NTICX.md                    # Manual completo anual
│   └── 📁 Modulos_Individuales/                          # Módulos 1 a 7 y glosario en archivos independientes
├── 📁 04_Cuadernillo_Actividades/                       # Fichas prácticas para la carpeta escolar
│   ├── 📄 Cuadernillo_Actividades_38_Clases.md          # Cuadernillo anual completo
│   ├── 📁 1_Trimestre/                                  # Fichas 01 a 12 (Hardware, Binario, Redes)
│   ├── 📁 2_Trimestre/                                  # Fichas 13 a 25 (Web, Semiótica, ESI, Grooming)
│   └── 📁 3_Trimestre/                                  # Fichas 26 a 38 (Multimedia, Leyes, IA, ABP)
├── 📁 05_Evaluaciones/                                  # Banco de instrumentos y rúbricas analíticas
│   ├── 📄 Evaluacion_Diagnostica_Inicial.md             # Diagnóstico de saberes y encuesta de conectividad
│   ├── 📄 Evaluacion_Trimestral_1.md                    # Examen escrito formal (Tema 1, Tema 2 y respuestas)
│   ├── 📄 Trabajo_Practico_Evaluativo_2.md              # Fanzine / Revista Mural (16 de Septiembre y ESI)
│   └── 📄 Proyecto_Integrador_Anual_3.md                # Pautas ABP, rúbrica anual y actas RITE
├── 📁 Bibliografía/                                     # Repositorio de recursos y catálogo internacional
│   ├── 📄 FUENTES_Y_ENLACES_GENERALES.md                # Índice maestro de fuentes y marcos curriculares comparados
│   ├── 📁 01_Modulo_1_Alfabetizacion_Computacional/     # Recursos didácticos y actividades Módulo 1
│   ├── 📁 02_Modulo_2_Redes_Digitales/                  # Recursos didácticos y simulaciones Módulo 2
│   ├── 📁 03_Modulo_3_Manejo_Informacion/               # Recursos didácticos y método Gavilán Módulo 3
│   ├── 📁 04_Modulo_4_Imagen_Visual/                    # Recursos didácticos y semiótica visual Módulo 4
│   ├── 📁 05_Modulo_5_Medios_Comunicacion_y_ESI/        # Recursos didácticos, radio escolar y ESI Módulo 5
│   ├── 📁 06_Modulo_6_Multimedia/                       # Recursos didácticos, audio y guion audiovisual Módulo 6
│   └── 📁 07_Modulo_7_Ciudadania_Digital_e_IA/          # Recursos didácticos, ciberseguridad e IA Módulo 7
├── 📁 06_Sitio_Web_Consulta/                            # Páginas auxiliares; su inicio redirige a la plataforma principal
│   ├── 🌐 index.html
│   ├── 🎨 styles.css
│   ├── 📊 data.js
│   └── ⚙️ app.js
└── 📁 Diseño_Curricular/                                # Diseño Curricular Oficial DGCyE para ES4
    └── 📄 tic_4_final_web.pdf
```

---

## 🌐 Plataforma Web de Consulta (GitHub Pages)

La plataforma web fue construida con tecnologías web estándar (HTML5, Vanilla CSS y JavaScript puro) sin dependencias externas:
* **Acceso:** La pantalla de contraseña es solo una barrera de navegación; el repositorio y sus materiales son públicos y no debe usarse para proteger información privada.
* **Conmutador de Doble Vía:** Selector para alternar en vivo entre *"Ambas Vías"*, *"Solo Desenchufada"* o *"Solo Digital"*.
* **Buscador y Filtros:** Búsqueda en tiempo real de clases, temas, efemérides y términos de glosario.
* **Actividades interactivas:** Desde el inicio se accede a prácticas por módulo: binario, arquitectura, almacenamiento, armado de computadora y datos (1); topologías y paquetes (2); evolución de la Web, búsqueda booleana y HTML (3); marcas, colores y diseño visual (4); verificación de información (5); storyboard (6); y contraseñas ficticias y detección de estafas (7). Elegí un módulo y una tarjeta para abrir una actividad a la vez; usá los enlaces para volver a las actividades o al selector. Los siete módulos incluyen un cuestionario de autoevaluación.
* **Progreso local:** Las respuestas de cada cuestionario se guardan por separado en el navegador de ese dispositivo, sin registro ni envío de datos. Se pueden borrar con «Reiniciar cuestionario». El storyboard se conserva únicamente al elegir «Guardar storyboard» y se puede eliminar con «Reiniciar storyboard». Si el navegador bloquea el almacenamiento, se puede practicar sin guardar. El estado de las demás actividades no se guarda. No ingreses datos personales y, en la práctica de contraseñas, usá únicamente ejemplos ficticios.
* **Misiones visuales:** El rompecabezas de computadora permite colocar componentes, periféricos y programas, quitarlos al pulsarlos y explorar qué se puede hacer con la selección. Es un esquema didáctico simplificado, no un equipo completo ni una prueba de compatibilidad. El recorrido de paquetes muestra una pérdida y retransmisión animadas; el storyboard permite ordenar viñetas con botones o arrastrando el asa con el mouse. La animación respeta la preferencia del dispositivo de reducir movimiento.
* **Modo offline en el navegador:** Al abrir el sitio con conexión, se guarda la aplicación, las fichas y los documentos; luego se puede continuar sin Internet en el mismo navegador y dispositivo.
* **Copia USB directa:** Copiá la carpeta completa del repositorio y abrí `index.html` con doble clic. El sitio integra los documentos para lectura local; no requiere servidor, instalación ni conexión. Los enlaces a recursos externos sí necesitan Internet.
* **Estilos de Impresión:** Optimizada para imprimir fichas limpias listas para fotocopias en blanco y negro.

### Actualizar el paquete offline

Cuando se agreguen o editen documentos Markdown, regenerá los archivos de consulta offline desde la raíz del repositorio:

```powershell
python scripts/build_offline_docs.py
```

La verificación del paquete se puede ejecutar con:

```powershell
python scripts/build_offline_docs.py --check
```

---

## ⚖️ Licencia y Uso Comunitario

Este material fue desarrollado para la educación pública bonaerense bajo licencia **Creative Commons Atribución-NoComercial-CompartirIgual (CC BY-NC-SA 4.0)**.
