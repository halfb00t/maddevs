<template>
  <div class="success-modal">
    <p class="success-modal__title">
      Thanks for your request!
    </p>
    <p class="success-modal__description">
      We will get back to you within 48 hours
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormSuccess',
}
</script>

<style lang="scss" scoped>
.success-modal {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 121%;
    text-align: center;
    color: $text-color--black-oil;
    margin-bottom: 20px;
  }

  &__description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    text-align: center;
    color: $text-color--black-oil;
    opacity: 0.7;
  }
}
</style>
