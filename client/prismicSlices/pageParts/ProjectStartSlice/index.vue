<template>
  <section
    :class="[
      'project-start-slice',
      `project-start-slice--${colorTheme}-theme`,
    ]"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container"
      :data-aos="animation"
    >
      <h2 class="project-start-slice__title">
        {{ title || 'Quick Project Start' }}
      </h2>
      <div class="project-start-slice__list">
        <div
          v-for="(step, idx) in steps"
          :key="step.name"
          class="project-start"
        >
          <div class="project-start__icons">
            <img
              v-lazy-load
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/${colorTheme}/${step.name}.svg`)"
              :alt="step.name"
              width="52"
              height="73"
              class="project-start__main-icon"
            >
            <img
              v-if="idx !== steps.length - 1"
              v-lazy-load
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/${colorTheme}/arrow.svg`)"
              width="165"
              height="65"
              class="project-start__arrow-icon"
              alt="Arrow"
            >
          </div>
          <div class="project-start__text">
            <h3 class="project-start__title">
              {{ step.name }}
            </h3>
            <p class="project-start__description">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
      <UIOutlinedButton
        full-width
        color="red"
        class="project-start-slice__button"
        @click="$refs.modalOrderProjectFromUs.show()"
      >
        Submit your project
      </UIOutlinedButton>
    </div>
    <ModalOrderProjectFromUs
      id="order-project-from-us-modal"
      ref="modalOrderProjectFromUs"
      :location="'\'Submit your project\' button, about page'"
    />
  </section>
</template>

<script>
import { steps } from '@/data/quickProjectStart'
import UIOutlinedButton from '@/components/shared/UIOutlinedButton'

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'ProjectStartSlice',
  components: {
    UIOutlinedButton,
    ModalOrderProjectFromUs: () => import('@/components/core/modals/ModalOrderProjectFromUs'),
  },

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
      steps,
      title: this.slice.primary.title,
      animation: this.slice.primary.animation,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice.primary.background === 'white') return '#fff'
      if (this.slice.primary.background === 'grey') return '#f5f7f9'
      if (this.slice.primary.background === 'black') return '#111213'
      return null
    },

    colorTheme() {
      if (this.slice.primary.colorTheme === 'black') return 'black'
      return 'white'
    },
  },

  methods: {
    show() {
      if (!this.$refs?.modalOrderProjectFromUs?.show) return
      this.$refs.modalOrderProjectFromUs.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.project-start-slice {
  &--black-theme {
    .project-start-slice__title {
      color: $text-color--black-lighter;
    }
    /deep/ .project-start {
      &__title {
        color: $text-color--red;
      }
      &__description {
        color: $text-color--black-lighter;
      }
    }
  }
  &--white-theme {
    .project-start-slice__title {
      color: $text-color--white;
    }
    /deep/ .project-start {
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4%;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
  &__button {
    margin-top: 47px;
    @media screen and (max-width: 960px) {
      margin-top: 37px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.project-start {
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
