---
titulo: "¿Qué son las criptomonedas y cómo funciona la blockchain?"
resumen: Dinero sin banco de por medio. Explicamos el libro mayor público, la minería y las billeteras digitales.
fecha: 2026-10-07
autor: mishell
etiquetas: [Fundamentos, Blockchain]
video: pendiente
portada:
  src: img/portadas/blockchain.jpg
  alt: Una moneda de bitcoin sobre la placa base de una computadora.
  credito: Michael Förtsch
  enlace: https://unsplash.com/photos/AA5sf7WTv10
comentarios:
  - autor: zuis
    fecha: 2026-10-07
    texto: El diagrama de los bloques me ayudó a entender por qué se dice que la blockchain es "inmutable". Lo voy a usar en mi parte de la exposición.
  - autor: karen
    fecha: 2026-10-08
    texto: Lo de la clave privada conecta directo con los riesgos. Si la pierdes, nadie te devuelve el dinero.
---

Cuando pagamos con tarjeta, un banco verifica que tengamos fondos y registra la operación. Las criptomonedas proponen otra cosa: **pagar sin que ningún banco intervenga**. En esta entrada explico cómo es posible.

## Una definición

Una **criptomoneda** es un activo digital que usa criptografía para asegurar las transacciones y que funciona sobre una red descentralizada llamada **blockchain** (cadena de bloques). A diferencia del dinero tradicional, no la emite ni la respalda un banco central (FMI, 2021).

Su idea central es permitir pagos **entre pares** (*peer-to-peer*): una persona envía valor directamente a otra. En lugar de confiar en un banco, se confía en las reglas matemáticas del sistema y en la verificación de miles de computadoras (Nakamoto, 2008).

## Tres conceptos clave

### 1. El libro mayor público

La blockchain es un registro de todas las transacciones, agrupadas en **bloques** encadenados. Cada bloque guarda una huella digital (*hash*) del bloque anterior. Si alguien intenta alterar un registro antiguo, su huella cambia y deja de coincidir con la del bloque siguiente, por lo que tendría que rehacer toda la cadena.

![Diagrama de tres bloques enlazados, cada uno con el hash del bloque anterior](/blog/img/blockchain.svg)
*Figura 1. Cada bloque guarda el hash del anterior. Elaboración propia con base en Nakamoto (2008).*

### 2. La minería

Es el proceso por el cual los participantes de la red compiten resolviendo problemas computacionales para validar un nuevo bloque. Quien lo logra recibe criptomonedas nuevas como recompensa (Nakamoto, 2008). Este proceso es el que consume grandes cantidades de electricidad.

### 3. La billetera digital (wallet)

Es el programa que guarda las **claves privadas** del usuario. Quien tiene la clave privada controla los fondos. Si se pierde, no existe una "recuperación de contraseña": el dinero queda inaccesible para siempre.

> Sin banco de por medio, la seguridad de tu dinero depende solo de ti.
