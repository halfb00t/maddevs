<template>
  <ul class="contacts-slice-socials">
    <li
      v-for="network in socialNetworks"
      :key="network.key"
      class="contacts-slice-socials__item"
    >
      <a
        :href="network.url"
        class="contacts-slice-socials__item-link"
        target="_blank"
      >
        <img
          :src="require(`@/assets/img/Footer/svg/${network.key}.svg`)"
          :alt="network.title || 'Image'"
          width="42"
          height="42"
          class="contacts-slice-socials__item-icon"
        >
      </a>
    </li>
  </ul>
</template>

<script>
import { socialNetworks } from '@/data/socialNetworks'

export default {
  name: 'Socials',

  data() {
    return {
      socialNetworks,
    }
  },
}
</script>

<style lang="scss" scoped>
.contacts-slice-socials {
  display: grid;
  grid-template-columns: repeat(8, max-content);
  justify-content: space-between;
  border-top: 1px solid $border-color--grey-dark-transparent;
  padding-top: 24px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, max-content);
    grid-gap: 10px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 48px;
    grid-template-columns: repeat(8, max-content);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(4, max-content);
  }

  &__item {
    display: block;
    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $text-color--grey-img-description;
    }
    &-icon {
      display: block;
      width: 42px;
      min-width: 42px;
      user-select: none;
      @media screen and (max-width: 1024px) {
        width: 40px;
        min-width: 40px;
      }
      @media screen and (max-width: 768px) {
        width: 35px;
        min-width: 30px;
      }
    }
  }
}
</style>
