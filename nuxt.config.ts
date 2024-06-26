// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/scss/style.scss"],
  modules: ["@vee-validate/nuxt"],
  veeValidate: {
    autoImports: true,
  },
  app: {
    baseURL: "/fluxo/",
  },
});
