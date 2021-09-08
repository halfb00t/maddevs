<template>
  <div class="default-layout">
    <Header />
    <Nuxt class="main-section" />
    <ClientOnly>
      <CookieNotice />
    </ClientOnly>
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'
import initIntercom from '@/helpers/intercom'
import CookieNotice from '@/components/core/CookieNotice'

export default {
  name: 'Default',
  components: {
    CookieNotice,
    Header,
    Footer,
  },

  /**
   * This middleware is needed to update the masterRef prismic parameter if it has expired
   * More about this issue - https://community.prismic.io/t/expired-token-access-token-403-error-on-some-page-visits-safari/4369/23
   */
  async middleware({ route = { name: '' }, $axios, $prismic }) {
    const pagesWithPrismic = ['careers', 'blog', 'ebooks', 'customer-university']
    if (pagesWithPrismic.some(page => route.name.includes(page))) {
      const prismicData = await $axios.get(process.env.prismicApi)
      const currentMasterRef = $prismic.api.masterRef.ref
      const freshMasterRef = prismicData.data.refs[0].ref
      if (process.client && currentMasterRef !== freshMasterRef) $prismic.api.masterRef.ref = freshMasterRef
    }
  },

  computed: {
    ...mapGetters(['showFooter']),
  },

  mounted() {
    this.initHashLinks()
    this.loadIntercomScript()
  },

  methods: {
    initHashLinks() {
      this.$nextTick(() => {
        if (window.location.hash) {
          try {
            const section = document.querySelector(window.location.hash)
            if (section) section.scrollIntoView({ block: 'start' })
            return true
          } catch {
            return false
          }
        }
        return false
      })
    },

    loadIntercomScript() {
      const scriptLoader = () => {
        initIntercom()
        window.removeEventListener('scroll', scriptLoader)
      }
      window.addEventListener('scroll', scriptLoader)
    },
  },
}
</script>

<style lang='scss' scoped>
.default-layout {
  background-color: $bgcolor--black;
}

.main-section {
  margin-top: -62px !important;
  position: relative;
  z-index: 1;
}
</style>
