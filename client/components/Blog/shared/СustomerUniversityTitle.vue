<template>
  <div
    v-if="anchorLink"
    id="anchorLink"
    class="anchor_title"
  >
    <h2 class="customer-university-title">
      <span>
        {{ title }}
      </span>
      <br>
      {{ subtitle }}
    </h2>
    <div class="anchor_copy-link">
      <button
        data-id="anchor-link"
        class="copy-link"
        @click="copyAnchorLink"
      >
        <img
          :src="`${require('@/assets/img/common/anchor.svg')}`"
          alt="Anchor"
          width="16"
          height="16"
        >
      </button>
      <div class="anchor_copy-link-tooltip">
        Copy link
      </div>
    </div>
  </div>
  <h2
    v-else
    class="customer-university-title"
  >
    <span>
      {{ title }}
    </span>
    <br>
    {{ subtitle }}
  </h2>
</template>
<script>
import copyToClipboard from '@/helpers/copyToClipboard'

export default {
  name: 'CustomerUniversityTitle',
  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    anchorLink: {
      type: String,
      default: '',
    },
  },

  methods: {
    copyAnchorLink(event) {
      const copyText = event.target.getAttribute('data-id')
      if (!copyText) return null
      const tooltip = event.target.nextElementSibling
      if (tooltip) {
        tooltip.innerText = 'Copied!'
        setTimeout(() => {
          tooltip.innerText = 'Copy link'
        }, 3000)
      }
      copyToClipboard(this.anchorLink)
      return this.anchorLink
    },
  },
}
</script>
