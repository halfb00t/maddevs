import Vue from 'vue'
import VueGtag, { pageview } from 'vue-gtag'
import { isMatchMainDomain } from '@/helpers/isMatchMainDomain'

export default ctx => {
  if (process.client) {
    if (isMatchMainDomain(window.location.origin)) {
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
