# MANUAL DEL ESTUDIANTE DE NTICx - EES N° 33 (José C. Paz)
**Docente:** Nahuel Lemos | **4° Año Secundaria** | **Ciclo Lectivo 2026**  

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
