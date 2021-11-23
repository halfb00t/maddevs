<template>
  <div
    ref="lavContainer"
    class="lottie-container"
    :style="cssVars"
  />
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'LottieMad',
  props: {
    height: {
      type: String,
      default: '100%',
    },

    width: {
      type: String,
      default: '100%',
    },

    lottieLink: {
      type: String,
      default: '',
    },

    loop: {
      type: Boolean,
      default: false,
    },

    autoplay: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    cssVars() {
      return {
        '--height': this.height,
        '--width': this.width,
      }
    },
  },

  mounted() {
    const observerCallback = (entries, observer) => entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return
      this.createLottie()
      observer.unobserve(target)
    })
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 })
      observer.observe(this.$refs.lavContainer)
    }
  },

  methods: {
    createLottie() {
      this.anim = lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        path: this.lottieLink,
        assetsPath: 'https://d6xkme6dcvajw.cloudfront.net/',
      })
      this.$emit('animCreated', this.anim)
    },
  },
}
</script>

<style lang="scss" scoped>
.lottie-container {
  min-height: var(--height);
  width: var(--width);
  overflow: hidden;
  margin: 0 auto;

  @media screen and (max-width: 990px) {
    width: 100%;
    min-height:20vw;
  }
}
</style>
