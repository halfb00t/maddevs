<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="header-mobile-section"
      :class="`header-mobile-section-${name}`"
    >
      <div class="header-mobile-section__scroll safary-only container">
        <div class="header-mobile-section__content">
          <button
            type="button"
            class="header-mobile-section__back-btn"
            @click="close"
          >
            Back
          </button>
          <div class="header-mobile-section__menu">
            <HeaderMobileMenu
              v-for="(menu, idx) in mappedMenus"
              :key="menu.name || `menu-${idx}`"
              :is-active="menu.name === activeMenu"
              :menu-name="menu.name"
              :menu-routes="menu.routes"
              :class="{
                'header-mobile-menu--active': activeMenu === menu.name
              }"
              @changedActiveMobileMenu="setActiveMenu"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HeaderMobileMenu from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileMenu'

export default {
  name: 'HeaderMobileSection',
  components: {
    HeaderMobileMenu,
  },

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },

    name: {
      type: String,
      default: '',
      required: true,
    },

    menus: {
      type: Array,
      default: () => ([]),
      required: true,
    },
  },

  data() {
    return {
      activeMenu: null,
    }
  },

  computed: {
    mappedMenus() {
      const otherMenu = {
        name: 'Other',
        routes: [],
      }
      const filteredMenus = this.menus.filter(({ name }) => Boolean(name))

      this.menus.forEach(({ name, routes }) => {
        if (!name) otherMenu.routes = [...otherMenu.routes, ...routes]
      })
      return [...filteredMenus, otherMenu]
    },
  },

  methods: {
    close() {
      this.activeMenu = null
      this.$emit('closedMobileSection')
    },

    setActiveMenu(menuName) {
      this.activeMenu = menuName
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile-section {
  overflow: hidden;
  cursor: auto;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - (100vh - 100%)); // 100vh height for mobile Safari browser
  padding-top: 63px; // 63px - height of sticky header
  background-color: $bgcolor--black;
  transition: all .3s ease;
  @media screen and (max-width: 1012px) {
    padding-top: 48px;
  }

  /deep/ button {
    border: 0px solid;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }

  &__scroll {
    position: relative;
    height: calc(100vh - 63px);
    overflow: auto;
  }

  &__content {
    padding-top: 44px;
    padding-bottom: 25px;
  }

  &__back-btn {
    @include font('Inter', 16px, 400);
    text-align: left;
    width: 100%;
    padding: 0;
    cursor: pointer;
    line-height: 21px;
    letter-spacing: -0.04em;
    padding: 18px 0;
    color: $text-color--grey-pale;
    transition: all .15s ease;
    &:hover {
      color: $text-color--red;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

/* iphone 5 */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 120px) !important;
  }
}

/* iphone 6, 6s, 7, 8 */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 120px) !important;
  }
}

/* iphone 6+, 6s+, 7+, 8+ */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 120px) !important;
  }
}

/* iphone X , XS, 11 Pro */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 157px) !important;
  }
}

/* iphone XR, 11 */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 157px) !important;
  }
}

/* iphone XS Max, 11 Pro Max */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  _::-webkit-full-page-media,
  _:future,
  :root .safari-only {
    max-height: calc(100vh - 157px) !important;
  }
}
</style>
