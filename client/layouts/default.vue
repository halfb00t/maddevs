<template>
  <div class="default-layout">
    <HeaderV2 />
    <Nuxt class="main-section" />
    <Chat class="chat" />
    <ClientOnly>
      <CookieNotice />
    </ClientOnly>
    <Footer
      v-if="showFooter"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chat from '@/components/core/chat'
import HeaderV2 from '@/components/core/HeaderV2'
import CookieNotice from '@/components/core/CookieNotice'
import Footer from '@/components/core/FooterV2/Footer'
import { getNotAllowedRoutes } from '../../utils/getNotAllowedRoutes'

export default {
  name: 'Default',
  components: {
    CookieNotice,
    HeaderV2,
    Footer,
    Chat,
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

  .chat {
    position: fixed;
    bottom: 10px;
    right: 25px;
    z-index: 10;

    @media screen and (max-width: 420px) {
      right: 10px;
    }
  }
}

.main-section {
  margin-top: -62px !important;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    position: static;
  }
}
</style>
