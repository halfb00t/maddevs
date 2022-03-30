<template>
  <div>
    <div
      class="chat-wrapper"
      @click="openModal"
    >
      <div class="chat-wrapper__message" />
      <div class="chat-wrapper__arrow" />
    </div>
    <div
      v-if="isShow"
      class="chat-modal"
    >
      <ChatModal @close="closeModal" />
    </div>
  </div>
</template>

<script>
import ChatModal from '@/components/core/chat/modal'

export default {
  name: 'ChatIcon',

  components: {
    ChatModal,
  },

  data() {
    return {
      isShow: false,
    }
  },

  methods: {
    openModal() {
      this.isShow = true
    },

    closeModal(event) {
      this.isShow = event
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  background-color: $bgcolor--venetian-red;
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: $text-color--ruddy;
    transition: all .2s;
  }

  &__message {
    width: 28px;
    height: 22px;
    background: $bgcolor--white-primary;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
  }

  &__arrow {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 11px solid transparent;
    border-right: 15px solid $border-color--white;
    position: absolute;
    top: 42%;
    left: 35%;
  }
}

.chat-modal {
  position: absolute;
  right: 60px;
  bottom: 80px;
}
</style>
