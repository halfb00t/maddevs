import Vue from 'vue'

export default ctx => {
  if (process.client) {
    if (window.location.hostname === 'maddevs.io'
      || window.location.hostname === 'maddevs.co'
      || window.location.origin === 'https://maddevs.co'
      || window.location.origin === 'https://maddevs.io'
    ) {
      const { router } = ctx.app
      const { $fb } = ctx.app
      router.afterEach(() => {
        Vue.nextTick(() => {
          setTimeout(() => {
            $fb.fbq('trackCustom', 'PageView 15sec')
          }, 15 * 1000)
        })
      })
    }
  }
}
