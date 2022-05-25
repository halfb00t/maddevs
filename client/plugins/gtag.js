import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ctx => {
  if (ctx.env.domain === 'https://maddevs.io' || ctx.env.domain === 'https://maddevs.co') {
    Vue.use(VueGtag, {
      config: {
        id: process.env.analytics4Key,
        params: {
          send_page_view: true,
        },
      },
      includes: [
        {
          id: process.env.analyticsUniversalKey,
          params: {
            send_page_view: true,
          },
        },
      ],
    }, ctx.app.router)
  }
}
