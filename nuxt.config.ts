import tailwindcss from "@tailwindcss/vite";

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
      ],
      script: [
        {
          textContent: `(function() {
              const savedTheme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', savedTheme);
            })();`,
          tagPosition: 'head',
        },
        {
          src: 'https://www.google.com/recaptcha/api.js',
          tagPosition: 'head',
        },
        {
          textContent: `function onSubmit() {
            document.getElementById("myForm").submit()
          }`,
          tagPosition: 'head',
        },
      ],
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  modules: ['@nuxtjs/i18n', '@nuxtjs/google-fonts', [
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
  ], '@nuxt/icon'],
  googleFonts: {
    families: {
      'Roboto': true,
      'Roboto Slab': true,
    }
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { name: "English", code: 'en', language: 'en-US', file: 'en.json' },
      { name: "Spanish", code: 'es', language: 'es-US', file: 'es.json' }
    ],
  },
})