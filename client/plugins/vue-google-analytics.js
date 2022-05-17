/* eslint-disable */
import Vue from 'vue'
import vueAnalytics from 'vue-analytics'

export default ctx => {
  if (ctx.env.domain === 'https://maddevs.io' || ctx.env.domain === 'https://maddevs.co') {
    Vue.use(vueAnalytics, {
      id: process.env.analyticsUniversalKey,
      router: ctx.app.router,
      // Remove debug before deployment
      debug: {
        enabled: process.env.environment === 'development',
        sendHitTask: process.env.environment === 'development',
      },
    })
  }
}
