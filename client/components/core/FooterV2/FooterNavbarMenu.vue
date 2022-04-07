<template>
  <div
    v-if="menuRoutes && menuRoutes.length"
    class="footer-menu"
  >
    <h5
      v-if="menuName"
      class="footer-menu__name"
    >
      {{ menuName }}
    </h5>
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
            @click.native="goToPage"
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

    goToPage() {
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
