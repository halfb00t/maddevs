import copyToClipboard from '@/helpers/copyToClipboard'

export const copyAnchorLinkMixin = {
  methods: {
    copyAnchorLink(event) {
      const copyText = event.target.getAttribute('data-id')
      if (!copyText) return null
      const tooltip = event.target.nextElementSibling
      const link = this.anchorLink || `${window.location.origin}${this.$router.currentRoute.path}#${copyText}`

      if (tooltip) {
        tooltip.innerText = 'Copied!'
        setTimeout(() => {
          tooltip.innerText = 'Copy link'
        }, 3000)
      }
      copyToClipboard(link)
      return link
    },
  },
}
