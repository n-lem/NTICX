# ESCUELA DE EDUCACIÓN SECUNDARIA N° 33 “16 DE SEPTIEMBRE”
**Materia:** NTICx (4° 1°) | **Docente:** Nahuel Lemos | **Ciclo Lectivo:** 2026  
**Estudiante:** __________________________________________________ | **Fecha:** ____/____/2026  

---

## FICHA DE ACTIVIDADES N° 11 | El Protocolo TCP/IP y el Viaje de un Mensaje en Internet
* **Módulo 2:** Alfabetización en Redes Digitales de Información | **Clase:** 11
* **Objetivo:** Comprender cómo viaja la información en Internet mediante la conmutación de paquetes, el rol del protocolo TCP/IP, las direcciones IP y el sistema de nombres de dominio (DNS).

---

### ACTIVIDAD DESENCHUFADA (En Carpeta)

#### 1. ¿Cómo Viaja un Mensaje en Internet? (La Carta Fragmentada)
Imaginá que querés enviar una foto de $10\text{ MB}$ por WhatsApp desde José C. Paz a un familiar en Mar del Plata. Internet **no** envía un bloque sólido de 10 MB entero por el cable, sino que lo divide en miles de pequeños **paquetes de datos**.

**Estructura de un Paquete de Datos:**
Cada paquete lleva una "etiqueta" o cabecera que contiene:
* `IP de Origen:` Quién lo manda (ej: `192.168.1.15`).
* `IP de Destino:` A quién va dirigido (ej: `181.45.22.90`).
* `Número de secuencia:` Paquete 1 de 500, Paquete 2 de 500, etc.
* `Carga útil (Payload):` El pedacito de foto codificado en binario.
* `Verificación de errores (Checksum):` Código para comprobar que no se rompió en el camino.

**El Rol del Protocolo TCP/IP:**
* **IP (Internet Protocol):** Se encarga de poner las direcciones y de que los enrutadores (*routers*) dirijan los paquetes por los caminos más rápidos de la red (incluso si toman rutas distintas).
* **TCP (Transmission Control Protocol):** Se encarga de partir el archivo al salir, verificar que hayan llegado todos los paquetes sin errores en destino y reordenarlos en el orden exacto. Si falta un paquete, pide que se reenvíe.

#### 2. Cuestionario de Aplicación
* **A.** ¿Qué ventajas tiene dividir un archivo en paquetes pequeños en lugar de transmitirlo como un bloque continuo? (Pensá en qué pasaría si hay una interferencia en el cable en el 99% de la descarga).  
  _________________________________________________________________________________________
* **B.** ¿Qué es una **Dirección IP** y por qué cada dispositivo conectado a una red necesita tener una asignada?  
  _________________________________________________________________________________________
* **C.** ¿Qué función cumple el servidor **DNS (Domain Name System)** cuando en el navegador escribís `www.abc.gob.ar` en lugar de una seguidilla de números como `186.33.221.14`?  
  _________________________________________________________________________________________

---

### EXPANSIÓN DIGITAL / LABORATORIO
* En una computadora con Windows o Huayra Linux, abrí la consola de comandos (**cmd** o **Terminal**).
* Escribí `ping www.google.com.ar` y presioná Enter:
  * Observá la dirección IP que te responde. Anotala: ____________________
  * Observá el tiempo de respuesta (latencia en milisegundos): ________ ms
* Escribí `traceroute www.google.com.ar` (o `tracert` en Windows) y observá todos los "saltos" (routers intermedios) que atraviesa tu señal hasta llegar al destino.
