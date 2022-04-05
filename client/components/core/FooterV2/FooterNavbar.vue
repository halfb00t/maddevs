<template>
  <div
    class="footer-navbar"
    style="color: white"
  >
    <!--  todo delete color-->
    <ul
      v-for="(navigation, index) in navigations"
      :key="index"
      class="footer-main-navigation"
      :class="`footer-nav-column-${navigation[0].name}`"
      @mouseenter="setActiveColumn(navigation[0].name)"
      @mouseleave="setActiveColumn()"
    >
      <li
        v-for="{name, label} in navigation"
        :key="label"
        class="footer-sub-navigation__column"
        :class="[ `footer-navigation__column-${name}`]"
      >
        <span
          @click="goTo(name)"
        >
          {{ name }}
        </span>
        <FooterNavbarColumn
          v-if="footerMainNavigation[name]"
          v-bind="footerMainNavigation[name]"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FooterNavbarColumn from '@/components/core/FooterV2/FooterNavbarColumn'

export default {
  name: 'FooterNavbar',

  components: {
    FooterNavbarColumn,
  },

  props: {
    navigations: {
      type: Array,
      default: () => ([]),
      required: true,
    },
  },

  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },

  computed: {
    ...mapGetters(['footerMainNavigation', 'footerIsLoaded']),
  },

  methods: {
    setActiveColumn(ColumnName = '') {
      this.$emit('changed-active-column', ColumnName)
    },

    goTo(name) {
      const path = this.footerMainNavigation[name]?.link
      if (!path) return
      this.$router.push({ path })
    },

  },

}
</script>

<style lang="scss" scoped>
.footer-navbar{
  display: flex;
  justify-content: space-between;
}
.footer-main-navigation {
  display: flex;
  flex-direction: column;
}
</style>
