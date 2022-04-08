<template>
  <div class="chat-actions">
    <button
      v-for="button in buttons"
      :key="button.text"
      class="chat-actions__btn"
      @click="changeModal(button.id)"
    >
      {{ button.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ChatActions',

  data() {
    return {
      buttons: [
        { text: 'Software development', id: 0 },
        { text: 'Partnership', id: 1 },
        { text: 'Employment', id: 2 },
      ],
    }
  },

  methods: {
    changeModal(id) {
      this.$parent.$emit('changeModal', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-actions {
  &__btn {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 142%;
    color: $text-color--venetian-red;
    padding: 14px 0;
    border: 1px solid $border-color--venetian-red;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 14px;
    opacity: .5;
    transition: all 0.3s ease;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      border: 1px solid $border-color--venetian-red;
      background-color: $bgcolor--venetian-red;
      color: $text-color--white-primary;
      opacity: 1;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }
}
</style>
