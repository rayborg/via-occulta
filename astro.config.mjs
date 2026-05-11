import { defineConfig } from 'astro/config';

const useCustomDomain = process.env.VIA_OCCULTA_CUSTOM_DOMAIN === 'true';

export default defineConfig({
  site: useCustomDomain ? 'https://www.viaocculta.net' : 'https://rayborg.github.io',
  base: useCustomDomain ? '/' : '/via-occulta',
  output: 'static'
});
