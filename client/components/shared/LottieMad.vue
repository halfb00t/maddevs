<template>
  <div
    ref="lavContainer"
    :style="style"
  />
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'LottieMad',
  props: {
    height: Number,
    width: Number,
    lottieLink: String,
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
      },
    }
  },

  mounted() {
    console.log(this.lottieLink)
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: this.lottieLink,
      assetsPath: 'https://d6xkme6dcvajw.cloudfront.net/',
    })
    this.$emit('animCreated', this.anim)
  },
}

</script>
