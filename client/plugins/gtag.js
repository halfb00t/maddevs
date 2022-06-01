import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ctx => {
  if (process.client) {
    if (window.location.hostname === 'maddevs.io'
      || window.location.hostname === 'maddevs.co'
      || window.location.origin === 'https://maddevs.co'
      || window.location.origin === 'https://maddevs.io'
    ) {
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
}
