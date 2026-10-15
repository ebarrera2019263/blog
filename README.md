# Blog UMG · Economía Global

Blog académico hecho con [Astro](https://astro.build) y publicado gratis en GitHub Pages.

## Correr en local

```sh
npm install
npm run dev        # http://localhost:4321/blog/
```

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre del blog, universidad, curso, sección, catedrático | `src/data/sitio.ts` → `sitio` |
| Integrantes (nombre, carné, tema, biografía) | `src/data/sitio.ts` → `autores` |
| Entradas del blog (una por archivo, en Markdown) | `src/content/posts/*.md` |
| Comentarios del grupo de cada entrada | `comentarios:` en el encabezado de cada `.md` |
| Fotos de portada | `public/img/portadas/` y `portada:` en el encabezado del `.md` |
| Video de YouTube / presentación de Google Slides | `video:` y `presentacion:` en el encabezado del `.md` |
| Referencias APA | `src/data/referencias.md` |
| Colores y tipografía | `src/styles/global.css` |

Para agregar una entrada nueva, copia un `.md` de `src/content/posts/`, cambia el nombre del archivo (será la URL) y edita el encabezado. Las entradas se ordenan por `fecha:`, de la más reciente a la más antigua, y la que tiene `fijada: true` aparece primero.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado `blog`. Si usas otro nombre, cámbialo también en `base` de `astro.config.mjs` y en las rutas de imágenes.
2. En `astro.config.mjs`, cambia `ebarrera2019263` por tu usuario de GitHub.
3. Sube el código:
   ```sh
   git init && git add . && git commit -m "Blog inicial"
   git branch -M main
   git remote add origin https://github.com/ebarrera2019263/blog.git
   git push -u origin main
   ```
4. En GitHub, ve a **Settings → Pages → Source** y elige **GitHub Actions**.
5. Cada `push` a `main` publica el sitio en `https://ebarrera2019263.github.io/blog/`.
