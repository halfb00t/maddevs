<template>
  <div
    v-if="menuRoutes && menuRoutes.length"
    class="header-menu"
  >
    <p
      v-if="menuName"
      class="header-menu__name"
    >
      {{ menuName }}
    </p>
    <ul class="header-menu__list">
      <li
        v-for="{ label, link } in menuRoutes"
        :key="label"
        class="header-menu__item"
      >
        <div v-if="label">
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import extractMenuLink from '@/helpers/extractMenuLink'

export default {
  name: 'HeaderMenu',

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
    extractMenuLink,

    goToPage() {
      this.$emit('changed-page')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-menu {
  box-sizing: border-box;
  width: 100%;

  a {
    color: $text-color--white-primary;
  }

  &__name {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    color: $text-color--grey-pale;
    margin-bottom: 2px;
  }

  &__list {
    width: 100%;
  }

  &__item {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    display: flex;
    &::before {
      content: '';
      display: block;
      opacity: 0;
      transform: translate(-100%, 20px) scale(0.6);
      margin-left: -18px;
      margin-right: 8px;
      width: 10px;
      height: 3px;
      background-color: $bgcolor--red;
      transition: all .15s ease-in;
    }
    &:hover {
      a {
        color: $text-color--red;
      }
      &::before {
        opacity: 1;
        transform: translate(-100%, 20px) scale(1);
      }
    }
    a {
      padding: 8px 0;
      display: block;
      width: 100%;
      color: $text-color--white-primary;
      transition: all .15s ease;
    }
    &--active {
      font-weight: 700;
      a {
        cursor: default;
        color: $text-color--red !important;
      }
      &:hover::before  {
        display: none;
      }
    }
  }
}
</style>
