<template>
  <ul class="contacts-slice-messengers">
    <li
      v-for="messenger in messengers"
      :key="messenger.key"
      class="contacts-slice-messengers__item"
    >
      <a
        :href="messenger.url"
        target="_blank"
        class="contacts-slice-messengers__item-link"
      >
        <img
          :src="require(`@/assets/img/Footer/svg/${messenger.key}.svg`)"
          width="42"
          height="42"
          :alt="messenger.label || 'Image'"
          class="contacts-slice-messengers__item-icon"
        >
        <p class="contacts-slice-messengers__item-name">{{ messenger.label }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
import { messengers } from '@/data/messengers'

export default {
  name: 'Messengers',

  data() {
    return {
      messengers,
    }
  },
}
</script>

<style lang="scss" scoped>
.contacts-slice-messengers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, max-content);
    grid-gap: 10px 56px;
  }
  &__item {
    display: block;
    &-link {
      display: flex;
      align-items: center;
      color: $text-color--grey-img-description;
    }
    &-icon {
      display: block;
      width: 42px;
      min-width: 42px;
      margin-right: 2px;
      user-select: none;
      @media screen and (max-width: 1024px) {
        width: 40px;
        min-width: 40px;
      }
      @media screen and (max-width: 768px) {
        width: 35px;
        min-width: 35px;
      }
    }
    &-name {
      @include font('Inter', 16px, 400);
      line-height: 24px;
      letter-spacing: -0.02em;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}
</style>
