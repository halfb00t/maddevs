<template>
  <section
    class="spacer-slice"
    :style="{
      height,
      backgroundColor: sliceBackground,
    }"
  />
</template>

<script>
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'SpacerSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      height: this.slice.primary.height,
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
    }
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      if (window.innerWidth <= 375) {
        this.height = this.slice.primary['height-sm']
        || this.slice.primary['height-md']
        || this.slice.primary['height-lg']
        || this.slice.primary['height-xl']
        || this.slice.primary.height
      } if (window.innerWidth > 375 && window.innerWidth <= 768) {
        this.height = this.slice.primary['height-md']
        || this.slice.primary['height-lg']
        || this.slice.primary['height-xl']
        || this.slice.primary.height
      } if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        this.height = this.slice.primary['height-lg']
        || this.slice.primary['height-xl']
        || this.slice.primary.height
      } if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
        this.height = this.slice.primary['height-xl']
        || this.slice.primary.height
      } if (window.innerWidth > 1440) {
        this.height = this.slice.primary.height
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.spacer-slice {
  width: 100%;
  display: block;
  position: relative;
  background-color: $bgcolor--white-primary;
  margin: -1px 0;
  z-index: -1;
}
</style>
