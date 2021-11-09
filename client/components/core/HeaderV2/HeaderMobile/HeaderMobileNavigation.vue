<template>
  <ul class="header-mobile-navigation">
    <li
      v-for="{ name, label } in navigation"
      :key="name"
      class="header-mobile-navigation__item"
      data-testid="navigation__item"
    >
      <button
        type="button"
        class="header-mobile-navigation__item-button"
        @click="setNavigation(name)"
      >
        <span class="header-mobile-navigation__item-label">{{ label }}</span>
        <span class="header-mobile-navigation__item-icon">↓</span>
      </button>
      <HeaderMobileSection
        v-if="headerContent[name]"
        v-bind="headerContent[name]"
        :is-active="activeNavigation === name"
        :class="{ 'header-mobile-section--active': activeNavigation === name }"
        @closed-mobile-section="activeNavigation = null"
        @changed-page="onChangePage"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMobileSection from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileSection'

export default {
  name: 'HeaderMobileNavigation',
  components: {
    HeaderMobileSection,
  },

  props: {
    navigation: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      activeNavigation: null,
    }
  },

  computed: {
    ...mapGetters(['headerContent']),
  },

  methods: {
    onChangePage() {
      this.activeNavigation = null
      this.$emit('changed-page')
    },

    setNavigation(navigationName) {
      this.activeNavigation = navigationName
    },
  },
}
</script>

<style lang="scss" scoped>
.header-mobile-navigation {
  &__item {
    display: block;
    border-bottom: 1px solid $border-color--grey-dark-transparent;
    &:first-of-type {
      border-top: 1px solid $border-color--grey-dark-transparent;
    }
    &:hover {
      .header-mobile-navigation__item-label {
        color: $text-color--red;
      }
    }

    &-button {
      cursor: pointer;
      font-family: "Inter", sans-serif;
      border: 0px solid;
      outline: none;
      box-shadow: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 18px 0;
    }

    &-label {
      @include font('Inter', 33px, 600);
      text-align: left;
      display: inline-block;
      letter-spacing: -0.04em;
      line-height: 43px;
      color: $text-color--white;
      transition: all .15s ease;
    }

    &-icon {
      display: inline-block;
      margin-left: 20px;
      font-size: 25px;
      color: $text-color--quote-box;
      transform: rotate(-90deg);
    }
  }
}
</style>
