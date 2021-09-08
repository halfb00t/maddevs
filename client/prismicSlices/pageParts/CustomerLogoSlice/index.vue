<template>
  <section
    class="customer-logo-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <div
        :data-aos="animation"
        class="customer-logo-slice_list"
      >
        <div
          v-for="(customer, i) of customers"
          :key="`customer-logo-slice-${i}`"
          class="customer-logo-slice_logo"
        >
          <img
            width="143"
            height="64"
            :src="customer.logo.url"
            :alt="customer.logo.alt"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CustomerLogoSlice',

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      animation: this.slice.primary.animation,
      title: this.slice.primary.title,
      description: this.slice.primary.description,
      customers: this.slice.items,
      button: {
        link: this.slice.primary.buttonLink,
        text: this.slice.primary.buttonText,
      },
    }
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'customer-logo-slice--white-theme'
      return 'customer-logo-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.customer-logo-slice {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-gap: 20px;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 1160px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 14px;
    }

    @media only screen and (max-width: 834px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 520px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 360px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &_logo {
    width: 100%;
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

    @media only screen and (max-width: 1024px) {
      min-height: 81px;

      img {
        width: 75px;
        height: 33px;
      }
    }
  }

  &_link {
    display: block;
    width: 100%;
    margin-top: 50px;
    /deep/ .ui-button {
      padding: 25px;
      line-height: 20px;
      &:hover {
        background-color: lighten($bgcolor--red, 10%) !important;
      }
    }
    @media screen and (max-width: 1024px) {
      margin-top: 32px;
      /deep/ .ui-button {
        padding: 14px 25px;
      }
    }
  }

  // ---- Themes ---- //
  &--white-theme {
    background-color: $bgcolor--white-primary;
    /deep/ .customer-logo-slice {
      &_title,
      &_description {
        color: $text-color--black-oil;
      }
      &_logo {
        background-color: #fff;
      }
    }
  }
  &--black-theme {
    background-color: $bgcolor--black;
    /deep/ .customer-logo-slice {
      &_title {
        color: $text-color--white-primary;
      }
      &_description {
        color: $text-color--white;
      }
      &_logo {
        background-color: #191A1B;
      }
    }
  }
}
</style>
