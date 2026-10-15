import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

// Más recientes primero.
export async function obtenerPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

export function minutosDeLectura(post: Post): number {
  const palabras = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}

const formato = new Intl.DateTimeFormat('es-GT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function fechaLarga(fecha: Date): string {
  return formato.format(fecha);
}

export function slugEtiqueta(etiqueta: string): string {
  return etiqueta
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function contarEtiquetas(posts: Post[]): { nombre: string; slug: string; total: number }[] {
  const conteo = new Map<string, number>();
  for (const p of posts) for (const e of p.data.etiquetas) conteo.set(e, (conteo.get(e) ?? 0) + 1);
  return [...conteo]
    .map(([nombre, total]) => ({ nombre, slug: slugEtiqueta(nombre), total }))
    .sort((a, b) => b.total - a.total || a.nombre.localeCompare(b.nombre, 'es'));
}
