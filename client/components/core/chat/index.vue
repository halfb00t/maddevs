<template>
  <section>
    <button
      class="chat-wrapper"
      :class="{ active: !isShow }"
      @click="openModal"
    >
      <MessageIcon v-if="!isShow" />
      <CloseIcon v-else />
    </button>
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
      this.isShow = false
    },

    onKeydown(e) {
      if (e.key === 'Escape') {
        this.closeModal()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: $bgcolor--venetian-red;
  border-radius: 50%;
  transition: all .2s;
  border: none;
  cursor: pointer;

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
  right: 75px;
  bottom: 0;
  width: 339px;
}
</style>
