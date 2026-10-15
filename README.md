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
| Universidad, curso, sección, catedrático, tema, integrantes | `src/data/sitio.ts` |
| Contenido de cada sección (Markdown) | `src/content/secciones/*.md` |
| Imágenes y fotos | `public/img/` → en Markdown: `![descripción](/blog/img/foto.jpg)` |
| Video de YouTube | `video:` en el encabezado del `.md` (solo el ID, lo que va después de `v=`) |
| Presentación (Google Slides o Canva) | `presentacion:` en el encabezado del `.md` (link "Insertar" o "embed") |
| Colores y tipografía | `src/styles/global.css` |

El orden del menú lo define `orden:` en cada `.md`.

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
