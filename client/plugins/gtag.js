import Vue from 'vue'
import VueGtag, { pageview } from 'vue-gtag'

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
            send_page_view: false,
          },
        },
        includes: [
          {
            id: process.env.analyticsUniversalKey,
            params: {
              send_page_view: false,
            },
          },
        ],
      })
      const { router } = ctx.app

      router.afterEach(to => {
        Vue.nextTick(() => {
          pageview({
            page_path: to.fullPath,
            page_title: document.title,
          })
        })
      })
    }
  }
}
