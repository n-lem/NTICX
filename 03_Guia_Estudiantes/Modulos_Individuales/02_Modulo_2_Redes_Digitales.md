# MANUAL DEL ESTUDIANTE DE NTICx - EES N° 33 (José C. Paz)
**Docente:** Nahuel Lemos | **4° Año Secundaria** | **Ciclo Lectivo 2026**  

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
