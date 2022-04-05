<template>
  <div
    v-if="menuRoutes && menuRoutes.length"
    class="footer-menu"
  >
    <p
      v-if="menuName"
      class="footer-menu__name"
    >
      {{ menuName }}
    </p>
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
      console.log('go to page')
      this.$root.$emit('changed-page')
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
