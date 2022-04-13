<template>
  <section class="chat-wrapper">
    <CloseIcon v-if="isVisible" />
    <MessageIcon v-else />
  </section>
</template>

<script>
import MessageIcon from '@/components/core/chat/ChatIcon/MessageIcon'
import CloseIcon from '@/components/core/chat/ChatIcon/CloseIcon'

export default {
  name: 'ChatIcon',

  components: {
    MessageIcon,
    CloseIcon,
  },

  props: {
    isVisible: {
      type: Boolean,
      default: false,
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
</style>
