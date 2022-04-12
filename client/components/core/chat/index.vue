<template>
  <section>
    <section @click="openModal">
      <ChatIcon
        :is-visible="isVisible"
      />
    </section>
    <ChatModal
      v-if="isVisible"
      class="modal"
      @close="closeModal"
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

  beforeMount() {
    document.addEventListener('keydown', this.onKeydown)
  },

  destroyed() {
    document.removeEventListener('keydown', this.onKeydown)
  },

  methods: {
    openModal() {
      this.isVisible = !this.isVisible
    },

    closeModal() {
      this.isVisible = false
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
.modal {
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
</style>
