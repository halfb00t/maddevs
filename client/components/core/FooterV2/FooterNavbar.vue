<template>
  <div
    class="footer-navbar"
    @mouseleave="$emit('leave-columns', $event)"
  >
    <ul
      v-for="(navigation, index) in navigations"
      :key="index"
      class="footer-main-navigation"
      :class="`footer-nav-column-${navigation[0].name}`"
      @mouseenter="$emit('enter-column', $event, navigation[0].name)"
    >
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

  computed: {
    ...mapGetters(['footerMainNavigation', 'footerIsLoaded']),
  },

  methods: {
    goTo(name) {
      const path = this.footerMainNavigation[name]?.link
      if (!path) return
      this.$router.push({ path })
    },

  },

}
</script>

<style lang="scss" scoped>

.footer {
  &-navbar {
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    align-items: flex-start;
  }

  &-main-navigation {
    display: flex;
    flex-direction: column;

    &__column-title {
      font-size: 18px;
      text-transform: capitalize;
      color: $text-color--white-primary;
    }
  }

  &-sub-navigation {
    &__column:hover {
      .footer-sub-navigation__separator {
        border: 1px none rgba(236, 28, 36, .5);
        border-top-style: solid;
      }

      .footer-main-navigation__column-title {
        color: red;
        transition: color .2s;
        cursor: pointer;
      }
    }

    &__separator {
      border: 1px none $border-color--grey-05-opacity;
      border-top-style: solid;
      margin: 6px 0 15px;
      transition: border 0.2s;
    }
  }
}
</style>
