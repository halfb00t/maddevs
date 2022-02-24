import { getStoriesPaths } from 'slice-machine-ui/helpers/storybook'
import fs from 'fs'
import getRoutes, { getSitemapRoutes, CUSTOM_PAGE_ROUTES } from './utils/getRoutes'
import getRobots from './utils/getRobots'

require('dotenv').config()

module.exports = {
  buildModule: ['nuxt-compress'],
  srcDir: 'client/',
  target: process.env.NUXT_TARGET || 'server',
  /*
   ** Server settings
   */
  server: {
    https: {
      key: fs.readFileSync('../localhost-key.pem'),
      cert: fs.readFileSync('../localhost.pem'),
    },
    host: process.env.HOST || '0', // https://debbie.codes/blog/nuxt-configure-server-to-see-site-on-mobile/
    port: process.env.PORT || 3000,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Mad Devs: Software & Mobile App Development Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: '1cce4e9bf6ebcdff' },
      { name: 'facebook-domain-verification', content: 'gjmbb6g9th5cxl6awr0dx598t7ruz3' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'sitemap', type: 'application/xml', href: 'https://maddevs.io/sitemap.xml' },
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver', async: true, body: true },
      { src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`, async: true, body: true },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#ec1c24',
    height: '2px',
  },
  components: true,
  /*
   ** Component will be ignored in building
   */
  generate: {
    routes: getRoutes,
    fallback: '404.html',
    // TODO enable crawler after removing old levels for urls
    crawler: false,
  },
  css: [
    {
      src: '~/assets/styles/index.scss',
      lang: 'scss',
    },
    {
      src: 'simplebar/dist/simplebar.min.css',
    },
  ],
  /*
   ** Server middlewares
   */
  serverMiddleware: [{ path: '/', handler: '~/../server/index.js' }],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    vendor: ['axios'],
    transpile: ['swiper', 'dom7', 'vue-slicezone', 'nuxt-sm', 'vue-lazy-hydration'],
    followSymlinks: true,
    cache: true,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    optimization: {
      minimize: true,
    },
  },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/vue-social-sharing.js',
    '~/plugins/get-media-from-s3.js',
    '~/plugins/header-handler.js',
    '~/plugins/feature-flags.js',
    '~/plugins/google-tag-manager-debug.js',
    { src: '~/plugins/sentry.js', mode: 'client' },
    '~/plugins/mad-parallax.js',
  ],
  /*
  ** Nuxt Modules
  */
  modules: [
    ['~/modules/js-optimizer.js', { setOutputFilenames: true }], // need to async loaded javascript chunks
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/prismic',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    '@nuxtjs/style-resources',
    ['nuxt-lazy-load', {
      defaultImage: '/DoNotRemove/nuxt-lazy-load-fallback.svg',
      directiveOnly: true,
    },
    ],
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        langDir: '~/locales/',
        locales: [
          { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
          { code: 'en', iso: 'en-EN', file: 'en.json' },
        ],
        detectBrowserLanguage: false,
        parsePages: false,
      },
    ],
    ['@nuxtjs/prismic', {
      endpoint: process.env.NODE_PRISMIC_API,
    }],
    ['nuxt-sm'],
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],
  sitemap: {
    hostname: 'https://maddevs.io',
    gzip: false,
    path: '/sitemap.xml',
    exclude: ['/**'],
    routes: async () => {
      const routes = await getSitemapRoutes()
      return routes
    },
  },
  axios: {
    baseURL: '/',
  },
  robots: {
    ...getRobots(process.env.FF_ENVIRONMENT),
  },
  prismic: {
    endpoint: process.env.NODE_PRISMIC_API,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    preview: false,
  },
  gtm: {
    enabled: true,
    id: process.env.NODE_GOOGLE_TAG_MANAGER_ID,
    // crossOrigin: true,
    scriptDefer: true,
    pageTracking: true,
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.NODE_GOOGLE_TAG_MANAGER_ID,
    },
  },
  storybook: {
    stories: [...getStoriesPaths(), '~/prismicSlices/**/*.stories.js', '~/assets/styles/storybook.css'],
  },
  ignore: ['**/*.stories.js'],
  env: {
    environment: process.env.NODE_ENV,
    s3PublicUrl: process.env.NODE_S3_PUBLIC_URL,
    domain: process.env.NODE_DOMAIN,
    reserveVacancyId: process.env.NODE_HUNTFLOW_RESERVE_VACANCY_ID,
    emailHR: process.env.NODE_EMAIL_HR,
    emailCV: process.env.NODE_EMAIL_CV,
    emailContact: process.env.NODE_EMAIL_CONTACT,
    emailMarketing: process.env.NODE_EMAIL_MARKETING,
    sentryDsnFront: process.env.NODE_SENTRY_DSN_FRONT,
    ffEnvironment: process.env.FF_ENVIRONMENT,
    prismicApi: process.env.NODE_PRISMIC_API,
    ipInfoToken: process.env.NODE_IP_INFO_TOKEN,
    reCaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
  },
  router: {
    trailingSlash: true,
    prefetchLinks: false,
    extendRoutes: routes => {
      routes.push(...CUSTOM_PAGE_ROUTES)
      return routes
    },
  },
  styleResources: {
    scss: [
      '~/assets/styles/_vars.scss',
      '~/assets/styles/_mixins.scss',
    ],
  },
}
