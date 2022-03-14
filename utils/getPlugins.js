const DEV_PLUGINS = [
  '~/plugins/vuelidate.js',
  '~/plugins/vue-social-sharing.js',
  '~/plugins/get-media-from-s3.js',
  '~/plugins/header-handler.js',
  '~/plugins/feature-flags.js',
]

const THIRD_PARTY_PLUGINS = [
  '~/plugins/google-tag-manager-debug.js',
  { src: '~/plugins/sentry.js', mode: 'client' },
]

const getPlugins = isProd => (isProd ? [...DEV_PLUGINS, ...THIRD_PARTY_PLUGINS] : DEV_PLUGINS)

export default getPlugins
