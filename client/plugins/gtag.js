import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default () => {
  const GA4_KEY = process.env.analytics4Key
  const UNIVERSAL_KEY = process.env.analyticsUniversalKey

  Vue.use(VueGtag, {
    appName: 'Maddevs',
    includes: [
      { id: UNIVERSAL_KEY },
    ],
    config: { id: GA4_KEY },
  })
}
