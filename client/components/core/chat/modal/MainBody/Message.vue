<template>
  <div class="message-body">
    <div
      v-if="logoName"
      class="message-body__photo"
    >
      <img
        class="message-body__photo--image"
        width="31"
        height="31"
        :src="require(`@/components/core/chat/images/${logoName}`)"
        :alt="altLogo"
      >
    </div>
    <div class="message-body__message">
      <div class="message-body__message--text">
        <span
          class="message-body__message--greeting"
        >
          <slot />
        </span>
        <div
          v-if="position"
          class="message-body__arrow-up"
          :class="`message-body__arrow-${position}`"
        />
      </div>
      <div
        v-if="authorName || authorSpec"
        class="message-body__message--info"
      >
        <span class="message-body__message--name">{{ authorName }} /</span>
        <span class="message-body__message--spec">{{ authorSpec }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',

  props: {
    position: {
      type: String,
      default: '',
    },

    authorName: {
      type: String,
      default: '',
    },

    authorSpec: {
      type: String,
      default: '',
    },

    logoName: {
      type: String,
      default: '',
    },

    altLogo: {
      type: String,
      default: 'Logo',
    },
  },
}
</script>

<style lang="scss" scoped>
.message-body {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  &__arrow-up {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 15px solid $bgcolor--chinese-white;
  }

  &__arrow-left {
    left: -15px;
  }

  &__arrow-right {
    right: -15px;
  }

  &__photo {
    width: 31px;
    height: 31px;
    margin-bottom: 8px;

    &--image {
      width: 100%;
      height: 100%;
    }
  }

  &__message--text {
    padding: 20px;
    background-color: $bgcolor--chinese-white;
    border-radius: 10px;
    position: relative;
    max-width: 190px;
  }

  &__message--greeting {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 142%;
    color: $text-color--black-oil;
  }

  &__message--name,
  &__message--spec {
    color: $text-color--philippine-gray;
    font-size: 11px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    line-height: 27px;
  }

  &__message--name {
    font-weight: 500;
  }
}
</style>
