# PLAN OPERATIVO DE CLASE - NTICx 4° AÑO
**Institución:** EES N° 33 “16 de septiembre” (José C. Paz) | **Profesor:** Nahuel Lemos  

---

## CLASE 11 | Protocolo TCP/IP y Enrutamiento: El Viaje de un Mensaje en Internet
* **Módulo 2:** Redes Digitales de Información (Enfoque Fundación Sadosky)
* **Objetivo:** Comprender los fundamentos de la conmutación de paquetes, las direcciones IP y el rol de los routers en la navegación web.
* **Secuencia Didáctica (120 min):**
  * **Inicio (20 min):** Disparador: *"Si querés enviar una carta de 100 páginas pero el buzón solo acepta sobres de 1 página, ¿cómo hacés para que el receptor pueda armar la carta entera sin perder ninguna hoja?"*.
  * **Desarrollo (70 min):**
    * **Vía A - Desenchufada (Unplugged - Simulación de Paquetes en el Aula):** Se divide un mensaje largo en 4 "paquetes" numerados. Cada paquete lleva: IP de Origen, IP de Destino, Número de Secuencia y Datos. Cuatro alumnos hacen de "Routers" en esquinas del aula. Los paquetes toman diferentes caminos según el tránsito del aula. Si un paquete se "pierde" en el camino, el receptor solicita reenvío (protocolo TCP). El emisor y receptor reconstruyen el mensaje final. Registro del esquema TCP/IP en la carpeta.
    * **Vía B - Digital:** Uso del comando `ping` y `traceroute` (`tracert` en Windows) en la terminal de la computadora para rastrear los saltos de red de un paquete hasta un servidor web.
  * **Cierre (30 min):** Institucionalización: IP pública vs. IP privada, DNS (el traductor de nombres a números) y confiabilidad del protocolo TCP.

---
