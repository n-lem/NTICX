# ESCUELA DE EDUCACIÓN SECUNDARIA N° 33 “16 DE SEPTIEMBRE”
**Materia:** NTICx (4° 1°) | **Docente:** Nahuel Lemos | **Ciclo Lectivo:** 2026  
**Estudiante:** __________________________________________________ | **Fecha:** ____/____/2026  

---

## FICHA DE ACTIVIDADES N° 11 | Protocolo TCP/IP y el Viaje de un Mensaje
* **Módulo 2:** Redes Digitales de Información | **Clase:** 11
* **Objetivo:** Comprender la conmutación de paquetes, las direcciones IP y el enrutamiento de datos en Internet.

#### ACTIVIDAD DESENCHUFADA (En Carpeta)
1. **La Anatomía de un Paquete de Datos:**
   * Dibujá un paquete de datos y completá sus 4 campos obligatorios:  
     `[ IP de Origen: ____________ ] [ IP de Destino: ____________ ] [ N° de Paquete: ___ de ___ ] [ Carga útil (Datos): ____________ ]`
2. **Crónica del Viaje de un Mensaje:**
   * Relatá con tus palabras el camino que hizo tu "paquete" durante la simulación de routers en el aula:
     * ¿Qué hacía el Router cuando recibía el paquete?
     * ¿Por qué todos los paquetes de un mismo mensaje no viajaron por el mismo camino?
     * ¿Qué hizo la computadora receptora cuando recibió todos los paquetes desordenados?
3. **Dirección IP vs. DNS:**
   * ¿Qué es una dirección IP?
   * ¿Para qué sirve el sistema DNS (Domain Name System)? ¿Te imaginas tener que memorizar números como `142.250.190.46` en lugar de escribir `google.com`?

#### EXPANSIÓN DIGITAL
* En la consola de comandos de la máquina, ejecutar: `ping abc.gob.ar` y `traceroute google.com` (o `tracert google.com` en Windows). Anotar cuántos "saltos" (routers intermedios) dio el paquete antes de llegar al servidor de destino.
* **Cierre Reflexivo:** ¿Por qué Internet fue diseñada para que los paquetes viajen por caminos independientes? (Pista: La Guerra Fría y la resistencia a cortes de comunicación).

---
