<template>
  <div class="header-mobile-contacts">
    <div class="header-mobile-contacts__field">
      <span class="header-mobile-contacts__field-label">Text us:</span>
      <a
        :href="`mailto:${mailLink}`"
        class="header-mobile-contacts__field-link"
      >
        {{ mailLink }}
      </a>
    </div>
    <div class="header-mobile-contacts__field">
      <span class="header-mobile-contacts__field-label">
        <img
          v-lazy-load
          :data-src="require(`@/assets/img/Home/flags/uk.svg`)"
          width="19"
          height="14"
          alt="United Kingdom"
        >
        Call us:
      </span>
      <a
        href="tel:+442039848555"
        class="header-mobile-contacts__field-link"
      >
        +44 20 3984 8555
      </a>
    </div>
    <ul class="header-mobile-contacts__messengers">
      <li
        v-for="messenger in messengers"
        :key="messenger.key"
        class="header-mobile-contacts__messenger"
      >
        <a
          :href="messenger.url"
          target="_blank"
          class="header-mobile-contacts__messenger-link"
        >
          <img
            v-lazy-load
            :data-src="require(`@/assets/img/Footer/svg/${messenger.key}.svg`)"
            :alt="messenger.label || 'Icon'"
            width="42"
            height="42"
          >
          <span class="header-mobile-contacts__messenger-name">
            {{ messenger.label }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { messengers } from '@/data/messengers'

export default {
  name: 'HeaderMobileContacts',

  data() {
    return {
      messengers,
      mailLink: process.env.emailContact,
    }
  },
}
</script>

<style lang="scss" scoped>
.header-mobile-contacts {
  &__field {
    margin-bottom: 33px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &-label {
      @include font('Inter', 16px, 400);
      display: flex;
      align-items: center;
      margin-bottom: 11px;
      letter-spacing: -0.02em;
      img {
        display: block;
        margin-right: 8px;
      }
    }
    &-link {
      @include font('Poppins', 28px, 600);
      letter-spacing: -1px;
      display: inline-block;
      text-decoration: none;
      color: $text-color--white;
      border-bottom: 1px solid $text-color--red-opacity;
    }
  }

  &__messengers {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 6px 60px;
    margin-top: 50px;
    margin-left: -7px;
  }

  &__messenger {
    color: $text-color--grey-img-description;
    &-link {
      display: flex;
      align-items: center;
      img {
        display: block;
        margin-right: 2px;
      }
    }
    &-name {
      @include font('Inter', 16px, 400);
      line-height: 24px;
      letter-spacing: -0.02em;
      color: $text-color--grey-img-description;
    }
  }
}
</style>
