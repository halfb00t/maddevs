import dotenv from 'dotenv'
import Vue from 'vue'
import { Integrations } from '@sentry/tracing'
import getRoutes, { getSitemapRoutes, CUSTOM_PAGE_ROUTES } from './utils/getRoutes'
import getRobots from './utils/getRobots'
import getPlugins from './utils/getPlugins'

dotenv.config()

export default () => ({
  render: {
    resourceHints: false,
    asyncScripts: true,
  },
  buildModule: ['nuxt-compress'],
  srcDir: 'client/',
  target: process.env.NUXT_TARGET || 'server',
  /*
   ** Server settings
   */
  server: {
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
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver', defer: true, body: true },
      { src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`, defer: true, body: true },
      {
        src: '//js-na1.hs-scripts.com/22003500.js',
        defer: true,
        body: true,
        async: true,
        id: 'hs-script-loader',
        type: 'text/javascript',
      },
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
    exclude: [/^((?!\/ru\/careers).)*$/],
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
  middleware: 'redirectToHomePage',
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
    transpile: ['dom7', 'vue-slicezone', 'nuxt-sm', 'vue-lazy-hydration'],
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
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
    optimization: {
      minimize: process.env.FF_ENVIRONMENT !== 'development',
      splitChunks: {
        chunks: 'all',
      },
    },
    filenames: {
      app: ({ isDev, isModern }) => (isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`),
      chunk: ({ isDev, isModern }) => (isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash:7].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]'),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]'),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'),
    },
  },
  /*
  ** Plugins
  */
  plugins: getPlugins(process.env.FF_ENVIRONMENT === 'production'),
  /*
  ** Nuxt Modules
  */
  modules: [
    ['~/modules/js-optimizer.js', { setOutputFilenames: true }], // need to async loaded javascript chunks
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/prismic',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    '@nuxtjs/sentry',
    ['nuxt-lazy-load', {
      defaultImage: '/DoNotRemove/nuxt-lazy-load-fallback.svg',
      directiveOnly: true,
    },
    ],
    ['@nuxtjs/i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        langDir: '~/locales/',
        locales: [
          { code: 'en', iso: 'en-EN', file: 'en.json' },
        ],
        detectBrowserLanguage: false,
        parsePages: false,
      },
    ],
    ['@nuxtjs/prismic', { endpoint: process.env.NODE_PRISMIC_API }],
    ['nuxt-sm'],
    ['nuxt-compress',
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
  sentry: {
    Vue,
    lazy: true,
    disabled: process.env.FF_ENVIRONMENT !== 'production',
    dsn: process.env.NODE_SENTRY_DSN_FRONT,
    tracesSampleRate: 0.02,
    vueOptions: {
      tracing: true,
      tracingOptions: {
        hooks: ['mount', 'update'],
        timeout: 2000,
        trackComponents: true,
      },
    },
    browserOptions: {
      integrations: [new Integrations.BrowserTracing({
        tracingOrigins: ['maddevs.io'],
      })],
    },
    publishRelease: true,
    config: {
      ignoreErrors: [
        'ResizeObserver loop limit exceeded', // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded#comment86691361_49384120
        'ResizeObserver loop completed with undelivered notifications.', // ^
        'Non-Error promise rejection captured', // https://forum.sentry.io/t/unhandledrejection-non-error-promise-rejection-captured-with-value/14062/14
        'Non-Error exception captured', // ^
        // Prismic
        'Failed to init Prismic API, preventing app fatal error.',
        'TypeError: Network request failed.',
        'ChunkLoadError: Loading chunk',
        // Facebook borked
        'fb_xd_fragment',
        // [Safari] Error playing video with muted
        'AbortError: The operation was aborted.',
        // [Safari] Error PiP when scrolling page
        'The request is not triggered by a user activation.',
        // Video error
        'AbortError: The play() request was interrupted by a call to pause().',
      ],
      denyUrls: [
        // Prismic
        /SuperPuperTest\.cdn\.prismic\.io/i,
        // Facebook flakiness
        /graph\.facebook\.com/i,
        // Facebook blocked
        /connect\.facebook\.net\/en_US\/all\.js/i,
        // Google Tag Manager
        /(https?:\/\/www\.googletagmanager\.com)/i,
        // Google flakiness
        /\/(gtm|ga|analytics)\.js/i,
        /(https?:\/\/www\.google-analytics\.com)/,
        // Chrome extensions
        /extensions\//i,
        /^chrome:\/\//i,
        // Firefox extensions
        /^resource:\/\//i,
        // Other plugins
        /webappstoolbarba\.texthelp\.com\//i,
        /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
      ],
    },
  },
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
    analyticsUniversalKey: process.env.NODE_ANALYTICS_UNIVERSAL_KEY,
    analytics4Key: process.env.NODE_GA4_KEY,
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
})
