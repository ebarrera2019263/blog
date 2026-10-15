// Datos generales del blog. Edita este archivo con la información real del grupo.

export const sitio = {
  nombre: 'Cripto en Contexto',
  lema: 'El dinero digital explicado desde Guatemala. Un blog del curso Economía Global.',
  universidad: 'Universidad Mariano Gálvez de Guatemala',
  facultad: 'Facultad de Ciencias Económicas',
  curso: 'Economía Global',
  seccion: '42026-1030-528-A',
  catedratico: 'Lic. Nombre del Catedrático',
  ciclo: 'Segundo semestre 2026',
};

export type ClaveAutor = 'mishell' | 'zuis' | 'karen' | 'grupo';

export const autores: Record<
  ClaveAutor,
  { nombre: string; iniciales: string; carne: string; tema: string; bio: string; tono: string }
> = {
  mishell: {
    nombre: 'Mishell',
    iniciales: 'MI',
    carne: 'Carné pendiente',
    tema: 'Fundamentos y tipos de criptomonedas',
    bio: 'Escribe sobre cómo funcionan las criptomonedas por dentro: blockchain, minería, wallets y los distintos tipos de monedas digitales.',
    tono: 'oklch(0.48 0.12 200)',
  },
  zuis: {
    nombre: 'Zuis',
    iniciales: 'ZU',
    carne: 'Carné pendiente',
    tema: 'El Salvador y la adopción global',
    bio: 'Analiza el experimento de El Salvador con Bitcoin y compara por qué algunos países adoptan las criptomonedas y otros las prohíben.',
    tono: 'oklch(0.45 0.13 250)',
  },
  karen: {
    nombre: 'Karen',
    iniciales: 'KA',
    carne: 'Carné pendiente',
    tema: 'Riesgos y contexto de Guatemala',
    bio: 'Investiga los riesgos financieros de las criptomonedas y la situación legal de los activos digitales en Guatemala.',
    tono: 'oklch(0.5 0.17 27)',
  },
  grupo: {
    nombre: 'Todo el grupo',
    iniciales: 'GR',
    carne: '',
    tema: 'Entradas en conjunto',
    bio: 'Entradas escritas en conjunto por Mishell, Zuis y Karen.',
    tono: 'oklch(0.35 0.03 260)',
  },
};

export const integrantes: ClaveAutor[] = ['mishell', 'zuis', 'karen'];
