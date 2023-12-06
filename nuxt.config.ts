const isProduction = process.env.NODE_ENV === 'production';
const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // app: {
  //   baseURL: 'http://localhost:3000',
  // },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || process.env.STRAPI_URL,
    },
  },

  css: [
    '@/assets/scss/main.scss',
  ],
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  plugins: [
    '@/plugins/noClickOutline.js',
  ],
  app: {
    head: {
        title: 'Сайт музыканта Fun Oeuvre Maker',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1' },
          { name: 'format-detection', content: 'telephone=yes' },
          { hid: 'description', name: 'description', content: '' },
  
          { name: 'theme-color', content: '#131313' },
          {
              property: 'og:title',
              content: 'Сайт музыканта Fun Oeuvre Maker',
          },
          {
              property: 'og:description',
              content: '',
          },
          { property: 'og:image', content: '' },
        ],
        link: [
          { rel: 'shortcut icon', type: 'image/png', href: '/img/favicon.png' },
          { rel: 'prefetch', href: './static/fonts/cormorant-garamond-v16-latin_cyrillic-600.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
          { rel: 'prefetch', href: './static/fonts/cormorant-garamond-v16-latin_cyrillic-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
          { rel: 'prefetch', href: './static/fonts/roboto-slab-v24-latin_cyrillic-500.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
          { rel: 'prefetch', href: './static/fonts/roboto-slab-v24-latin_cyrillic-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
          { rel: 'prefetch', href: './static/fonts/rubik-glitch-v2-latin_cyrillic-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
          { rel: 'prefetch', href: './static/fonts/ubuntu-v20-latin_cyrillic-500.woff2', as: 'font', type: 'font/woff2', crossorigin: ''  },
          { rel: 'prefetch', href: './static/fonts/ubuntu-v20-latin_cyrillic-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
          { rel: 'prefetch', href: './static/img/bg-summer-forest-desktop.webp', as: 'image', crossorigin: '' }
        ],
    },
  }
})
