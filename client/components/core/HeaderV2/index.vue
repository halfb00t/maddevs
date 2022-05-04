<template>
  <div
    id="header"
    class="header-wrapper"
    data-testid="test-header-wrapper"
  >
    <header
      ref="header"
      class="header"
      :class="{ 'header--transparent-bg': headerIsTransparent }"
      @mouseleave="onChangeNavigation(null)"
    >
      <div
        id="header-container"
        class="header__container container"
      >
        <div class="header__content">
          <div
            v-if="logoTextIsActive"
            class="header__content-crumbs"
          >
            <Crumbs />
          </div>
          <div class="header__content-left">
            <NuxtLink
              to="/"
              class="header__logo"
            >
              <HeaderLogo :show-text="logoTextIsActive" />
            </NuxtLink>
            <nav class="header__navigation">
              <HeaderNavigation
                :navigation="navigation"
                :active-navigation="activeNavigation"
                @changed-navigation="onChangeNavigation"
                @changed-page="onChangePage"
              />
            </nav>
          </div>
          <div class="header__content-right">
            <button
              v-if="isBlogPage"
              type="button"
              class="header__search-btn"
              @click="isActiveModalSearch = true"
            >
              <img
                src="@/assets/img/common/magnify--white.svg"
                width="16"
                height="18"
                alt="Magnify"
              >
            </button>
            <a
              href="tel:+442039848555"
              class="header__phone"
              @click="sendPhoneClickEvent"
            >
              <img
                width="18"
                height="14"
                src="@/assets/img/Home/flags/uk.svg"
                alt="United Kingdom"
              >
              <span>+44 20 3984 8555</span>
            </a>
            <button
              type="button"
              class="header__contact-btn"
              @click="showModal"
            >
              Contact me
            </button>
            <button
              v-if="isMobile"
              type="button"
              data-testid="test-burger"
              class="header__burger-btn"
              @click="toggleMobileMenu"
            >
              <svg
                v-if="isActiveMobileMenu"
                class="header__burger--close"
                data-testid="test-burger--close"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.807613 19.1924L19.1924 0.807623M19.1914 19.1924L0.806641 0.807617"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                class="header__burger--open"
                width="30"
                height="10"
                viewBox="0 0 30 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H30V1H0V0Z"
                  fill="#F5F7F9"
                />
                <path
                  d="M0 9H30V10H0V9Z"
                  fill="#F5F7F9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <HeaderMobile
      v-if="isActiveMobileMenu"
      :navigation="navigation"
      @changed-page="onChangePage"
      @open-modal="showModal"
    />

    <transition name="slide-fade">
      <ModalSearch
        v-if="isActiveModalSearch"
        @on-close="isActiveModalSearch = false"
      />
    </transition>

    <ModalContactMe
      ref="modalContactMe"
      :location="'\'Contact me\' button, header component'"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Crumbs from '@/components/shared/Crumbs'
import scrollOnBody from '@/mixins/scrollOnBody'
import ModalSearch from '@/components/core/modals/ModalSearch'
import HeaderLogo from '@/components/core/HeaderV2/HeaderLogo.vue'
import HeaderNavigation from '@/components/core/HeaderV2/HeaderNavigation'
import HeaderMobile from '@/components/core/HeaderV2/HeaderMobile'
import { isMobile } from '@/helpers/isMobileDeviceDetect'
import { contactMeClickEvent, phoneClickEvent } from '@/analytics/events'

// TODO: Need to transfer this constant to @/data/navigation.js
const navigation = [
  {
    name: 'company',
    label: 'Company',
  },
  {
    name: 'services',
    label: 'Services',
  },
  {
    name: 'clients',
    label: 'Clients',
  },
  {
    name: 'insights',
    label: 'Insights',
  },
]

export default {
  name: 'HeaderV2',
  components: {
    HeaderLogo,
    HeaderNavigation,
    HeaderMobile,
    ModalSearch,
    Crumbs,
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
  },

  mixins: [scrollOnBody],

  data() {
    return {
      mobileResolution: 1012,
      isMobile: false,
      navigation,
      activeNavigation: null,
      showLogoText: false,
      isActiveModalSearch: false,
      isActiveMobileMenu: false,
    }
  },

  computed: {
    ...mapGetters(['headerTransparentArea', 'headerTransparent']),

    isBlogPage() {
      return this.$nuxt.$route.path.includes('/blog')
    },

    logoTextIsActive() {
      return (this.showLogoText && !this.activeNavigation)
    },

    headerIsTransparent() {
      return (!this.isActiveMobileMenu && !this.activeNavigation && this.headerTransparent)
    },
  },

  watch: {
    isActiveModalSearch(opened) {
      if (opened) {
        this.disableScrollOnBody()
      } else {
        setTimeout(() => {
          this.enableScrollOnBody()
        }, 300)
      }
    },
  },

  created() {
    this.getHeaderContent()
  },

  mounted() {
    this.showBurgerMenu()
    window.addEventListener('resize', this.showBurgerMenu)
    this.addEventListeners()
    this.setStylesForHeader()

    // Show logo text when only page loaded
    this.$nextTick(() => {
      this.showLogoText = true
    })
  },

  unmounted() {
    window.removeEventListener('resize', this.showBurgerMenu)
  },

  beforeDestroy() {
    this.removeEventListeners()
  },

  methods: {
    ...mapActions(['getHeaderContent', 'setHeaderTransparent']),

    sendPhoneClickEvent() {
      phoneClickEvent.send()
    },

    showBurgerMenu() {
      this.isMobile = isMobile()
    },

    showModal() {
      if (!this.$refs?.modalContactMe?.show) return
      this.$refs.modalContactMe.show()
      contactMeClickEvent.send()
      this.isActiveMobileMenu = false
    },

    onChangeNavigation(navigationName) {
      this.activeNavigation = navigationName
    },

    onChangePage() {
      window.scrollTo(0, 0)
      this.activeNavigation = null
      this.enableScrollOnBody()
      if (this.isActiveMobileMenu) this.toggleMobileMenu()
    },

    handleLogo(scrollTop) {
      if (this.headerTransparent) {
        this.showLogoText = true
      } else {
        this.showLogoText = Boolean(scrollTop < 10)
      }
    },

    handleMobileMenuScroll(e) {
      e.stopImmediatePropagation()
      this.handleLogo(e.target.scrollTop)
    },

    toggleMobileMenu() {
      this.isActiveMobileMenu = !this.isActiveMobileMenu
      if (this.isActiveMobileMenu) {
        this.disableScrollOnBody()
        this.$nextTick(() => {
          document.addEventListener('scroll', this.handleMobileMenuScroll, true)
        })
      } else {
        this.enableScrollOnBody()
        document.removeEventListener('scroll', this.handleMobileMenuScroll, true)
      }
    },

    setStylesForHeader() {
      const scrollTop = window.scrollY
      const area = document.querySelector(this.headerTransparentArea)
      const headerHeight = this.$refs?.header?.clientHeight
      const earlyStartBGChange = 30 // For an earlier start change background header

      this.handleLogo(scrollTop)

      if (!area) {
        this.setHeaderTransparent(false)
      } else {
        const areaHeight = (area.offsetTop + area.offsetHeight) - headerHeight
        const isBeforeBottomPointSection = scrollTop <= areaHeight - earlyStartBGChange // Before Bottom point of the section

        this.setHeaderTransparent(isBeforeBottomPointSection)
      }
    },

    addEventListeners() {
      window.addEventListener('scroll', this.setStylesForHeader)
    },

    removeEventListeners() {
      window.removeEventListener('scroll', this.setStylesForHeader)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: $bgcolor--black;
  transition: all .3s ease;
  &--transparent-bg {
    background-color: transparent;
  }

  /deep/ button {
    border: 0px solid;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }

  &-wrapper {
    width: 100%;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 10;
  }

  &__container {
    position: relative;

    @media screen and (max-width: 1012px) {
      padding: 0 10px 0 25px;
      max-width: 100%;
    }
  }

  &__content {
    z-index: 3;
    position: relative;
    width: 100%;
    height: 63px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    color: $text-color--white-primary;

    &-crumbs {
      position: absolute;
      bottom: -15px;
      left: 0px;
      width: 100%;

      @media screen and (max-width: 1012px) {
        top: 70px;
        left: 0px;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    @media screen and (max-width: 1012px) {
      height: 48px;
    }

    a {
      color: $text-color--white-primary;
    }
    &-left,
    &-right {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &-left {
      flex: 1;
    }
  }

  &__logo {
    display: inline-block;
    width: 34px;
    min-width: 34px;
    height: 58px;
    transform: translateX(-100%);
    padding-top: 28px;
    margin-left: -33px;
    @media screen and (max-width: 1012px) {
      transform: translateX(0);
      margin-left: 0;
      padding-top: 22px;
      width: 28px;
      height: 49px;
    }

    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__navigation {
    flex: 1;
    @media screen and (max-width: 1012px) {
      display: none;
    }
  }

  &__search-btn {
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    img {
      display: block;
      width: 16px;
      min-width: 16px;
      height: 18px;
    }
  }

  &__phone {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    height: 100%;
    display: flex;
    align-items: center;
    color: $text-color--white-primary;
    margin-right: 55px;
    @media screen and (max-width: 1140px) {
      margin-right: 30px;
    }
    @media screen and (max-width: 1012px) {
      display: none;
    }
    img {
      display: block;
      margin-right: 7px;
      width: 18px;
      min-width: 18px;
      height: 14px;
    }
  }

  &__contact-btn {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    border: 1px solid $bgcolor--red-extra-dark !important;
    color: $text-color--red;
    min-width: 122px;
    border-radius: 4px;
    padding: 7px 20px;
    transition: all 0.3s ease;
    &:hover {
      background-color: $bgcolor--red-extra-dark;
      color: $text-color--white-primary;
    }
    @media screen and (max-width: 1012px) {
      display: none;
    }
  }

  &__burger-btn {
    display: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 15px;
    @media screen and (max-width: 1012px) {
      display: flex;
    }
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions. */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-300px);
  opacity: 0;
}
</style>
