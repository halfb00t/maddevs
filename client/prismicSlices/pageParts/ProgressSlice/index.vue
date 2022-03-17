<template>
  <section
    :class="['progress-slice',
             `progress-slice--${colorTheme}-theme`,
    ]"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container"
      :data-aos="animation"
      data-testid="progress-slice__container"
    >
      <h2
        class="progress-slice__title"
        v-html="title || 'Progress'"
      />
      <div
        class="progress-slice__list"
        :style="cssVars"
      >
        <div
          v-for="(step) in steps"
          :key="step.title"
          class="progress"
          data-testid="progress"
        >
          <div class="progress__icons">
            <img
              v-lazy-load
              :data-src="step.image && step.image.url"
              :alt="step.image && step.image.alt || 'Image'"
              width="48"
              height="63"
              class="progress__main-icon"
            >
            <img
              v-if="step.arrow"
              v-lazy-load
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/${colorTheme}/arrow.svg`)"
              width="165"
              height="65"
              class="progress__arrow-icon"
              alt="Arrow"
            >
          </div>
          <div class="progress__text">
            <h3 class="progress__title">
              {{ step.title }}
            </h3>
            <p class="progress__description">
              {{ step.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'ProgressSlice',

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
      steps: this.slice.items,
      title: this.slice.primary.title,
      animation: this.slice.primary.animation,
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
      colorTheme: (this.slice.primary.colorTheme === 'black') ? 'black' : 'white',
    }
  },

  computed: {
    cssVars() {
      return {
        '--frame': this.steps.length,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.progress-slice {
  &--black-theme {
    .progress-slice__title {
      color: $text-color--black-lighter;
    }

    /deep/ .progress {
      &__title {
        color: $text-color--red;
      }

      &__description {
        color: $text-color--black-lighter;
      }
    }
  }

  &--white-theme {
    .progress-slice__title {
      color: $text-color--white;
    }

    /deep/ .progress {
      &__title {
        color: $text-color--red;
      }

      &__description {
        color: $quick-project-description-color;
      }
    }
  }

  &__title {
    @include font('Poppins', 62px, 700);
    line-height: 74px;
    letter-spacing: -1px;
    margin-bottom: 30px;
    text-align: center;
    @media screen and (max-width: 1024px) {
      font-size: 36px;
      line-height: 43px;
      margin-bottom: 36px;
    }
  }

  &__list {
    grid-template-columns: repeat(var(--frame), 1fr);
    display: grid;
    grid-gap: 4%;
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
}

.progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    text-align: left;
    flex-direction: row;
    align-items: flex-start;
  }

  &__icons {
    display: flex;
  }

  &__main-icon,
  &__arrow-icon {
    display: block;
    height: 65px;
  }

  &__main-icon {
    width: 32px;
    margin-bottom: 8px;
    padding: 0 10px;
    @media screen and (max-width: 960px) {
      width: 24px;
    }
    @media screen and (max-width: 767px) {
      width: 28px;
    }
  }

  &__arrow-icon {
    width: 16vw;
    max-width: 165px;
    position: absolute;
    margin-left: 4.7vw;
    margin-bottom: 3px;
    opacity: 0.3;
    @media screen and (max-width: 1280px) {
      width: 10vw;
      margin-left: 5.7vw;
    }
    @media screen and (max-width: 960px) {
      width: 8vw;
      max-width: 84px;
      margin-left: 7.5vw;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  &__text {
    @media screen and (max-width: 767px) {
      margin-top: 16px;
      margin-left: 13px;
    }
  }

  &__title {
    @include font('Poppins', 32px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    text-transform: capitalize;
    text-align: center;

    @media screen and (max-width: 1260px) {
      font-size: 26px;
      line-height: 25px;
    }

    @media screen and (max-width: 1020px) {
      font-size: 20px;
      line-height: 21px;
    }

    @media screen and (max-width: 960px) {
      font-size: 18px;
      line-height: 21px;
    }
    @media screen and (max-width: 767px) {
      text-align: left;
      font-size: 27px;
      line-height: 32px;
    }
  }

  &__description {
    @include font('Inter', 14px, 400);
    margin-top: 8px;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: center;
    @media screen and (max-width: 960px) {
      margin-top: 4px;
      font-size: 10px;
      line-height: 15px;
    }
    @media screen and (max-width: 767px) {
      text-align: left;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
