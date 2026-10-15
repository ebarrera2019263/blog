// @ts-check
import { defineConfig } from 'astro/config';

// Para GitHub Pages: "site" es tu usuario y "base" el nombre
// exacto del repositorio.
export default defineConfig({
  site: 'https://ebarrera2019263.github.io',
  base: '/blog',
  trailingSlash: 'ignore',
});
