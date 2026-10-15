// Datos generales del blog. Edita este archivo con la información real del grupo.

export const sitio = {
  nombre: 'Monedas Digitales',
  lema: 'Desafíos para su implementación. Blog del Grupo 6 del curso Economía Global.',
  universidad: 'Universidad Mariano Gálvez de Guatemala',
  facultad: 'Facultad de Ciencias de la Administración',
  programa: 'Maestría en Dirección del Marketing',
  curso: 'Economía Global',
  seccion: 'A',
  grupo: 'Grupo 6',
  catedratica: 'Dra. Lorena Jiménez Anzueto',
  ciclo: 'Cuarto Ciclo 2026',
};

export type ClaveAutor = 'michelle' | 'zuisly' | 'karen' | 'grupo';

export const autores: Record<
  ClaveAutor,
  {
    nombre: string; // como aparece en las entradas
    completo: string; // nombre completo para la identificación
    iniciales: string;
    carne: string;
    tema: string;
    bio: string;
    tono: string;
  }
> = {
  michelle: {
    nombre: 'Michelle Calderón',
    completo: 'Cinthia Michelle Calderón Ochoa',
    iniciales: 'MC',
    carne: 'Carné pendiente',
    tema: 'Qué son, conceptos clave y tipos',
    bio: 'Explica cómo funcionan las criptomonedas por dentro: blockchain, claves, minería, mecanismos de consenso y los principales tipos de monedas digitales.',
    tono: 'oklch(0.48 0.12 200)',
  },
  zuisly: {
    nombre: 'Zuisly Flores',
    completo: 'Zuisly Marleny Flores Lemus',
    iniciales: 'ZF',
    carne: 'Carné pendiente',
    tema: 'El Salvador, CBDC y adopción',
    bio: 'Analiza el experimento de El Salvador con Bitcoin y el avance de las monedas digitales de bancos centrales (CBDC) en el mundo y en América Latina.',
    tono: 'oklch(0.45 0.13 250)',
  },
  karen: {
    nombre: 'Karen Altun',
    completo: 'Karen Noemí Altun de León',
    iniciales: 'KA',
    carne: 'Carné pendiente',
    tema: 'Riesgos y contexto de Guatemala',
    bio: 'Investiga los riesgos de las criptomonedas y la situación legal de los activos digitales en Guatemala.',
    tono: 'oklch(0.5 0.17 27)',
  },
  grupo: {
    nombre: 'Grupo 6',
    completo: 'Grupo 6',
    iniciales: 'G6',
    carne: '',
    tema: 'Entradas en conjunto',
    bio: 'Entradas escritas en conjunto por Michelle, Zuisly y Karen.',
    tono: 'oklch(0.35 0.03 260)',
  },
};

export const integrantes: ClaveAutor[] = ['michelle', 'zuisly', 'karen'];

// Diapositivas de la presentación de clase (public/img/presentacion).
export const diapositivas = [
  { src: 'd-01.jpg', alt: 'Portada: Monedas digitales, desafíos para su implementación. Grupo 6.' },
  { src: 'd-02.jpg', alt: '¿Qué son las criptomonedas? Definición general y funcionamiento básico.' },
  { src: 'd-03.jpg', alt: 'El proceso se divide en 4 pasos: solicitud, verificación, registro y liquidación.' },
  { src: 'd-04.jpg', alt: 'Conceptos clave: blockchain, descentralización, criptografía y billetera digital.' },
  { src: 'd-05.jpg', alt: 'Conceptos clave: clave pública y privada, minería y mecanismos de consenso.' },
  { src: 'd-06.jpg', alt: 'Conceptos clave: contratos inteligentes.' },
  { src: 'd-07.jpg', alt: 'Tipos de criptomonedas: Bitcoin como reserva de valor y Ethereum.' },
  { src: 'd-08.jpg', alt: 'Tipos de criptomonedas: monedas estables USDT y USDC.' },
  { src: 'd-09.jpg', alt: 'El caso de Nayib Bukele en El Salvador: Ley Bitcoin y Chivo Wallet.' },
  { src: 'd-10.jpg', alt: 'El caso de Nayib Bukele en El Salvador: uso real y remesas.' },
  { src: 'd-11.jpg', alt: 'Implementación de CBDC: beneficios.' },
  { src: 'd-12.jpg', alt: 'Implementación de CBDC: países y adopción en América Latina.' },
  { src: 'd-13.jpg', alt: 'Conclusión: Bitcoin, Ethereum y stablecoins en la economía digital.' },
  { src: 'd-16.jpg', alt: 'Referencias.' },
];
