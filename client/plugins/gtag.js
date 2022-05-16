import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ctx => {
  if (ctx.env.domain === 'https://maddevs.io' || ctx.env.domain === 'https://maddevs.co') {
    const GA4_KEY = process.env.analytics4Key

    Vue.use(VueGtag, {
      appName: 'Maddevs',
      config: { id: GA4_KEY },
    })
  }
}
