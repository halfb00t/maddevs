<template>
  <section class="chat">
    <button
      class="chat__button"
      @click="toggleModal"
    >
      <ChatIcon
        :is-visible="isVisible"
      />
    </button>
    <ChatModal
      v-if="isVisible"
      class="chat__modal"
      @close="toggleModal"
    />
  </section>
</template>

<script>
import ChatIcon from '@/components/core/chat/ChatIcon'
import ChatModal from '@/components/core/chat/ChatModal'

export default {
  name: 'Chat',

  components: {
    ChatIcon,
    ChatModal,
  },

  data() {
    return {
      isVisible: false,
    }
  },

  mounted() {
    document.addEventListener('keydown', this.onKeydown)
  },

  destroyed() {
    document.removeEventListener('keydown', this.onKeydown)
  },

  methods: {
    toggleModal() {
      this.isVisible = !this.isVisible
    },

    onKeydown(e) {
      if (e.key === 'Escape') {
        this.isVisible = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat {
  &__modal {
    position: fixed;
    right: 25px;
    bottom: 80px;
    width: 350px;
    -webkit-box-shadow: 0px 0px 28px 5px rgba(0,0,0,0.53);
    box-shadow: 0px 0px 28px 5px rgba(0,0,0,0.53);
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 420px) {
      inset: 0;
      background: $bgcolor--white-primary;
      width: 100%;
      border-radius: 0;
    }
  }

  &__button {
    background: transparent;
    border: none;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
}
</style>
