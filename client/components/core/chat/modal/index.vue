<template>
  <div class="chat-body">
    <div class="chat-body__header">
      <ChatHeader />
    </div>
    <div class="chat-body__dm-message">
      <DmMessage />
    </div>
    <div class="chat-body__my-message">
      <MyMessage />
    </div>
    <div class="chat-body__buttons">
      <ChatButtons />
    </div>
  </div>
</template>

<script>
import DmMessage from '@/components/core/chat/modal/DmMessage'
import MyMessage from '@/components/core/chat/modal/MyMessage'
import ChatButtons from '@/components/core/chat/modal/ChatButtons'

export default {
  name: 'ChatModal',

  components: {
    DmMessage,
    MyMessage,
    ChatButtons,
  },

  methods: {
    onClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-header {
  padding: 20px;
  background-color: $bgcolor--chinese-black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  min-width: 300px;

  &__message {
    position: relative;
    width: 28px;
    height: 22px;
    background: $bgcolor--white-primary;
    border-radius: 3px;
    z-index: 999;
    margin-right: 10px;
    margin-top: -8px;

    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }

    &-arrow {
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 11px solid transparent;
      border-right: 15px solid $border-color--white;
      position: absolute;
      top: 29%;
      left: 20%;
    }
  }

  &__paragraph {
    color: $text-color--white-primary;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 128.5%;
    letter-spacing: -0.02em;
    margin-right: 30px;
  }

  &__close {
    position: relative;
    width: 13px;
    height: 13px;

    &:hover {
      cursor: pointer;
      .chat-header__close:before, .chat-header__close:after {
        background-color: $bgcolor--grey-selected;
      }
    }

    &:before, &:after {
      position: absolute;
      left: 6px;
      content: ' ';
      height: 13px;
      width: 2px;
      top: 1px;
      background-color: $bgcolor--grey-selected;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}

.chat-body {
  padding: 78px 20px 40px;
  background-color: $bgcolor--white-primary;
  max-width: 300px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &__dm-message {
    margin-bottom: 60px;
  }

  &__my-message {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
  }
}
</style>
