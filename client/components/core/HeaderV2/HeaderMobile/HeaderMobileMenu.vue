<template>
  <div
    v-if="menuRoutes && menuRoutes.length"
    class="header-mobile-menu"
  >
    <button
      type="button"
      class="header-mobile-menu__button"
      @click="setActiveMenu"
    >
      <span class="header-mobile-menu__button-label">{{ menuName }}</span>
      <span class="header-mobile-menu__button-icon">↓</span>
    </button>
    <div
      ref="mobileMenuDropdown"
      class="header-mobile-menu__dropdown"
    >
      <ul
        ref="mobileMenuList"
        class="header-mobile-menu__list"
      >
        <li
          v-for="{ label } in menuRoutes"
          :key="label"
          class="header-mobile-menu__route"
        >
          <a
            href="#"
            class="header-mobile-menu__route-link"
          >
            {{ label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobileMenu',

  props: {
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
    setActiveMenu() {
      this.$emit('changedActiveMobileMenu', this.menuName)
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile-menu {
  border-bottom: 1px solid $border-color--grey-dark-transparent;
  &:first-of-type {
    border: 0px solid;
  }
  &--active {
    .header-mobile-menu {
      &__button {
          &-label {
          color: $text-color--red;
        }
        &-icon {
          transform: rotate(0);
        }
      }
      &__dropdown {
        max-height: none;
        pointer-events: auto;
      }
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

  &__dropdown {
    transition: all .5s ease-in-out;
    max-height: 0px;
    overflow: hidden;
    pointer-events: none;
  }

  &__route {
    @include font('Inter', 24px, 400);
    line-height: 31px;
    letter-spacing: -0.04em;
    color: $text-color--grey-opacity-20-percent;
    border-top: 1px solid $border-color--grey-dark-transparent;
    &:hover {
      .header-mobile-menu__route-link {
        color: $text-color--red;
      }
    }
    &-link {
      display: block;
      padding: 18px 0;
      color: $text-color--grey-opacity-20-percent;
      transition: all .15s ease;
    }
  }
}
</style>
