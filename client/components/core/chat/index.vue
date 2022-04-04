<template>
  <div>
    <div
      class="chat-wrapper"
      :class="{ active: !isShow }"
      @click.stop="openModal"
    >
      <MessageIcon v-if="!isShow" />
      <CloseIcon v-else-if="isShow" />
    </div>
    <div
      v-if="isShow"
      class="chat-modal"
    >
      <ChatModal
        @close="closeModal"
      />
    </div>
  </div>
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
}

.active {
  background-color: $bgcolor--maximum-red;
}

.chat-modal {
  position: absolute;
  right: 80px;
  bottom: 0;
  width: 339px;
}
</style>
