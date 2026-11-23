# ESCUELA DE EDUCACIÓN SECUNDARIA N° 33 “16 DE SEPTIEMBRE”
**Materia:** NTICx (4° 1°) | **Docente:** Nahuel Lemos | **Ciclo Lectivo:** 2026  
**Estudiante:** __________________________________________________ | **Fecha:** ____/____/2026  

---

## FICHA DE ACTIVIDADES N° 4 | Arquitectura de la Computadora: El Modelo Von Neumann
* **Módulo 1:** Alfabetización Informática-Computacional | **Clase:** 4
* **Objetivo:** Comprender la estructura funcional interna de una computadora (CPU: UC y ALU; Memorias RAM y ROM; Buses y Periféricos) y el ciclo de procesamiento de instrucciones.

---

### ACTIVIDAD DESENCHUFADA (En Carpeta)

#### 1. Diagrama de Bloques de Von Neumann
Completá el diagrama conceptual ubicando las flechas de flujo de datos y control entre los siguientes componentes: **Unidad de Control (UC)**, **Unidad Aritmético-Lógica (ALU)**, **Memoria Principal (RAM)**, **Dispositivos de Entrada**, **Dispositivos de Salida** y **Almacenamiento Secundario**.

```
[ Dispositivos de Entrada ] ---> [                      ] ---> [ Dispositivos de Salida ]
                                 [  C P U  (Procesador) ]
                                 [   - UC: __________   ]
                                 [   - ALU: _________   ]
                                        ^      |
                                        |      v
                                 [  MEMORIA PRINCIPAL   ]
                                 [      ( RAM )         ]
                                        ^      |
                                        |      v
                                 [ ALMACENAMIENTO SEC.  ]
                                 [  (Disco / SSD / USB) ]
```

#### 2. Relación de Términos y Funciones
Uní con flechas cada componente con su tarea específica:

| Componente | | Tarea Funcional |
| :--- | :---: | :--- |
| **A. Unidad de Control (UC)** | ● | ● Realiza cálculos matemáticos (sumas) y comparaciones lógicas. |
| **B. Unidad Aritmético-Lógica (ALU)** | ● | ● Memoria no volátil que contiene las instrucciones de fábrica para iniciar el equipo (BIOS/UEFI). |
| **C. Memoria RAM** | ● | ● Coordina y dirige el tráfico de datos, interpretando las instrucciones del programa. |
| **D. Memoria ROM** | ● | ● Memoria de lectura y escritura ultrarrápida donde residen los programas en ejecución; se borra al apagarse. |
| **E. Buses de Datos y Control** | ● | ● Autopistas de pistas electrónicas por donde circulan los impulsos eléctricos entre componentes. |

#### 3. El Ciclo de Instrucción (La Computadora Humana)
* En la dinámica de clase se simuló el cálculo: `Resultado = 5 + 3`.
* Describí brevemente qué hizo cada rol en ese proceso:
  * ¿Qué buscó la **Unidad de Control** en la Memoria RAM?  
    _________________________________________________________________________________________
  * ¿Qué operación ejecutó la **ALU**?  
    _________________________________________________________________________________________
  * ¿Dónde se escribió el resultado final?  
    _________________________________________________________________________________________

---

### EXPANSIÓN DIGITAL / LABORATORIO
* Inspección de una placa madre (*Motherboard*) en desuso o mediante un simulador digital local.
* Identificá visualmente el zócalo del microprocesador (*Socket*), las ranuras para módulos de memoria RAM (*Slots DIMM*), los conectores SATA/M.2 de disco y los puertos de entrada/salida traseros.
