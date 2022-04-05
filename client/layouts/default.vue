<template>
  <div class="default-layout">
    <!--    <HeaderV2 />-->
    <!--    <Nuxt class="main-section" />-->
    <!--    <ClientOnly>-->
    <!--      <CookieNotice />-->
    <!--    </ClientOnly>-->
    <!--    todo undo this changes -->
    <div style="height: 300px; background: white;">
      spacer
    </div>
    <Footer
      v-if="true"
      style=" border: 3px solid red"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from '@/components/core/FooterV2/Footer'
import { getNotAllowedRoutes } from '../../utils/getNotAllowedRoutes'

export default {
  name: 'Default',
  components: {
    Footer,
  },

  /**
   * This middleware is needed to update the masterRef prismic parameter if it has expired
   * More about this issue - https://community.prismic.io/t/expired-token-access-token-403-error-on-some-page-visits-safari/4369/23
   */
  async middleware({
    route = { name: '' },
    $axios,
    $prismic,
  }) {
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
    getNotAllowedRoutes,
  },

  watch: {
    $route() {
      this.checkNotAllowedRoute()
    },
  },

  beforeMount() {
    this.checkNotAllowedRoute()
  },

  mounted() {
    this.initHashLinks()
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

    checkNotAllowedRoute() {
      if (this.getNotAllowedRoutes.find(route => route === $nuxt.$route.path)) {
        this.$router.push('/404/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  background-color: $bgcolor--black;
}

.main-section {
  margin-top: -62px !important;
  position: relative;
  z-index: 1;
}
</style>
