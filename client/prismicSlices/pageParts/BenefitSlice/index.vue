<template>
  <section
    class="benefit-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="benefit-slice__container container"
      data-testid="benefit-animation-test"
      :data-aos="animation"
    >
      <component
        :is="tag"
        class="benefit-slice__title"
        v-html="title"
      />
      <div class="benefit-slice__cards">
        <div
          v-for="(benefit, i) in benefits"
          :key="`benefit-${i}`"
          class="benefit-slice__card"
          data-testid="benefit-test"
        >
          <div class="benefit-slice__icon-container">
            <img
              v-lazy-load
              :data-src="benefit.icon && benefit.icon.url"
              :alt="(benefit.icon && benefit.icon.alt) || 'Image'"
              :width="
                benefit.icon &&
                  benefit.icon.dimensions &&
                  benefit.icon.dimensions.width
              "
              :height="
                benefit.icon &&
                  benefit.icon.dimensions &&
                  benefit.icon.dimensions.height
              "
              class="benefit-slice__icon"
            >
          </div>
          <p
            class="benefit-slice__description"
            v-html="benefit.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CardGridMain',

  mixins: [
    animateOnScrollMixin({
      offset: 200,
      delay: 50,
      anchorPlacement: 'top-center',
      duration: 1000,
      once: true,
    }),
  ],

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
      title: this.slice.primary.text,
      tag: this.slice.primary.tag,
      animation: this.slice.primary.animation,
      benefits: this.slice.items,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.benefit-slice {
  &__container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 24px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  &__title {
    letter-spacing: -1.3px;
    @include font("Inter", 42px, 700);
    line-height: 46px;
    color: $text-color--red;
    max-width: 350px;
  }

  &__card {
    padding: 28px 26px 70px;
    background-color: $bgcolor--silver;
    border-radius: 4px;
  }

  &__icon-container {
    width: 32px;
    height: 38px;
    margin-bottom: 17px;
  }

  &__icon {
    display: block;
    max-width: 100%;
    height: auto;
  }

  &__description {
    line-height: 24px;
    letter-spacing: -0.013em;
    color: $text-color--black-oil;
  }
  @media screen and (max-width: 1100px) {
    &__title {
      font-size: 38px;
    }
    &__card {
      padding-bottom: 50px;
    }
  }

  @media screen and (max-width: 980px) {
    &__container {
      grid-template-columns: 1fr;
    }

    &__title {
      max-width: 100%;
      padding: 0 30px;
      text-align: center;
    }
    &__card {
      padding-bottom: 26px;
    }
  }
  @media screen and (max-width: 675px) {
    &__title {
      padding: 0;
      text-align: left;
    }
    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
    &__card {
      padding: 16px 16px;
    }
  }

  @media screen and (max-width: 350px) {
    &__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
