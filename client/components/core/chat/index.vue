<template>
  <section>
    <div
      class="chat-wrapper"
      :class="{ active: !isShow }"
      @click.stop="openModal"
    >
      <MessageIcon v-if="!isShow" />
      <CloseIcon v-else />
    </div>
    <div
      v-if="isShow"
      class="chat-modal"
    >
      <ChatModal
        @close="closeModal"
      />
    </div>
  </section>
</template>

<script>
import ChatModal from '@/components/core/chat/modal'
import MessageIcon from '@/components/core/chat/MessageIcon'
import CloseIcon from '@/components/core/chat/CloseIcon.vue'

export default {
  name: 'ChatIcon',

  components: {
    ChatModal,
    MessageIcon,
    CloseIcon,
  },

  data() {
    return {
      isShow: false,
    }
  },

  beforeMount() {
    document.addEventListener('keydown', this.onKeydown)
  },

  destroyed() {
    document.removeEventListener('keydown', this.onKeydown)
  },

  methods: {
    openModal() {
      this.isShow = !this.isShow
    },

    closeModal() {
      this.isShow = !this.isShow
    },

    onKeydown(e) {
      if (e.keyCode === 27) {
        this.closeModal()
      }
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

  @media screen and (max-width: 480px) {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: -1;
  }
}

.active {
  background-color: $bgcolor--maximum-red;
}

.chat-modal {
  position: absolute;
  right: 80px;
  bottom: 0;
  width: 339px;

  @media screen and (max-width: 480px) {
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>
