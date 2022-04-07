<template>
  <ul class="buttons">
    <li
      v-for="button in buttons"
      :id="button.id"
      :key="button.text"
      class="buttons__button"
      @click="changeModal"
    >
      {{ button.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ChatButtons',

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
    changeModal(e) {
      this.$parent.$emit('changeModal', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.buttons {
  &__button {
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
