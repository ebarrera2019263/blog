import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.coerce.date(),
    // Clave de src/data/sitio.ts → autores
    autor: z.enum(['michelle', 'zuisly', 'karen', 'grupo']),
    etiquetas: z.array(z.string()),
    // Entrada fijada al inicio del blog
    fijada: z.boolean().default(false),
    portada: z.object({
      src: z.string(), // ruta dentro de public/, por ejemplo img/portadas/foto.jpg
      alt: z.string(),
      credito: z.string(),
      enlace: z.string().url(),
    }),
    // ID de un video de YouTube (lo que va después de "v=" en el link)
    video: z.string().optional(),
    // Pie del video: título y autor, para citarlo
    videoCredito: z.string().optional(),
    // Muestra el visor con las diapositivas de la presentación de clase
    diapositivas: z.boolean().default(false),
    comentarios: z
      .array(
        z.object({
          autor: z.enum(['michelle', 'zuisly', 'karen']),
          fecha: z.coerce.date(),
          texto: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { posts };
