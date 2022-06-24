<template>
  <div
    class="header-section"
    :class="`header-section-${name}`"
  >
    <div class="container">
      <div class="header-section__content">
        <div class="header-section__menus">
          <HeaderMenu
            v-for="(menu, idx) in menus"
            :key="menu.name || `menu-${idx}`"
            :menu-name="menu.name"
            :menu-routes="menu.routes"
            @changed-page="onChangePage"
          />
        </div>
        <hr class="header-section__divider">
        <div class="header-section__post">
          <HeaderPost
            v-bind="post"
            :post-type="post.type"
            :post-author="postAuthor"
            @changed-page="onChangePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '@/components/core/HeaderV2/HeaderMenu'

export default {
  name: 'HeaderSection',
  components: {
    HeaderMenu,
    HeaderPost: () => import('@/components/core/HeaderV2/HeaderPost'),
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

    post: {
      type: Object,
      default: () => ({}),
      required: true,
    },

    postAuthor: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  watch: {
    $route: {
      handler({ path }) {
        this.checkCurrentRoute(path)
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    onChangePage() {
      this.$emit('changed-page')
    },

    checkCurrentRoute(urlPath) {
      this.menus.forEach(menu => {
        menu.routes.forEach(route => {
          if (route?.link?.url.endsWith(urlPath) && urlPath !== '/') {
            return this.$emit('name', this.name)
          }
          if (urlPath === '/') {
            return this.$emit('name', null)
          }
          return null
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.header-section {
  overflow: hidden;
  cursor: auto;
  width: 100%;
  height: auto;
  min-height: 275px;
  position: fixed;
  top: 62px;
  right: 0;
  left: 0;
  padding: 20px 0;
  background: rgba(17, 17, 17, 0.85);
  backdrop-filter: blur(16px);
  transform-origin: top;
  opacity: 0;
  transform: scaleY(0);
  pointer-events: none;
  visibility: hidden;
  transition: all .5s ease;
  &--active {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: auto;
    visibility: visible;
  }

  a {
    color: $text-color--white-primary;
  }

  &__content {
    display: flex;
  }

  &__menus {
    overflow: auto;
    max-height: 320px;
    width: calc(100% + 40px);
    padding-right: 15px;
    padding-left: 28px;
    margin-left: -28px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 30px;
    scrollbar-color: $border-color--grey-selected;
    scrollbar-width: 6px;
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: $border-color--grey-selected;
    }
    &::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }
    &::-webkit-track {
      background-color: transparent;
    }
    @media screen and (max-width: 1360px) {
      max-height: 547px;
    }
    @media screen and (max-width: 1280px) {
      max-height: 510px;
    }
    @media screen and (max-width: 1140px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__divider {
    display: block;
    width: 2px;
    border: 0px solid;
    background-color: $bgcolor--red;
    margin: 0 24px 0 12px;
  }

  &__post {
    width: 100%;
    max-width: 540px;
    overflow: hidden;
    padding-bottom: 2px; // Fix for Hidden border bottom for post button
    @media screen and (max-width: 1360px) {
      max-width: 55%;
    }
  }
}
</style>
