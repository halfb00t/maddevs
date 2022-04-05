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
      <!--      <li class="footer-sub-navigation__separator-list-item">-->
      <!--        <hr class="footer-sub-navigation__separator">-->
      <!--      </li>-->
      <li
        v-for="{name, label} in navigation"
        :key="label"
        class="footer-sub-navigation__column"
        :class="[ `footer-navigation__column-${name}`]"
      >
        <span
          class="footer-main-navigation__column-title"
          @click="goTo(name)"
        >
          {{ name }}
        </span>
        <hr class="footer-sub-navigation__separator">

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

.footer{
  &-navbar {
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
  }
  &-main-navigation {
    display: flex;
    flex-direction: column;
    &__column-title{
      font-size: 18px;
      text-transform: capitalize;
    }
  }
  &-sub-navigation{
    &__separator{
      border: 1px none white;
      border-top-style: solid;
      margin: 15px 0;

    }
  }
}
</style>
