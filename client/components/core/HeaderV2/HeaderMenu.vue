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
        <div

          v-if="label"
        >
          <NuxtLink
            v-if="!extractMenuLink(link).isExternalLink"
            :to="extractMenuLink(link).url"
            data-testid="menu-item-internal-link"
            @click.native="goToPage($event)"
          >
            {{ label }}
          </NuxtLink>
          <a
            v-else
            :href="extractMenuLink(link).url"
            :target="extractMenuLink(link).target"
            data-testid="menu-item-external-link"
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
import { blockClickEvent, contactsClickEvent, headerClickEvent } from '@/analytics/events'

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

    goToPage(event) {
      if (event.target.pathname === '/contact-us/') contactsClickEvent.send()
      if (event.target.pathname === '/blog/') blockClickEvent.send()
      headerClickEvent.send()
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

    a {
      padding: 8px 0;
      display: block;
      width: 100%;
      color: $text-color--white-primary;
      transition: all .15s ease;
      position: relative;

      &::before {
        content: '';
        display: block;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%) scale(1);
        width: 10px;
        height: 3px;
        background-color: $bgcolor--red;
        transition: all .15s ease-in;
      }

      &:hover {
        & {
          color: $text-color--red;
        }

        &::before {
          opacity: 1;
        }
      }
    }
  }

  a.nuxt-link-exact-active {
    color: $text-color--red !important;

    &::before {
      opacity: 1;
    }
  }
}
</style>
