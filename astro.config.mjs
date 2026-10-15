// @ts-check
import { defineConfig } from 'astro/config';

// La ruta base depende de dónde se publica:
// - Cloudflare Pages (por defecto): el sitio vive en la raíz "/".
// - GitHub Pages: el workflow define BASE_PATH=/blog y SITE con el usuario.
const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE ?? 'https://monedas-digitales-umg.pages.dev';

// Antepone la ruta base a los enlaces e imágenes absolutos escritos en Markdown
// ("/img/...", "/referencias"), para no tener que escribirla a mano.
function rehypeRutaBase() {
  const prefijo = base.replace(/\/$/, '');
  /** @param {any} nodo */
  const recorrer = (nodo) => {
    if (prefijo && nodo.type === 'element') {
      for (const attr of ['src', 'href']) {
        const valor = nodo.properties?.[attr];
        if (typeof valor === 'string' && valor.startsWith('/') && !valor.startsWith('//') && !valor.startsWith(`${prefijo}/`)) {
          nodo.properties[attr] = prefijo + valor;
        }
      }
    }
    nodo.children?.forEach(recorrer);
  };
  return recorrer;
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  markdown: {
    rehypePlugins: [rehypeRutaBase],
  },
});
