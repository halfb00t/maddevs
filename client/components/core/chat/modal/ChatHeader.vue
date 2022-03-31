<template>
  <div class="chat-header">
    <div class="chat-header__chat-icon">
      <div class="chat-header__message">
        <img
          class="chat-header__message-icon"
          :src="require('@/components/core/chat/images/shape.jpg')"
          alt="Shape"
          width="14"
          height="13"
        >
        <div class="chat-header__message-arrow" />
      </div>
    </div>
    <p class="chat-header__paragraph">
      Hey there, 👋<br>Welcome to Mad Devs website!
    </p>
    <div
      class="chat-header__close"
      @click.self="onClose"
    />
  </div>
</template>

<script>
export default {
  name: 'ChatHeader',
}
</script>
