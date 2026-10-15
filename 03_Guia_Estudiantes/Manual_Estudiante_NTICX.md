# MANUAL DEL ESTUDIANTE DE NTICx
## Nuevas Tecnologías de la Información y la Conectividad
### 4° Año - Escuela de Educación Secundaria | Provincia de Buenos Aires

**Institución:** EES N° 33 “16 de septiembre” (José C. Paz)  
**Docente:** Nahuel Lemos | **Ciclo Lectivo:** 2026  
**Nombre del Estudiante:** __________________________________________________  
**Curso y División:** 4° 1°

---

## BIENVENIDA AL CURSO DE NTICx

¡Hola! Te damos la bienvenida a **NTICx**. Vivimos rodeados de pantallas, redes sociales, videos y algoritmos de inteligencia artificial. Usamos el celular para hablar con amigos, escuchar música, ver series o jugar online. Pero... **¿alguna vez te preguntaste qué pasa realmente detrás de la pantalla?**

* ¿Cómo viaja un mensaje de WhatsApp desde tu casa en José C. Paz hasta el otro lado del mundo en menos de un segundo?
* ¿Por qué una computadora, siendo tan rápida, en el fondo solo entiende ceros y unos ($0$ y $1$)?
* ¿Quién es el dueño de la información que subís a Internet?
* ¿Cómo te manipulan los avisos publicitarios y los filtros de belleza?
* ¿Qué leyes te protegen en Argentina si alguien usa tus fotos o te acosa por redes?

El objetivo de esta materia **no es convertirte en un usuario obediente que solo sabe hacer clics**, sino darte las herramientas para que entiendas la tecnología, no te dejes engañar, puedas crear tus propios contenidos y ejerzas plenamente tu **ciudadanía digital**.

---

## ÍNDICE DEL MANUAL

* [MÓDULO 1: Alfabetización Informática-Computacional](#módulo-1-alfabetización-informática-computacional)
* [MÓDULO 2: Alfabetización en Redes Digitales de Información](#módulo-2-alfabetización-en-redes-digitales-de-información)
* [MÓDULO 3: Alfabetización en Manejo de la Información](#módulo-3-alfabetización-en-manejo-de-la-información)
* [MÓDULO 4: Alfabetización en Manejo de Componentes de Imagen Visual](#módulo-4-alfabetización-en-manejo-de-componentes-de-imagen-visual)
* [MÓDULO 5: Alfabetización en Medios Digitales de Comunicación y Colaboración](#módulo-5-alfabetización-en-medios-digitales-de-comunicación-y-colaboración)
* [MÓDULO 6: Alfabetización Multimedia](#módulo-6-alfabetización-multimedia)
* [MÓDULO 7: Alfabetización en Ciudadanía Digital](#módulo-7-alfabetización-en-ciudadanía-digital)
* [GLOSARIO TERMINOLÓGICO DE LA A a la Z](#glosario-terminológico-de-la-a-a-la-z)

---

# MÓDULO 1: Alfabetización Informática-Computacional

## 1.1. Técnica, Tecnología e Innovación: ¿De dónde venimos?
A menudo usamos las palabras "técnica" y "tecnología" como si fueran sinónimos, pero no lo son:
* **Técnica:** Es un procedimiento, un conjunto de pasos o habilidades prácticas que realiza el ser humano para lograr un resultado (por ejemplo: la técnica para pintar una pared, encender fuego con dos piedras o patear un tiro libre).
* **Tecnología:** Es la aplicación del conocimiento científico organizado, junto con la técnica, para diseñar y fabricar herramientas, máquinas y sistemas que resuelven necesidades humanas. Un libro, una tijera y una rueda son tecnología, al igual que una computadora cuántica.
* **Innovación:** Ocurre cuando se introduce una novedad que transforma o mejora significativamente una tecnología existente (por ejemplo: pasar del teléfono fijo de disco al smartphone con pantalla táctil).

### De las TIC a las NTICx
1. **TIC (Tecnologías de la Información y la Comunicación):** Abarcan los medios tradicionales que permitieron transmitir información a distancia (la radio AM/FM, la televisión abierta, el telégrafo, el teléfono analógico).
2. **NTIC (Nuevas Tecnologías de la Información y la Comunicación):** Nacen con la digitalización y las computadoras personales en la segunda mitad del siglo XX.
3. **NTICx (Nuevas Tecnologías de la Información y la Conectividad):** La letra **"x"** representa la **conectividad ubicua y masiva**. Ya no se trata solo de tener una computadora aislada para escribir textos; se trata de dispositivos interconectados en tiempo real a nivel global, redes sociales, trabajo en la nube, hipermedialidad y colaboración permanente.

---

## 1.2. Datos, Información y Conocimiento
Una computadora no "sabe" nada por sí misma. Procesa datos para que los humanos construyamos conocimiento:
* **Dato:** Es la unidad mínima, un hecho aislado, un símbolo o un número sin contexto (Ejemplo: `38`, `Lunes`, `30.000`). Por sí solo, un dato no nos dice nada.
* **Información:** Es un conjunto de datos organizados, estructurados y puestos en contexto que transmiten un significado claro (Ejemplo: *"En el año lectivo 2026 tendremos 38 clases de NTICx los días lunes"*).
* **Conocimiento:** Es la apropiación, interpretación y aplicación crítica que una persona o comunidad hace de esa información para tomar decisiones, transformar su realidad o defender sus derechos.

> [!NOTE]
> **Dato y Memoria Colectiva:** En Argentina, la digitalización de datos históricos y la creación del **Banco Nacional de Datos Genéticos (BNDG)** demostraron que los datos bien organizados salvan vidas y restituyen derechos humanos fundamentales, permitiendo recuperar la verdadera identidad biológica de nietos apropiados durante la última dictadura cívico-militar.

---

## 1.3. ¿Cómo funciona una Computadora? El Modelo Von Neumann
Todas las computadoras modernas (desde una supercomputadora hasta tu celular o la netbook de la escuela) siguen la arquitectura propuesta por el matemático **John von Neumann** en 1945:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      SISTEMA DE COMPUTACIÓN                            │
│                                                                        │
│   ┌───────────────┐     ┌───────────────────────┐    ┌─────────────┐   │
│   │ DISPOSITIVOS  │     │   CPU (PROCESADOR)    │    │ DISPOSITIVOS│   │
│   │  DE ENTRADA   │────▶│ ┌────────┐ ┌────────┐ │───▶│  DE SALIDA  │   │
│   │ (Teclado/Mic) │     │ │   UC   │ │  ALU   │ │    │ (Pantalla/  │   │
│   └───────────────┘     │ └────────┘ └────────┘ │    │  Parlantes) │   │
│                         └───────────┬───────────┘    └─────────────┘   │
│                                     │                                  │
│                                     ▼                                  │
│                         ┌───────────────────────┐                      │
│                         │   MEMORIA PRINCIPAL   │                      │
│                         │      (RAM / ROM)      │                      │
│                         └───────────────────────┘                      │
└────────────────────────────────────────────────────────────────────────┘
```

1. **CPU (Unidad Central de Procesamiento):** Es el "cerebro" de la máquina. Se divide en:
   * **UC (Unidad de Control):** Es el director de orquesta. Busca las instrucciones en la memoria, las interpreta y le indica a cada componente qué hacer y cuándo.
   * **ALU (Unidad Aritmético-Lógica):** Es la calculadora ultrarrápida. Realiza operaciones matemáticas (sumas, restas) y comparaciones lógicas (mayor que, menor que, igual a).
2. **Memoria RAM (Random Access Memory):** Es la memoria de trabajo temporal. Es **volátil** (si se corta la luz o se apaga el equipo, todo lo que estaba en la RAM se borra). Allí se cargan los programas y documentos que estás usando en el momento.
3. **Memoria ROM (Read Only Memory):** Es de sólo lectura y **no volátil**. Viene grabada de fábrica con las instrucciones indispensables para el arranque de la computadora (la BIOS / UEFI).
4. **Almacenamiento Secundario (Disco Rígido / SSD / Pendrive):** Es la memoria permanente donde guardamos archivos, fotos y el sistema operativo para que no se pierdan al apagar el equipo.

---

## 1.4. Periféricos y Unidades de Medida
Los **periféricos** son los dispositivos externos conectados a la placa madre:
* **De Entrada (E):** Introducen datos al sistema (Teclado, mouse, micrófono, cámara web, escáner).
* **De Salida (S):** Muestran los resultados del procesamiento (Monitor, parlantes, auriculares, impresora).
* **De Almacenamiento (A):** Guardan información (Disco SSD, memoria USB, tarjeta micro SD).
* **De Comunicación (C):** Conectan la computadora con otras máquinas (Placa de red Wi-Fi, puerto Ethernet, módem).
* **Mixtos (E/S):** Cumplen ambas funciones simultáneamente (Pantalla táctil del celular, casco de realidad virtual).

### La Escala de Medida Digital:
En el mundo digital, la unidad mínima es el **bit** (un $0$ o un $1$). Un conjunto de 8 bits forma un **Byte**, que equivale a una letra o carácter:

$$\mathbf{1 \text{ Byte}} = 8 \text{ bits} \quad (\text{Ej: } 01000001 = \text{'A'})$$

| Unidad | Abreviatura | Equivalencia exacta | Equivalencia aproximada | Ejemplo cotidiano |
| :--- | :---: | :---: | :---: | :--- |
| **Kilobyte** | **KB** | $1024 \text{ Bytes}$ | $1.000 \text{ Bytes}$ | Un párrafo de texto simple. |
| **Megabyte** | **MB** | $1024 \text{ KB}$ | $1.000.000 \text{ Bytes}$ | Una canción en MP3 (~4 MB) o una foto (~3 MB). |
| **Gigabyte** | **GB** | $1024 \text{ MB}$ | $1.000.000.000 \text{ Bytes}$ | Una película en HD (~2 GB) o la memoria del celular (64-128 GB). |
| **Terabyte** | **TB** | $1024 \text{ GB}$ | $10^{12} \text{ Bytes}$ | Un disco rígido externo masivo (1 a 4 TB). |
| **Petabyte** | **PB** | $1024 \text{ TB}$ | $10^{15} \text{ Bytes}$ | Servidores de video de YouTube o Netflix. |

---

## 1.5. El Sistema Binario
Los seres humanos usamos el **sistema decimal** (base 10, con dígitos del 0 al 9) porque tenemos 10 dedos en las manos. Las computadoras usan el **sistema binario** (base 2, con dígitos 0 y 1) porque sus circuitos electrónicos funcionan con transistores que solo tienen dos estados físicos: **con corriente (1)** o **sin corriente (0)**.

### ¿Cómo escribir números en binario?
Cada posición de derecha a izquierda vale el doble de la anterior (potencias de 2):

| Posición: | $2^4 = 16$ | $2^3 = 8$ | $2^2 = 4$ | $2^1 = 2$ | $2^0 = 1$ | **Suma Decimal** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Número 9: | 0 | 1 | 0 | 0 | 1 | $8 + 1 = 9$ |
| Número 22: | 1 | 0 | 1 | 1 | 0 | $16 + 4 + 2 = 22$ |

---

## 1.6. Software: El Alma de la Máquina
El hardware es el cuerpo físico; el **software** es el conjunto de programas, instrucciones y datos lógicos que le dicen al hardware qué hacer.

* **Software de Sistema (Sistema Operativo):** Es el programa maestro que administra los recursos de la máquina y permite al usuario interactuar con ella (Windows, GNU/Linux, Android, macOS).
* **Software de Aplicación:** Programas creados para tareas específicas del usuario (procesadores de texto como Word o LibreOffice Writer, navegadores web, reproductores de música, juegos).

### El Debate Ético: Software Propietario vs. Software Libre
* **Software Propietario (Privativo):** El código fuente es secreto. El usuario compra una "licencia de uso", pero no tiene derecho a ver cómo funciona, modificarlo ni compartirlo libremente (Ej: Microsoft Windows, Adobe Photoshop).
* **Software Libre (Free Software):** Respeta la libertad de los usuarios y la comunidad. Creado por Richard Stallman y la Free Software Foundation, garantiza **4 libertades esenciales**:
  1. **Libertad 0:** Usar el programa con cualquier propósito.
  2. **Libertad 1:** Estudiar cómo funciona el código y cambiarlo para adaptarlo a tus necesidades.
  3. **Libertad 2:** Distribuir copias para ayudar a tu comunidad.
  4. **Libertad 3:** Mejorar el programa y publicar tus mejoras para beneficio de todos.

> [!TIP]
> **¿Por qué la escuela pública usa Huayra Linux?**  
> Huayra es una distribución de GNU/Linux desarrollada en Argentina para el programa Conectar Igualdad. Es software libre, soberano, gratuito, no consume recursos innecesarios y garantiza que cualquier estudiante pueda aprender computación sin pagar licencias millonarias a empresas extranjeras.

---

# MÓDULO 2: Alfabetización en Redes Digitales de Información

## 2.1. ¿Qué es una Red Informática?
Una red es un conjunto de computadoras y dispositivos conectados entre sí mediante cables o señales inalámbricas con un fin principal: **compartir recursos, datos y servicios** (como una impresora, archivos, acceso a Internet o bases de datos).

### Medios de Transmisión:
1. **Medios Guiados (con cable):**
   * *Cable UTP (Par trenzado):* El cable de red clásico de las salas de computación. Usa conectores RJ-45. Económico y rápido para distancias de hasta 100 metros.
   * *Fibra Óptica:* Hilos de vidrio o plástico purísimo por donde viajan **pulsos de luz**. Inmune a interferencias eléctricas, permite velocidades altísimas y distancias de cientos de kilómetros (por debajo del océano cruzan cables submarinos que conectan los continentes).
2. **Medios No Guiados (inalámbricos):**
   * *Wi-Fi:* Ondas de radiofrecuencia para redes locales domésticas o escolares.
   * *Bluetooth:* Señal de corto alcance (hasta 10 metros) para conectar auriculares, teclados o celulares.
   * *Red Celular (4G / 5G):* Antenas terrestres distribuidas en celdas geográficas.
   * *Satélite:* Conexiones para zonas rurales o aisladas donde no llegan cables.

---

## 2.2. Clasificación de Redes por su Alcance Geográfico
* **PAN (Personal Area Network):** Red de área personal en un radio de pocos metros (Tu celular conectado a tu reloj inteligente y tus auriculares inalámbricos).
* **LAN (Local Area Network):** Red de área local (La sala de computación de la EES N° 33, tu casa o una oficina).
* **MAN (Metropolitan Area Network):** Red de área metropolitana que cubre una ciudad entera (El sistema de cámaras de seguridad del municipio de José C. Paz).
* **WAN (Wide Area Network):** Red de área amplia que abarca países y continentes. **Internet es la WAN más grande del planeta.**

---

## 2.3. Topologías de Red: La Forma en que se Conectan los Nodos
La **topología** es la disposición física o lógica en que se organizan las computadoras (nodos):
* **Topología en Bus:** Todas las máquinas se conectan a un único cable central común. *Problema:* Si el cable troncal se corta en algún punto, toda la red queda incomunicada.
* **Topología en Anillo:** Cada máquina está conectada a la siguiente formando un círculo cerrado. La información viaja en un solo sentido.
* **Topología en Estrella:** Todas las computadoras se conectan individualmente a un dispositivo central (un *Switch* o *Router*). Es la topología más usada en la actualidad. *Ventaja:* Si un cable de una máquina se rompe, solo esa máquina queda desconectada; el resto sigue funcionando normalmente.
* **Topología en Malla:** Todos los nodos están interconectados con varios caminos alternativos. Es la estructura de Internet: si una ruta falla, los datos viajan por otro camino.

---

## 2.4. Modelos de Comunicación: Cliente-Servidor vs. Peer-to-Peer (P2P)
* **Cliente-Servidor:** Hay una máquina central potente llamada **Servidor** que almacena datos y provee servicios (páginas web, correos, bases de datos), y múltiples máquinas llamadas **Clientes** (tu celular, tu netbook) que le hacen peticiones. Si el servidor se apaga o se satura, ningún cliente puede acceder.
* **P2P (Peer-to-Peer / Entre Pares):** No hay un jefe central. Todas las computadoras conectadas actúan simultáneamente como clientes y servidores, compartiendo partes de archivos entre sí (Ejemplo: redes de descarga BitTorrent, redes de criptomonedas).

---

## 2.5. ¿Cómo funciona Internet? Protocolo TCP/IP
Internet no es magia: es una inmensa red de redes de computadoras que hablan el mismo idioma gracias a una familia de reglas llamada **TCP/IP**:
* **Dirección IP (Internet Protocol):** Es el "número de documento" único e irrepetible que tiene cada dispositivo conectado a la red para poder ser localizado (Ejemplo: `192.168.1.1` o `200.45.12.80`).
* **Conmutación de Paquetes:** Cuando enviás una foto o un video, el archivo no viaja entero en un solo bloque. El protocolo **TCP** lo desarma en miles de pedacitos diminutos llamados **paquetes**. Cada paquete lleva la IP de origen, la IP de destino y un número de orden.
* **Routers (Enrutadores):** Son las computadoras especializadas que reciben paquetes en el camino y deciden por qué cable o antena enviarlos para que lleguen más rápido a destino. Al llegar, el protocolo TCP del receptor verifica que no falte ninguno y los reordena exactamente como estaban.

---

# MÓDULO 3: Alfabetización en Manejo de la Información

## 3.1. ¿Internet es lo mismo que la Web?
¡No! Son cosas muy diferentes:
* **Internet** es la infraestructura física mundial: la red de cables submarinos, satélites, routers y computadoras conectadas.
* **World Wide Web (WWW)** es un servicio que funciona *arriba* de Internet. Fue inventada en 1989 por el físico británico **Tim Berners-Lee** como una gigantesca telaraña de páginas y documentos multimedia vinculados entre sí mediante **hipertexto**.

### Los Tres Pilares de la Web:
1. **HTML (HyperText Markup Language):** El lenguaje de etiquetas con el que se escribe la estructura de las páginas web.
2. **HTTP / HTTPS (HyperText Transfer Protocol):** El protocolo de comunicación seguro para pedir y recibir páginas web.
3. **URL (Uniform Resource Locator):** La dirección web exacta de un recurso (ejemplo: `https://www.abc.gob.ar/secundaria/nticx.html`).

---

## 3.2. Búsquedas Críticas y Operadores Booleanos
En Internet existe el fenómeno de la **infoxicación** (intoxicación por exceso de información y desinformación). Para buscar como un profesional y no perder horas revisando resultados inútiles, usamos la **lógica booleana**:

| Operador / Símbolo | Función | Ejemplo de Búsqueda |
| :---: | :--- | :--- |
| **Comillas `" "`** | Busca la **frase exacta**, en ese orden estricto de palabras. | `"Ley Mica Ortega"` |
| **`AND` o espacio** | Exige que **ambos** términos aparezcan en la página. | `redes informáticas AND topología` |
| **`OR`** | Acepta páginas que contengan **cualquiera** de las opciones. | `hardware OR software` |
| **Signo menos `-`** | **Excluye** palabras que no querés que aparezcan. | `jaguar -auto` *(busca el animal, no la marca)* |
| **`site:`** | Limita la búsqueda a un dominio específico o país. | `ESI site:.edu.ar` *(solo sitios educativos argentinos)* |
| **`filetype:`** | Busca únicamente archivos de un formato determinado. | `Constitucion Nacional filetype:pdf` |

---

## 3.3. La Evolución de la Web: De la Web 1.0 a la Web 4.0
* **Web 1.0 (La Web Estática / Lectura):** Años 90. Sitios web creados por unos pocos expertos. Los usuarios comunes solo podían leer la pantalla de forma pasiva, sin comentar ni publicar nada.
* **Web 2.0 (La Web Social / Participativa):** Años 2000 en adelante. Nacen los blogs, foros, Wikipedia, YouTube y redes sociales. El usuario se convierte en **prosumidor** (a la vez consumidor y productor activo de contenidos).
* **Web 3.0 (La Web Semántica):** Los datos se etiquetan con metadatos para que las máquinas entiendan el significado de las palabras, permitiendo cruces de información inteligentes e interoperables.
* **Web 4.0 (La Web Ubicua y Predictiva / IA):** La era actual. Asistentes virtuales, algoritmos de aprendizaje profundo (*Deep Learning*), modelos de lenguaje que generan texto e imágenes a partir de indicaciones (*prompts*) y dispositivos interconectados en el "Internet de las Cosas" (IoT).

---

# MÓDULO 4: Alfabetización en Manejo de Componentes de Imagen Visual

## 4.1. La Imagen como Mensaje: Semiótica y Signos
Vivimos en una cultura hipervisual. Las imágenes no son una copia inocente de la realidad: son construcciones intencionadas con propósitos comunicativos, comerciales o políticos.

El filósofo **Charles Sanders Peirce** clasificó los signos visuales en tres categorías fundamentales:
1. **Índice o Indicio:** Mantiene una relación física de causa-efecto natural con lo que representa (Ejemplo: una columna de humo indica fuego; una huella en el barro indica que alguien pisó allí).
2. **Ícono:** Se parece físicamente a lo que representa (Ejemplo: el dibujo de una tijera para la herramienta de recortar; la foto de tu cara en tu documento).
3. **Símbolo:** No tiene parecido físico con la realidad; su significado es un acuerdo cultural arbitrario que aprendimos socialmente (Ejemplo: los colores de una bandera patria, la paloma de la paz, la cruz verde de las farmacias).

---

## 4.2. Los Dos Niveles de Lectura: Denotación y Connotación
Para analizar cualquier fotografía o aviso publicitario debemos aprender a separar dos capas:
* **Nivel Denotativo (Lo objetivo / Lo que se ve):** Es la descripción literal de los elementos físicos presentes en la imagen sin emitir juicios de valor (Ejemplo: *"En la imagen hay un auto gris estacionado en la cima de una montaña rocosa iluminado por el sol del amanecer"*).
* **Nivel Connotativo (Lo subjetivo / Lo que sugiere):** Son los significados culturales, emocionales e ideológicos que la imagen despierta en quien la mira (Ejemplo: *"El auto en la montaña connota aventura, libertad, conquista de la naturaleza, poder adquisitivo y éxito personal"*).

---

## 4.3. Identidad Visual: ¿Logotipo, Isotipo o Isologo?
En el diseño gráfico existen cuatro términos técnicos precisos para clasificar cómo se identifica una institución, marca o proyecto:

```
┌─────────────────┬──────────────────────────────────────────┬──────────────────────┐
│ TIPO            │ DEFINICIÓN TÉCNICA                       │ EJEMPLO RECONOCIDO   │
├─────────────────┼──────────────────────────────────────────┼──────────────────────┤
│ 1. LOGOTIPO     │ Construido exclusivamente con texto o    │ Google, Coca-Cola,   │
│                 │ tipografía legible.                      │ SONY, Disney         │
├─────────────────┼──────────────────────────────────────────┼──────────────────────┤
│ 2. ISOTIPO      │ Es únicamente el dibujo o símbolo visual │ La manzana mordida   │
│                 │ sin ninguna letra ni palabra.            │ de Apple, pipa Nike  │
├─────────────────┼──────────────────────────────────────────┼──────────────────────┤
│ 3. IMAGOTIPO    │ Texto y símbolo conviven juntos pero     │ Adidas, Lacoste,     │
│                 │ separados (pueden funcionar por separado)│ Spotify              │
├─────────────────┼──────────────────────────────────────────┼──────────────────────┤
│ 4. ISOLOGO      │ Texto y símbolo gráfico están fusionados │ Burger King, Ford,   │
│                 │ e integrados; no se pueden separar.      │ Starbucks, BMW       │
└─────────────────┴──────────────────────────────────────────┴──────────────────────┘
```

---

## 4.4. Retórica Publicitaria y Psicología del Color
La publicidad utiliza figuras retóricas para convencernos de comprar productos o adoptar ideas:
* **Metáfora Visual:** Sustituye un objeto por otro con el que comparte una cualidad (Ejemplo: una pila que tiene forma de fruta fresca para indicar que es ecológica).
* **Hipérbole Visual:** Exagera desmesuradamente el tamaño, la fuerza o los efectos de algo (Ejemplo: un hombre sopla una vela y desintegra la pared de su casa).

### El Color como Disparador Emocional:
* **Rojo:** Energía, peligro, urgencia, apetito (muy usado en cadenas de comida rápida y alertas).
* **Azul:** Confianza, seguridad, calma, profesionalismo (predominante en bancos, hospitales y redes sociales como Facebook o LinkedIn).
* **Amarillo:** Alegría, optimismo, llamada de atención.
* **Verde:** Naturaleza, salud, ecología, dinero.
* **Negro:** Elegancia, lujo, sobriedad y exclusividad.

---

# MÓDULO 5: Alfabetización en Medios Digitales de Comunicación y Colaboración

## 5.1. El Proceso de Comunicación: El Modelo de Shannon y Weaver
En 1948, Claude Shannon y Warren Weaver propusieron el modelo clásico de telecomunicaciones, que hoy sigue vigente en las redes digitales:

$$\text{Emisor} \longrightarrow \text{Transmisor (Codificación)} \xrightarrow{\text{Canal con RUIDOS}} \text{Receptor (Decodificación)} \longrightarrow \text{Destino}$$

* **Canal:** El medio físico por donde viaja la señal (cable, aire, fibra óptica).
* **Ruidos:** Cualquier interferencia que distorsiona el mensaje. En el mundo digital distinguimos:
  * *Ruidos Técnicos:* Falta de señal, corte de Wi-Fi, audio saturado o cámara congelada.
  * *Ruidos Semánticos:* Malentendidos por falta de entonación o contexto (la típica pelea en WhatsApp porque un mensaje en mayúsculas sonó agresivo).

---

## 5.2. Redes Sociales, Algoritmos y Burbujas de Filtro
Las redes sociales no nos muestran el mundo real: nos muestran un mundo fabricado a la medida de nuestros gustos.
* **Algoritmos de Recomendación:** Fórmulas matemáticas diseñadas para maximizar el tiempo que pasamos mirando la pantalla (economía de la atención). Si te detenés a ver videos de gatos o de autos, el sistema te mostrará miles de videos similares para vender más publicidad.
* **Cámara de Eco y Burbuja de Filtro:** Cuando el algoritmo solo te muestra contenidos de personas que piensan igual que vos, dejás de ver opiniones diferentes, lo que genera polarización social y aislamiento ideológico.

---

## 5.3. ESI en Entornos Digitales: Cuerpos, Filtros y Vínculos
La **Educación Sexual Integral (ESI - Ley 26.150 y 14.744)** no solo trata sobre biología: trata sobre el respeto, los vínculos saludables y el cuidado del propio cuerpo en todos los espacios, incluidos los digitales.

* **Violencia Estética y Filtros de Belleza:** Los filtros de aplicaciones como Instagram o TikTok blanquean la piel, achican narices, afinan cinturas y borran poros. Esto crea estándares irreales de belleza que provocan ansiedad, baja autoestima y trastornos corporales en adolescentes. **Recordá: lo que ves en redes no es la vida real; es una versión editada y filtrada.**
* **Soberanía y Consentimiento Digital:** Enviar una foto o mensaje es una decisión personal. Nadie tiene derecho a presionarte ni exigirte imágenes que no deseás compartir.

---

## 5.4. Prevención del Grooming: La Ley Nacional 27.590 "Mica Ortega"
El **Grooming** es un delito grave tipificado en el artículo 131 del Código Penal Argentino:
> *"Ocurre cuando una persona adulta contacta a un niño, niña o adolescente a través de medios digitales (redes sociales, juegos online, mensajería) haciéndose pasar por un par o ganándose su confianza con el propósito de cometer un delito contra su integridad sexual."*

### Reglas Clave de Autocuidado y Acción:
1. **No confiar en desconocidos:** En internet cualquiera puede ponerse la foto de un chico o chica de 15 años.
2. **Si algo te incomoda o te piden fotos íntimas:** No te calles ni tengas vergüenza. Cortá la comunicación inmediatamente.
3. **No borres las pruebas:** No elimines los chats, audios ni capturas de pantalla; son la evidencia judicial.
4. **Pedí ayuda a un adulto de confianza o a tus docentes en la escuela.**
5. **Canales de Denuncia Gratuitos en Argentina:** Línea **102** (Derechos de Niñas, Niños y Adolescentes) y Línea **137** (Víctimas de Violencia Familiar y Sexual).

---

## 5.5. Periodismo Digital y Desinformación: ¿Cómo Desarmar Fake News?
Las noticias falsas se propagan hasta seis veces más rápido que las verdaderas porque apelan a emociones extremas (miedo, indignación o sorpresa).

### Guía de 5 Pasos para Verificar Información (Fact-Checking):
1. **Verificá la fuente:** ¿Quién firma la nota? ¿Es un medio reconocido o un blog anónimo lleno de publicidad dudosa?
2. **Mirá la fecha:** Muchas veces se viralizan noticias trágicas que ocurrieron hace 10 años como si pasaran hoy.
3. **Leé más allá del titular:** Muchos sitios usan titulares exagerados (*clickbait*) que contradicen el texto interno.
4. **Búsqueda inversa de imágenes:** En Google Imágenes podés subir la foto sospechosa para descubrir de qué fecha y lugar proviene realmente.
5. **No reenvíes si dudás:** Cortá la cadena de desinformación.

---

# MÓDULO 6: Alfabetización Multimedia

## 6.1. ¿Qué es el Lenguaje Multimedia?
El término multimedia refiere a la integración simultánea y armónica de múltiples lenguajes expresivos: **texto, imágenes estáticas, sonido, animaciones y video**, organizados de forma interactiva e hipermedial.

### Formatos Digitales y Algoritmos de Compresión:
Para que los archivos no pesen demasiado y puedan circular por redes, se utilizan técnicas de compresión:
* **Compresión con Pérdida (Lossy):** Elimina información que el ojo o el oído humano casi no perciben. El archivo queda muy liviano pero pierde fidelidad original.
  * *JPG:* El formato estándar para fotografías digitales.
  * *MP3:* Comprime audio eliminando frecuencias inaudibles para el oído humano.
  * *MP4:* Formato estándar de video que equilibra alta calidad y bajo peso.
* **Compresión sin Pérdida (Lossless):** Reduce el tamaño sin descartar ningún dato original.
  * *PNG:* Permite fondos transparentes y textos nítidos sin degradación.
  * *WAV:* Formato de audio puro sin comprimir, usado en grabaciones de estudio profesionales.
  * *SVG:* Gráficos vectoriales basados en fórmulas matemáticas que nunca se pixelan al agrandarse.

---

## 6.2. El Sonido Digital y la Producción de Podcasts
El sonido en la naturaleza es una onda analógica continua. Para guardarlo en una computadora se realiza un proceso de **digitalización**:
1. **Muestreo (Sampling):** El micrófono toma miles de "fotos" o muestras de la onda por segundo (Frecuencia en Hertz, ej. $44.100 \text{ Hz}$ es la calidad estándar de CD).
2. **Cuantificación:** Se asigna un valor numérico binario a cada muestra (Bits de resolución, ej. 16 bits).

### Los 4 Componentes del Lenguaje Sonoro:
* **Palabra (Voz humana):** El tono, el ritmo y la claridad del mensaje hablado.
* **Música:** Genera ambientación, clima emocional o actúa como "cortina" de presentación.
* **Efectos de Sonido (Foley):** Ruidos que recrean la realidad (pasos, timbre, truenos, notificaciones).
* **Silencio:** Pausas dramáticas que invitan a la reflexión o generan suspenso.

---

## 6.3. El Lenguaje Audiovisual: Planos Cinematográficos
La escala de planos define qué porción de la realidad entra en el encuadre de la cámara:

```
┌─────────────────────────────────┬──────────────────────────────────────────────┐
│ PLANO CINEMATOGRÁFICO           │ DESCRIPCIÓN Y EFECTO NARRATIVO               │
├─────────────────────────────────┼──────────────────────────────────────────────┤
│ Gran Plano General (GPG)        │ Muestra el paisaje entero; el ser humano     │
│                                 │ aparece diminuto. Ubica el escenario.        │
├─────────────────────────────────┼──────────────────────────────────────────────┤
│ Plano General (PG)              │ La persona se ve de cuerpo entero de pies a  │
│                                 │ cabeza. Muestra la acción en el entorno.     │
├─────────────────────────────────┼──────────────────────────────────────────────┤
│ Plano Americano o Tres Cuartos  │ Corta a la persona desde las rodillas hacia  │
│                                 │ arriba (clásico de las películas del oeste). │
├─────────────────────────────────┼──────────────────────────────────────────────┤
│ Plano Medio (PM)                │ Corta a la persona por la cintura. Es el     │
│                                 │ plano de las conversaciones cotidianas.      │
├─────────────────────────────────┼──────────────────────────────────────────────┤
│ Primer Plano (PP)               │ Corta por los hombros hasta la cabeza.       │
│                                 │ Enfatiza las emociones y gestos del rostro.  │
├─────────────────────────────────┼──────────────────────────────────────────────┤
│ Plano Detalle (PD)              │ Encuadra un objeto diminuto o una parte      │
│                                 │ específica (unos ojos, una mano escribiendo).│
└─────────────────────────────────┴──────────────────────────────────────────────┘
```

### El Storyboard:
Es el guion gráfico previo al rodaje. Consiste en una serie de viñetas ilustradas (como una historieta) donde se dibuja cada escena antes de filmar, indicando el plano, el ángulo de cámara y el diálogo o audio correspondiente.

---

# MÓDULO 7: Alfabetización en Ciudadanía Digital

## 7.1. Huella Digital y Soberanía sobre los Datos
Cada vez que navegás por Internet, dejás un rastro indeleble conocido como **Huella Digital**:
* **Huella Activa:** La información que publicás voluntariamente (fotos, publicaciones, comentarios, audios en grupos).
* **Huella Pasiva:** Los datos que las plataformas recolectan sobre vos sin que te des cuenta (tu ubicación GPS segundo a segundo, el modelo de tu teléfono, cuánto tiempo mirás una foto antes de deslizar el dedo, tus búsquedas en horarios nocturnos).

Estos datos se compilan en un perfil algorítmico que las corporaciones venden a empresas de publicidad o utilizan para predecir tus conductas. Cuidar tu huella digital es un acto de **soberanía personal**.

---

## 7.2. Leyes Argentinas: Habeas Data y Delitos Informáticos
En nuestro país contamos con leyes fundamentales para proteger a los ciudadanos en el entorno digital:

### 1. Ley 25.326 de Protección de Datos Personales (Habeas Data):
Garantiza el derecho de toda persona a:
* Conocer qué datos personales tienen registrados sobre ella en bases de datos públicas o privadas.
* Exigir que se rectifiquen datos erróneos.
* Exigir la supresión o borrado de datos falsos, discriminatorios o que vulneren su intimidad.

### 2. Ley 26.388 de Delitos Informáticos:
Modificó el Código Penal Argentino para sancionar conductas delictivas digitales:
* **Acceso ilegítimo a sistemas informáticos:** Hackear cuentas ajenas o vulnerar contraseñas sin autorización.
* **Daño informático:** Destruir, alterar o borrar archivos o propagar virus maliciosos.
* **Ciberestafas y Phishing:** Engañar a personas haciéndose pasar por un banco, Mercado Pago o Anses para robarles contraseñas y dinero.

---

## 7.3. Propiedad Intelectual: Copyright vs. Creative Commons
Cuando creás una obra (un dibujo, una canción, un video, un texto), la ley te reconoce como autor. Pero existen distintas formas de gestionar tus derechos:

```
            [COPYRIGHT]                                  [CREATIVE COMMONS]
      © Todos los derechos reservados              Licencias libres y modulares (CC)
   Nadie puede copiar ni compartir sin          El autor permite compartir y reutilizar
        pagar y pedir permiso legal.              su obra bajo ciertas condiciones claras.
```

### Las 4 Cláusulas de las Licencias Creative Commons (CC):
1. **BY (Reconocimiento / Atribución):** Obligatorio citar siempre el nombre del autor original.
2. **NC (No Comercial):** Se puede compartir y utilizar la obra, pero está prohibido obtener ganancias económicas con ella.
3. **ND (Sin Obras Derivadas):** La obra debe compartirse exactamente igual; no se puede recortar, mezclar ni editar.
4. **SA (Compartir Igual):** Si hacés una obra derivada, debés publicarla bajo esta misma licencia libre.

> [!NOTE]
> La licencia más utilizada en la escuela y en proyectos educativos comunitarios es **CC BY-NC-SA** (Atribución - No Comercial - Compartir Igual).

---

## 7.4. Inteligencia Artificial y Sociedad: ¿Cómo funciona y qué debates abre?
Los sistemas modernos de Inteligencia Artificial (como ChatGPT, Gemini o generadores de imágenes como Midjourney) pertenecen a la categoría de **Modelos de Lenguaje Masivos (LLM)** y redes neuronales profundas.

### ¿Cómo piensa una IA?
Una inteligencia artificial **no siente, no piensa ni tiene conciencia propia**. Funciona como un gigantesco sistema matemático de predicción de probabilidades estadísticas entrenado con miles de millones de textos e imágenes de Internet. Al recibir tu pregunta (*prompt*), calcula matemáticamente cuál es la palabra más probable que debería venir a continuación.

### Los Tres Grandes Dilemas Éticos de la IA:
1. **Alucinaciones:** Como la IA calcula probabilidades y no "busca la verdad", con frecuencia inventa datos falsos con total seguridad gramatical. Por eso es obligatorio verificar siempre sus respuestas.
2. **Sesgos Algorítmicos:** Si los textos con los que fue entrenada tienen prejuicios machistas, racistas o clasistas, la IA reproducirá y amplificará esos mismos prejuicios en sus respuestas.
3. **Impacto en el Trabajo y la Educación:** La IA puede ser una excelente asistente para corregir ortografía o resumir textos, pero jamás puede reemplazar tu propio pensamiento crítico, tu creatividad y tu voz humana única.

---

# GLOSARIO TERMINOLÓGICO DE LA A a la Z

* **ALU (Unidad Aritmético-Lógica):** Componente de la CPU que ejecuta operaciones matemáticas y comparaciones lógicas.
* **Ancho de Banda:** Capacidad máxima de datos que pueden transmitirse por un canal de comunicación en un tiempo determinado (medido en bits por segundo: Mbps / Gbps).
* **ASCII (American Standard Code for Information Interchange):** Código universal que asigna un número binario de 8 bits a cada letra y carácter del teclado.
* **Bit (Binary Digit):** Unidad mínima de información digital. Solo puede valer $0$ o $1$.
* **Byte:** Conjunto de 8 bits. Equivale a un carácter o letra en la memoria.
* **Cloud Computing (Computación en la Nube):** Servicio que permite almacenar archivos y ejecutar programas en servidores remotos distribuidos por Internet.
* **Conmutación de Paquetes:** Método de transmisión de Internet que divide un archivo grande en paquetes pequeños que viajan por rutas independientes.
* **Denotación:** Lectura objetiva y descriptiva de lo que aparece físicamente en una imagen.
* **Connotación:** Significados culturales, simbólicos y emocionales que sugiere una imagen.
* **DNS (Domain Name System):** Sistema que traduce nombres de sitios web legibles (como `google.com`) a direcciones IP numéricas.
* **Ethernet:** Estándar de conexión de redes de computadoras cableadas mediante conectores RJ-45.
* **Fake News:** Noticias falsas fabricadas intencionadamente para manipular la opinión pública o generar clics comerciales.
* **Grooming:** Delito penal cometido por un adulto que acosa a un menor a través de medios digitales con fines sexuales.
* **Habeas Data:** Acción judicial que protege el derecho ciudadano a conocer, corregir o borrar sus datos personales en bases de datos.
* **Hipertexto:** Texto digital no lineal que contiene hipervínculos hacia otros documentos.
* **HTML:** Lenguaje de marcado con el que se estructura el contenido de las páginas web.
* **Isologo:** Marca gráfica donde el texto y el símbolo forman una sola pieza indivisible.
* **Isotipo:** Símbolo gráfico de una marca que funciona sin necesidad de palabras ni texto.
* **LAN (Local Area Network):** Red de computadoras de alcance local (una casa, escuela u oficina).
* **Open Source / Código Abierto:** Software cuyo código fuente está publicado para que cualquiera pueda estudiarlo, modificarlo y compartirlo.
* **Phishing:** Técnica de estafa digital donde un atacante suplanta la identidad de una empresa para robar datos bancarios o contraseñas.
* **Protocolo:** Conjunto de reglas y normas que permiten a dos o más dispositivos comunicarse entre sí.
* **Prosumidor:** Usuario que simultáneamente consume y produce contenidos en la web.
* **RAM:** Memoria de acceso aleatorio, rápida y volátil, donde se ejecutan los programas activos.
* **Router:** Dispositivo de red que interconecta redes y dirige los paquetes de datos por el camino más eficiente.
* **Sexting:** Intercambio consentido de mensajes o imágenes con contenido íntimo entre personas.
* **TCP/IP:** Familia de protocolos fundamentales que gobierna la comunicación y el enrutamiento de datos en Internet.
* **Unplugged (Desenchufado):** Metodología didáctica para enseñar conceptos profundos de computación sin necesidad de pantallas ni electricidad.
* **URL:** Dirección web única y completa que localiza un documento en la red.
* **Von Neumann:** Arquitectura de computadoras que divide el sistema en CPU, Memoria y Periféricos de E/S.
* **WAN:** Red de computadoras de alcance geográfico amplio (global).
