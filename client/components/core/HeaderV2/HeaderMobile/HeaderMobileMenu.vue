<template>
  <div
    v-if="menuRoutes && menuRoutes.length"
    class="header-mobile-menu"
  >
    <button
      v-show="menuName"
      type="button"
      class="header-mobile-menu__button"
      @click="open"
    >
      <span class="header-mobile-menu__button-label">{{ menuName }}</span>
      <span class="header-mobile-menu__button-icon">↓</span>
    </button>
    <transition
      name="collapse"
      @enter="transitionStart"
      @after-enter="transitionEnd"
      @before-leave="transitionStart"
      @after-leave="transitionEnd"
    >
      <ul
        v-show="isActive"
        ref="mobileMenuList"
        class="header-mobile-menu__list"
      >
        <li
          v-for="{ label, link } in menuRoutes"
          :key="label"
          class="header-mobile-menu__route"
        >
          <NuxtLink
            v-if="!extractMenuLink(link).isExternalLink"
            :to="extractMenuLink(link).url"
            @click.native="goToPage"
          >
            {{ label }}
          </NuxtLink>
          <a
            v-else
            :href="extractMenuLink(link).url"
            :target="extractMenuLink(link).target"
          >
            {{ label }}
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import extractMenuLink from '@/helpers/extractMenuLink'

export default {
  name: 'HeaderMobileMenu',

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },

    menuName: {
      type: String,
      default: '',
    },

    menuRoutes: {
      type: Array,
      default: () => ([]),
    },
  },

  methods: {
    extractMenuLink,

    goToPage() {
      this.$emit('changed-page')
    },

    open() {
      if (this.isActive) {
        this.$emit('changed-active-mobile-menu', null)
      } else {
        this.$emit('changed-active-mobile-menu', this.menuName)
      }
    },

    transitionStart(el) {
      el.style.height = `${el.scrollHeight}px`
    },

    transitionEnd(el) {
      el.style.height = null
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile-menu {
  border-bottom: 1px solid $border-color--grey-dark-transparent;
  &:first-of-type {
    border-top: 1px solid $border-color--grey-dark-transparent;
  }
  &--active .header-mobile-menu__button {
    &-label {
      color: $text-color--red;
    }
    &-icon {
      transform: rotate(0);
    }
  }
  &__button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
    padding: 18px 0;
    border: 0px solid;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &:hover {
      color: $text-color--red;
    }
    &-label,
    &-icon {
      transition: all .15s ease;
    }
    &-label {
      @include font('Inter', 33px, 600);
      text-align: left;
      display: inline-block;
      letter-spacing: -0.04em;
      line-height: 43px;
      color: $text-color--white;
    }
    &-icon {
      display: inline-block;
      margin-left: 20px;
      font-size: 25px;
      color: $text-color--quote-box;
      transform: rotate(-90deg);
    }
  }

  &__list {
    overflow: hidden;
  }

  &__route {
    @include font('Inter', 24px, 400);
    line-height: 31px;
    letter-spacing: -0.04em;
    color: $text-color--grey-opacity-20-percent;
    border-top: 1px solid $border-color--grey-dark-transparent;
    &:hover a {
      color: $text-color--red;
    }
    a {
      display: block;
      padding: 18px 0;
      color: $text-color--grey-opacity-20-percent;
      transition: all .15s ease;
    }
  }
}

.collapse-enter-active,
.collapse-leave-active {
  will-change: height, opacity;
  transition: height 0.35s ease-in-out, opacity 0.35s ease-in-out;
  overflow: hidden;
}

.collapse-enter,
.collapse-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
