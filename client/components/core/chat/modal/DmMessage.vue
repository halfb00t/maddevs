<template>
  <div class="message-body">
    <div class="message-body__photo">
      <img
        class="message-body__photo--image"
        width="31"
        height="31"
        :src="require('@/components/core/chat/images/anatoly.jpg')"
        alt="Fedorenko"
      >
    </div>
    <div class="message-body__message">
      <div class="message-body__message--text">
        <span class="message-body__message--greeting">Hello! How can we help you?</span>
        <div class="message-body__arrow-up" />
      </div>
      <div class="message-body__message--info">
        <span class="message-body__message--name">Anatoliy Fedorenko / </span>
        <span class="message-body__message--spec">Delivery Manager</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DmMessage',
}
</script>

<style lang="scss" scoped>
.message-body {
  display: flex;
  align-items: flex-end;

  &__arrow-up {
    position: absolute;
    bottom: 0;
    left: -15px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 15px solid $bgcolor--chinese-white;
  }

  &__photo--image {
    margin-right: 22px;
  }

  &__message--text {
    padding: 20px;
    background-color: $bgcolor--chinese-white;
    border-radius: 10px;
    position: relative;
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
    line-height: 20px;
  }

  &__message--name {
    font-weight: 500;
  }
}
</style>
