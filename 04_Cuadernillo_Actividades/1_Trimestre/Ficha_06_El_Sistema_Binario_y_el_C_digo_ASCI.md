# ESCUELA DE EDUCACIÓN SECUNDARIA N° 33 “16 DE SEPTIEMBRE”
**Materia:** NTICx (4° 1°) | **Docente:** Nahuel Lemos | **Ciclo Lectivo:** 2026  
**Estudiante:** __________________________________________________ | **Fecha:** ____/____/2026  

---

## FICHA DE ACTIVIDADES N° 6 | El Sistema Binario y la Codificación de Caracteres (ASCII)
* **Módulo 1:** Alfabetización Informática-Computacional | **Clase:** 6
* **Objetivo:** Comprender por qué las computadoras utilizan el sistema binario ($0$ y $1$), convertir números decimales a binario mediante tarjetas desenchufadas y decodificar caracteres según la tabla ASCII internacional.

---

### ACTIVIDAD DESENCHUFADA (En Carpeta)

#### 1. El Juego de los Puntos (CS Unplugged)
El sistema binario se basa en potencias de 2. Cada bit representa una tarjeta que puede estar **boca arriba (1 = prendido)** o **boca abajo (0 = apagado)**:

| Tarjeta 5 ($2^4$) | Tarjeta 4 ($2^3$) | Tarjeta 3 ($2^2$) | Tarjeta 2 ($2^1$) | Tarjeta 1 ($2^0$) |
| :---: | :---: | :---: | :---: | :---: |
| **16 puntos** | **8 puntos** | **4 puntos** | **2 puntos** | **1 punto** |

* Para representar el número **9**: Prendemos la tarjeta de 8 y la de 1 ($8 + 1 = 9$). Código: `0 1 0 0 1`.
* Escribí el código binario de 5 bits para los siguientes números:
  * Número **5:** Tarjetas prendidas: (___ + ___) $\longrightarrow$ Código binario: `_ _ _ _ _`
  * Número **13:** Tarjetas prendidas: (___ + ___ + ___) $\longrightarrow$ Código binario: `_ _ _ _ _`
  * Número **22:** Tarjetas prendidas: (___ + ___ + ___) $\longrightarrow$ Código binario: `_ _ _ _ _`
  * Número **31:** Tarjetas prendidas: (todas prendidas) $\longrightarrow$ Código binario: `_ _ _ _ _`

#### 2. La Tabla ASCII y la Transmisión de Palabras
En computación, a cada tecla del teclado le corresponde un número decimal estándar (ASCII) que la máquina procesa en un byte (8 bits).

**Fragmento de la tabla ASCII (Mayúsculas):**
* `A = 65` | `B = 66` | `C = 67` | `D = 68` | `E = 69` | `F = 70` | `G = 71` | `H = 72` | `I = 73`
* `L = 76` | `M = 77` | `N = 78` | `O = 79` | `P = 80` | `R = 82` | `S = 83` | `T = 84` | `U = 85`

* **A. El Caso de la palabra "CASA":**
  * `C = 67` $\longrightarrow$ En binario de 8 bits: `0 1 0 0 0 0 1 1` ($64 + 2 + 1$)
  * `A = 65` $\longrightarrow$ En binario de 8 bits: `0 1 0 0 0 0 0 1` ($64 + 1$)
  * `S = 83` $\longrightarrow$ En binario de 8 bits: `0 1 0 1 0 0 1 1` ($64 + 16 + 2 + 1$)
  * `A = 65` $\longrightarrow$ En binario de 8 bits: `0 1 0 0 0 0 0 1` ($64 + 1$)
  * *¿Cuántos bits en total ocupó transmitir la palabra "CASA"?*  
    $4 \text{ letras} \times 8 \text{ bits} = $ ________ bits (es decir, ________ Bytes).

* **B. Desafío Individual:** Codificá en código ASCII y luego en binario tu propio **primer nombre** (o las primeras 4 letras si es largo):
  * Letra 1: ____ $\longrightarrow$ Valor ASCII: ____ $\longrightarrow$ Binario (8 bits): `_ _ _ _ _ _ _ _`
  * Letra 2: ____ $\longrightarrow$ Valor ASCII: ____ $\longrightarrow$ Binario (8 bits): `_ _ _ _ _ _ _ _`
  * Letra 3: ____ $\longrightarrow$ Valor ASCII: ____ $\longrightarrow$ Binario (8 bits): `_ _ _ _ _ _ _ _`
  * Letra 4: ____ $\longrightarrow$ Valor ASCII: ____ $\longrightarrow$ Binario (8 bits): `_ _ _ _ _ _ _ _`

#### 3. Pregunta Conceptual
* ¿Por qué una computadora —por más potente y avanzada que sea— internamente solo puede entender ceros y unos ($0$ y $1$) y no letras o palabras en español directamente? (Pensá en los circuitos electrónicos y la presencia/ausencia de corriente eléctrica).  
  _________________________________________________________________________________________

---

### EXPANSIÓN DIGITAL / LABORATORIO
* En la computadora, abrí el Bloc de Notas (*Notepad* o *Mousepad* en Linux).
* Mantené presionada la tecla `ALT` en el teclado numérico y escribí el número `64`. Al soltar, aparecerá el símbolo `@` (Arroba).
* Probá combinaciones (`ALT + 164` para la `ñ`, `ALT + 168` para `¿`). Explicá por qué este atajo demuestra que detrás de cada carácter visible hay un código numérico binario.
