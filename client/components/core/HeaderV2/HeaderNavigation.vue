<template>
  <ul class="header-navigation">
    <li
      v-for="{ name, label } in navigation"
      :key="name"
      class="header-navigation__item"
      :class="[
        `header-navigation__item-${name}`,
        activeNavigation === name ? 'header-navigation__item--is-hover' : null,
      ]"
    >
      <span @mouseenter="setNavigation(name)">
        {{ label }}
      </span>
      <HeaderSection
        v-if="headerContent[name]"
        v-bind="headerContent[name]"
        :class="{ 'header-section--active': activeNavigation === name }"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderSection from '@/components/core/HeaderV2/HeaderSection'

// TODO: Need to transfer this constant to @/data/navigation.js
const navigation = [
  {
    name: 'company',
    label: 'Company',
  },
  {
    name: 'services',
    label: 'Services',
  },
  {
    name: 'industries',
    label: 'Industries',
  },
  {
    name: 'clients',
    label: 'Clients',
  },
  {
    name: 'insights',
    label: 'Insights',
  },
]

export default {
  name: 'HeaderNavigation',
  components: {
    HeaderSection,
  },

  props: {
    activeNavigation: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      navigation,
    }
  },

  computed: {
    ...mapGetters(['headerContent']),
  },

  methods: {
    setNavigation(navigationName) {
      this.$emit('changedNavigation', navigationName)
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
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: -0.1px;
      color: $text-color--white-primary;
      transition: all .15s ease;
    }
  }
}
</style>
