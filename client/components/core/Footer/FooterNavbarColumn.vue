<template>
  <div
    class="footer-section"
    :class="`footer-section--${name}`"
  >
    <div class="footer-section__content">
      <div class="footer-section__menus">
        <FooterNavbarMenu
          v-for="(menu, idx) in menus"
          :key="menu.name || `menu-${idx}`"
          :menu-name="menu.name"
          :menu-routes="menu.routes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FooterNavbarMenu from '@/components/core/Footer/FooterNavbarMenu'

export default {
  name: 'FooterNavbarColumn',
  components: {
    FooterNavbarMenu,
  },

  props: {
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

}
</script>
