<template>
  <section
    class="customer-logo-slice"
    :class="colorThemeClass"
    :style="{ 'background-color': sliceBackground }"
  >
    <div
      class="container"
    >
      <div
        data-testid="customer-logo-slice-container"
        :data-aos="animation"
        class="customer-logo-slice_list"
      >
        <div
          v-for="(customer, i) of customers"
          :key="`customer-logo-slice-${i}`"
          class="customer-logo-slice_logo"
          data-testid="customer-logo-slice-item"
        >
          <img
            v-lazy-load
            :data-src="customer.logo.url"
            :alt="customer.logo.alt || 'Image'"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

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
      customers: this.slice.items,
      colorThemeClass: (this.slice?.primary?.colorTheme === 'black') ? 'customer-logo-slice--black-theme' : 'customer-logo-slice--white-theme',
      sliceBackground: setSliceBackground(this.slice?.primary?.colorTheme),
    }
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
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 1024px) {
      gap: 14px;
    }
  }

  &_logo {
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
    /deep/ .customer-logo-slice {
      &_title,
      &_description {
        color: $text-color--black-oil;
      }
    }
  }

  &--black-theme {
    /deep/ .customer-logo-slice {
      &_title {
        color: $text-color--white-primary;
      }

      &_description {
        color: $text-color--white;
      }

      &_logo {
        background-color: $bgcolor--eerie-black;
      }
    }
  }
}
</style>
