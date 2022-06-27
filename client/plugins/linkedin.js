import Vue from 'vue'

export default ctx => {
  const { router } = ctx.app
  const { $fb } = ctx.app
  let seconds = 0
  router.afterEach(() => {
    Vue.nextTick(() => {
      setTimeout(() => {
        seconds += 15
        const payload = `${seconds}sec`
        $fb.fbq('trackCustom', payload)
      }, 15 * 1000)
    })
  })
}
