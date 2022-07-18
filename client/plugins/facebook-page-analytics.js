export default ctx => {
  const hostNameProd = 'maddevs.io'
  const hostNameStaging = 'maddevs.co'
  const originProd = 'https://maddevs.io'
  const originStaging = 'https://maddevs.co'

  if (!process?.client) return
  if (window.location.hostname === hostNameProd
    || window.location.hostname === hostNameStaging
    || window.location.origin === originProd
    || window.location.origin === originStaging
  ) {
    const { router, $fb } = ctx.app

    router.afterEach(() => {
      setTimeout(() => {
        $fb.fbq('trackCustom', 'PageView 15sec')
      }, 15 * 1000)
    })
  }
}
