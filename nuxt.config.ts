// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-svgo'],
  svgo: {
    autoImportPath: './assets/social-media',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'SH',
  },
})
