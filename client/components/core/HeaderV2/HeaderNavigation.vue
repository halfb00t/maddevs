<template>
  <ul class="header-navigation">
    <li
      v-for="{name, label} in navigation"
      :key="name"
      class="header-navigation__item"
      data-testid="navigation__item"
      :class="[ `header-navigation__item-${name}`, getIsHoverClass(name) ]"
    >
      <span
        data-testid="test-navigation-link"
        :class="{ 'header-navigation__item-active': currentNavigationName === name }"
        @click="goTo(name)"
        @mouseenter="setNavigation(name)"
      >
        {{ label }}
      </span>
      <HeaderSection
        v-if="headerContent[name]"
        v-bind="headerContent[name]"
        :is-active="activeNavigation === name"
        :class="{ 'header-section--active': activeNavigation === name }"
        @changed-page="onChangePage"
        @name="getName"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderSection from '@/components/core/HeaderV2/HeaderSection'
import { categoryPageClickEvent } from '@/analytics/events'

export default {
  name: 'HeaderNavigation',
  components: {
    HeaderSection,
  },

  props: {
    navigation: {
      type: Array,
      default: () => ([]),
    },

    activeNavigation: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      currentNavigationName: null,
    }
  },

  computed: {
    ...mapGetters(['headerContent']),
  },

  watch: {
    $route: {
      handler({ path }) {
        if (path === '/') this.currentNavigationName = 'company'
      },

      deep: true,
      immediate: true,
    },
  },

  methods: {
    getName(value) {
      this.currentNavigationName = value
    },

    setNavigation(navigationName) {
      this.$emit('changed-navigation', navigationName)
    },

    onChangePage() {
      this.$emit('changed-page')
    },

    goTo(name) {
      const path = this.headerContent[name]?.link
      if (!path) {
        this.currentNavigationName = null
        return
      }
      this.currentNavigationName = name
      categoryPageClickEvent.send()
      this.$router.push({ path })
    },

    getIsHoverClass(navigationName) {
      if (this.activeNavigation === navigationName) return 'header-navigation__item--is-hover'
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.header-navigation {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  height: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
    &--is-hover span {
      color: $text-color--red !important;
    }
    &:last-child {
      margin-right: 0;
    }
    span {
      @include font('Inter', 15px, 400);
      line-height: 25px;
      letter-spacing: -0.1px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $text-color--white-primary;
      transition: all .15s ease;
    }

    &-active {
      color: $text-color--red !important;
    }
  }
}
</style>
