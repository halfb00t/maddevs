<template>
  <h2 class="customer-university-title">
    <span>
      {{ title }}
    </span>
    <br>
    {{ subtitle }}
  </h2>
</template>
<script>
export default {
  name: 'CustomerUniversityTitle',
  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.customer-university-title {
  @include font('Poppins', 80px, 700);
  font-style: normal;
  line-height: 101%;
  letter-spacing: -0.04em;
  color: $bgcolor--silver;
  margin-bottom: 48px;

  span {
    -webkit-text-stroke: 1.13333px $bgcolor--white;
    color: $text-color--black-oil;
  }

  @media screen and (max-width: 768px) {
    @include font('Poppins', 50px, 700);
    line-height: 104%;
    margin: 42px 0 32px 0;
  }
}
</style>
