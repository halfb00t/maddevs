import { isMatchMainDomain } from '@/helpers/isMatchMainDomain'

export default ctx => {
  if (!process?.client) return
  if (isMatchMainDomain(window.location.origin)) {
    const { router, $fb } = ctx.app

    router.afterEach(() => {
      setTimeout(() => {
        $fb.fbq('trackCustom', 'PageView 15sec')
      }, 15 * 1000)
    })
  }
}
