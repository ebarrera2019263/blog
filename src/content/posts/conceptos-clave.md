---
titulo: "Conceptos clave: blockchain, claves, minería y consenso"
resumen: El vocabulario mínimo para entender las criptomonedas, de la cadena de bloques a los contratos inteligentes.
fecha: 2026-10-07
autor: michelle
etiquetas: [Fundamentos, Blockchain]
portada:
  src: img/portadas/conclusion.jpg
  alt: Una pila de monedas de bitcoin doradas y plateadas.
  credito: Traxer
  enlace: https://unsplash.com/photos/kM6QNrgo0YE
comentarios:
  - autor: karen
    fecha: 2026-10-07
    texto: La comparación de la clave privada con el PIN es muy clara. Si alguien la obtiene, tiene acceso completo a tus fondos.
  - autor: zuisly
    fecha: 2026-10-08
    texto: Me sirvió entender la diferencia entre prueba de trabajo y prueba de participación. Explica por qué Bitcoin consume tanta energía.
---

En la entrada anterior vimos qué son las criptomonedas. Ahora explico los conceptos que hacen posible que funcionen sin un banco central.

## Blockchain (cadena de bloques)

Es un **libro mayor compartido** que registra las transacciones en bloques ordenados, de modo que el historial es difícil de alterar (Sánchez, 2022). Cada bloque guarda una huella digital (*hash*) del bloque anterior: si alguien modifica un registro antiguo, la cadena deja de coincidir.

![Diagrama de tres bloques enlazados, cada uno con el hash del bloque anterior](/blog/img/blockchain.svg)
*Figura 1. Cada bloque guarda el hash del anterior. Elaboración propia con base en Sánchez (2022).*

## Descentralización

El sistema **no depende de ninguna entidad central**, como un banco, un gobierno o una empresa. La red la mantienen miles de computadoras (**nodos**) distribuidas por todo el mundo.

## Criptografía

Es la técnica matemática de cifrado que garantiza la seguridad del sistema. Protege las transacciones, asegura la privacidad y **evita que las monedas se dupliquen o falsifiquen**.

## Billetera digital (wallet)

Es el programa, la aplicación o el dispositivo físico donde se gestionan las claves criptográficas para **consultar saldos, enviar y recibir** criptomonedas (Bybit, 2026).

## Clave pública y clave privada

Son las "llaves" de seguridad de tu dinero:

| Clave | Funciona como | ¿Se comparte? |
| ----- | ------------- | ------------- |
| Pública | Tu número de cuenta bancaria: el código para que te envíen criptomonedas | Sí |
| Privada | Tu contraseña o PIN secreto: da acceso completo a tus fondos | Nunca |

*Tabla 1. Elaboración propia con base en Bybit (2026).*

## Minería y validación

Es el proceso mediante el cual los participantes de la red aportan poder de cómputo o recursos para **verificar transacciones y agregarlas a la blockchain**. Como recompensa, reciben criptomonedas nuevas.

## Mecanismos de consenso

Son las reglas con las que la red se pone de acuerdo sobre qué transacciones son válidas:

1. **Prueba de Trabajo (*Proof of Work*, PoW):** requiere resolver problemas matemáticos complejos. La usa **Bitcoin**.
2. **Prueba de Participación (*Proof of Stake*, PoS):** requiere congelar fondos como garantía para validar. La usa **Ethereum**.

## Contratos inteligentes (*smart contracts*)

Son **programas informáticos autoejecutables** que funcionan sobre la blockchain. Ejecutan automáticamente los términos de un acuerdo cuando se cumplen ciertas condiciones, sin necesidad de intermediarios como un notario o un abogado (Sánchez, 2022).
