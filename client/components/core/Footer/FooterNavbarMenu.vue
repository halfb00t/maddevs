<template>
  <div
    v-if="menuRoutes && menuRoutes.length"
    class="footer-menu"
  >
    <h3
      v-if="menuName"
      class="footer-menu__name"
    >
      {{ menuName }}
    </h3>
    <ul class="footer-menu__list">
      <li
        v-for="{ label, link } in menuRoutes"
        :key="label"
        class="footer-menu__item"
      >
        <div
          v-if="label"
        >
          <NuxtLink
            v-if="!extractMenuLink(link).isExternalLink"
            :to="extractMenuLink(link).url"
            data-testid="menu-item-internal-link"
            class="footer-menu__item-link"
            @click.native="goToPage($event)"
          >
            {{ label }}
          </NuxtLink>
          <a
            v-else
            :href="extractMenuLink(link).url"
            data-testid="menu-item-external-link"
            target="_blank"
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
import { blockClickEvent, contactsClickEvent } from '@/analytics/events'

export default {
  name: 'FooterNavbarMenu',

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
      this.$root.$emit('changed-page')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-menu__item a {
  color: $text-color--white-primary;
  font-size: 12px;
  text-transform: capitalize;
}

a.nuxt-link-exact-active {
  color: $text-color--red !important;

  &::before {
    opacity: 1;
  }
}

.footer-menu {
  margin-bottom: 30px;

  &__name {
    color: $text-color--grey-pale;
    font-size: 12px;
    margin-bottom: 15px;
    text-transform: capitalize;
    font-weight: normal;
  }

  &__item {
    margin-bottom: 8px;

    &-link {
      transition: color .2s;

      &:hover {
        color: $text-color--red;
      }
    }
  }
}
</style>
