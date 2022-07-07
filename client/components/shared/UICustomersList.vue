<template>
  <section class="customers">
    <div class="container">
      <div class="customers__list">
        <div
          v-for="customer in customers"
          :key="customer"
          :style="backgroundColor"
          class="customers__logo"
          data-testid="icon-wrapper"
        >
          <img
            v-lazy-load
            :data-src="fileName(customer)"
            :alt="customer || 'Image'"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UICustomersList',

  props: {
    customers: {
      type: Array,
      default: () => [],
    },

    light: {
      type: Boolean,
      default: false,
    },

    iconBackground: {
      type: String,
      default: 'transparent',
    },
  },

  computed: {
    backgroundColor() {
      if (this.iconBackground) return `background-color: ${this.iconBackground}`
      return null
    },
  },

  methods: {
    fileName(name) {
      if (this.light) return require(`@/assets/img/Projects/svg/${name}-black.svg`)
      return require(`@/assets/img/Projects/svg/${name}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.customers {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__list {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 1024px) {
      gap: 14px;
    }
  }

  &__logo {
    width: 16%;
    max-width: 190px;
    min-height: 111px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 8px;
    box-sizing: border-box;

    img {
      width: 143px;
      height: 64px;
      display: block;
    }

    @media only screen and (max-width: 1160px) {
      width: 19%;
    }

    @media only screen and (max-width: 1024px) {
      width: 15%;
      min-height: 81px;

      img {
        width: 75px;
        height: 33px;
      }
    }

    @media only screen and (max-width: 834px) {
      width: 18%;
    }

    @media only screen and (max-width: 640px) {
      width: 22.99%;
    }

    @media only screen and (max-width: 520px) {
      width: 29%;
    }

    @media only screen and (max-width: 360px) {
      width: 45%;
    }
  }
}
</style>
