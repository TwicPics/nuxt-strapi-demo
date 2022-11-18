// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/getting-started/installation#prerequisites
  // If you enabled ‘Take Over Mode’ or installed the ‘TypeScript Vue Plugin (Volar)’ extension
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/strapi'
  ],
  runtimeConfig: {
    public: {
      strapi: {
        // NUXT_PUBLIC_STRAPI_URL is auto-injected in url
      }
    }
  }
})
