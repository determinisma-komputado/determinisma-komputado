// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output — served from Cloudflare's global network via Workers static assets
  output: 'static',
});
