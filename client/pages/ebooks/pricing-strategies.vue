<template>
  <main class="main ebook-page">
    <Banner />
    <Learn />
    <Read />
    <Delivery />
  </main>
</template>

<script>
import Banner from '@/components/Ebook/Banner'
import Learn from '@/components/Ebook/Learn'
import Read from '@/components/Ebook/Read'
import Delivery from '@/components/Ebook/Delivery'
import { getMetadata, buildHead } from '@/data/seo'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'MainEbooks',
  components: {
    Banner,
    Learn,
    Read,
    Delivery,
  },

  nuxtI18n: false,

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  head() {
    return buildHead(getMetadata('ebook'))
  },
}
</script>

<style lang="scss" scoped>
  .ebook-page {
    /deep/ .container {
      @media screen and (max-width: 1024px) {
        padding: 0 24px;
      }
    }
  }
</style>
