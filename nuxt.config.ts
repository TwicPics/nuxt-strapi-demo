// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/getting-started/installation#prerequisites
  // If you enabled ‘Take Over Mode’ or installed the ‘TypeScript Vue Plugin (Volar)’ extension
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/strapi',
    '@twicpics/components/nuxt3'
  ],
  runtimeConfig: {
    public: {
      strapi: {
        // Runtime config value is automatically replaced by matching environment variable
        // url: process.env.NUXT_PUBLIC_STRAPI_URL
      }
    }
  },
  twicpics: {
    domain: process.env.NUXT_PUBLIC_TWICPICS_DOMAIN
  }
})
