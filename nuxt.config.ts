// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/icon.png', // or '/favicon.png' for a PNG favicon
        },
      ],
    },
  },
  ssr: false,

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/google-maps.js'],
});
