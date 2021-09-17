<template>
  <section
    data-testid="description-slice"
    class="description-slice"
  >
    <div class="container">
      <div class="description-slice__content">
        <h1
          data-testid="description-slice__title"
          class="description-slice__title"
          v-html="title"
        />
        <p
          v-if="subtitle"
          data-testid="description-slice__subtitle"
          class="description-slice__subtitle"
          v-html="subtitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Description',

  props: {
    slice: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  data() {
    return {
      title: this.slice?.primary?.title,
      subtitle: this.slice?.primary?.subtitle,
    }
  },
}
</script>

<style lang="scss" scoped>
.description-slice {
  font-family: Inter;
  font-style: normal;

  &__content {
    padding: 80px;
    background: #1D1D1F;
    border-radius: 4px;
    margin-bottom: 50px;

    @media screen and (max-width: 480px) {
      padding: 32px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 56px;
    line-height: 65px;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    margin-bottom: 40px;

    @media screen and (max-width: 700px) {
      font-size: 30px;
      line-height: 37px;
    }
  }

  &__subtitle {
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -0.013em;
    color: #FFFFFF;

    @media screen and (max-width: 700px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
</style>
