<template>
  <div class="post-part single">
    <PrismicRichText
      :field="slice.primary.text"
      :html-serializer="htmlSerializer"
      class="textslice"
    />
  </div>
</template>

<script>
import { copyAnchorLinkMixin } from '@/mixins/copyAnchorLinkMixin'

export default {
  name: 'TextSlice',

  mixins: [copyAnchorLinkMixin],
  props: {
    slice: {
      type: Object,
      default: null,
    },

    htmlSerializer: {
      type: Function,
      default: () => null,
    },
  },

  mounted() {
    document.querySelectorAll('.copy-link')
      .forEach(link => {
        link.addEventListener('click', this.copyAnchorLink)
      })
  },

  beforeDestroy() {
    document.querySelectorAll('.copy-link')
      .forEach(link => link.removeEventListener('click', this.copyAnchorLink))
  },
}
</script>

<style lang="scss" scoped>
.textslice {
  word-break: break-word;
}
</style>
