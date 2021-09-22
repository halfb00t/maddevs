<template>
  <ul class="header-mobile-socials">
    <li
      v-for="social in socials"
      :key="social.key"
      class="header-mobile-socials__item"
    >
      <a
        :href="social.url"
        target="_blank"
        class="header-mobile-socials__item-link"
      >
        <img
          v-lazy-load
          :data-src="require(`@/assets/img/Footer/svg/${social.key}.svg`)"
          :alt="social.title || 'Icon'"
          width="42"
          height="42"
        >
      </a>
    </li>
  </ul>
</template>

<script>
import { socialNetworks } from '@/data/socialNetworks'

export default {
  name: 'HeaderMobileSocials',

  data() {
    return {
      socials: socialNetworks,
    }
  },
}
</script>

<style lang="scss" scoped>
.header-mobile-socials {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 35px;
  border-top: 1px solid $border-color--grey-dark-transparent;
  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 10px;
  }

  &__item {
    box-sizing: border-box;
    display: block;
    &-link,
    &-link img {
      display: block;
    }
  }
}
</style>
