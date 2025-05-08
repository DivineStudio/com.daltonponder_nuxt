// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-04',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'Welcome | Dalton Ponder', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        }
      }
    ],
  ],
  googleFonts: {
    families: {
      'Roboto': true,
      'Roboto Slab': true,
    }
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    strategy: 'prefix_except_default',
    baseUrl: 'https://daltonponder.com',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'es', language: 'es-US' }
    ],
  },
})
