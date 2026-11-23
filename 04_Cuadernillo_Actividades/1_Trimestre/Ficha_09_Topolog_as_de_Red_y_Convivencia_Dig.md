# ESCUELA DE EDUCACIÓN SECUNDARIA N° 33 “16 DE SEPTIEMBRE”
**Materia:** NTICx (4° 1°) | **Docente:** Nahuel Lemos | **Ciclo Lectivo:** 2026  
**Estudiante:** __________________________________________________ | **Fecha:** ____/____/2026  

---

## FICHA DE ACTIVIDADES N° 9 | Topologías de Red y Pautas de Convivencia Digital
* **Módulo 2:** Alfabetización en Redes Digitales de Información | **Clase:** 9
* **Objetivo:** Analizar las topologías físicas de red (Bus, Anillo, Estrella, Malla) comparando ventajas y tolerancias a fallos, y reflexionar sobre las normas de convivencia en redes compartidas.

---

### ACTIVIDAD DESENCHUFADA (En Carpeta)

#### 1. Esquema Gráfico de Topologías
Dibujá y completá el funcionamiento de cada topología de red:

```
TOPOLOGÍA EN BUS           TOPOLOGÍA EN ESTRELLA          TOPOLOGÍA EN ANILLO
[PC]  [PC]  [PC]                 [PC]    [PC]                  [PC] ---> [PC]
 |     |     |                     \      /                     ^         |
============== (Cable central)      [SWITCH]                    |         v
 |     |     |                     /      \                    [PC] <--- [PC]
[PC]  [PC]  [PC]                 [PC]    [PC]
```

#### 2. Análisis de Fallos y Resiliencia
Analizá qué ocurre en cada caso ante un problema técnico:
* **Caso 1 (En red en Bus):** Si un estudiante tropieza con el cable central (*Backbone*) y lo corta a la mitad:  
  * *¿Qué pasa con la comunicación de toda la red?*  
    _________________________________________________________________________________________
* **Caso 2 (En red en Estrella):** Si se rompe el cable de una sola computadora conectada al switch central:  
  * *¿El resto de las computadoras del aula pueden seguir navegando y compartiendo archivos? Justificá.*  
    _________________________________________________________________________________________
* **Caso 3 (En red en Malla - como Internet):** Cada nodo está conectado con varios otros nodos simultáneamente.  
  * *Si se corta una autopista de datos submarina, ¿por qué Internet no se cae por completo en todo el país?*  
    _________________________________________________________________________________________

#### 3. Convivencia en Redes: El Ancho de Banda es un Recurso Común
* En la escuela, el ancho de banda del WiFi es compartido por cientos de celulares y netbooks.
* Si un estudiante se pone a descargar un juego pesado de 15 GB o a reproducir videos en 4K durante la clase:
  * ¿Cómo impacta esa acción individual en los compañeros que necesitan abrir un documento educativo?
  * Proponé 2 normas comunitarias para cuidar la red escolar entre todos.  
    1. ______________________________________________________________________________________  
    2. ______________________________________________________________________________________

---

### EXPANSIÓN DIGITAL / LABORATORIO
* Diseñá en el pizarrón o con la herramienta digital **LibreOffice Draw** el plano de la red del laboratorio de informática de la EES N° 33, indicando la ubicación del router, el switch y las computadoras en topología estrella.
