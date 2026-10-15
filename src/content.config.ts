import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const secciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/secciones' }),
  schema: z.object({
    titulo: z.string(),
    letra: z.string(), // Letra del requisito de la tarea (A, B, C...)
    descripcion: z.string(),
    orden: z.number(),
    // ID de un video de YouTube (lo que va después de "v=" en el link)
    video: z.string().optional(),
    // Link "publicar en la web" de Google Slides / Canva (opcional)
    presentacion: z.string().optional(),
  }),
});

export const collections = { secciones };
