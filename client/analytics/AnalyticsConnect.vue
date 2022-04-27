<template>
  <div />
</template>

<script>
import { ANALYTICS_IDS } from '@/analytics/constants'

export default {
  data() {
    return {
      ANALYTICS_IDS,
    }
  },

  mounted() {
    window.dataLayer = window.dataLayer || []

    function gtag(...args) {
      window.dataLayer.push(args)
    }

    window.gtag = gtag

    window.gtag('js', new Date())
    window.gtag('config', this.ANALYTICS_IDS.GA4, { debug_mode: true })
    window.gtag('config', this.ANALYTICS_IDS.UNIVERSAL, { debug_mode: true })
  },
}
</script>
