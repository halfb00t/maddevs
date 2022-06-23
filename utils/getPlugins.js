const DEV_PLUGINS = [
  '~/plugins/vuelidate.js',
  '~/plugins/vue-social-sharing.js',
  '~/plugins/get-media-from-s3.js',
  '~/plugins/header-handler.js',
  '~/plugins/feature-flags.js',
  { src: '~/plugins/gtag.js', mode: 'client' },
  // { src: '~/plugins/facebook-tag.js', mode: 'client' },
  // { src: '~/plugins/linkedin.js', mode: 'client' },
]

const getPlugins = isProd => (isProd ? [...DEV_PLUGINS] : DEV_PLUGINS)

export default getPlugins
