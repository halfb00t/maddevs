<template>
  <section
    :class="['description-slice',
             `description-slice--${colorTheme}-theme`,
    ]"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container description-slice__container"
      :data-aos="animation"
      data-testid="description-slice__container"
    >
      <div
        v-for="(step) in steps"
        :key="step.title"
        class="description"
        data-testid="description"
        :style="{ maxWidth }"
      >
        <div class="description__icons">
          <img
            v-lazy-load
            :data-src="step.image && step.image.url"
            :alt="step.image && step.image.alt || 'Image'"
            width="32"
            height="32"
            class="description__main-icon"
          >
        </div>
        <div class="description__text">
          <h3 class="description__title">
            {{ step.title }}
          </h3>
          <p class="description__description">
            {{ step.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'DescriptionSlice',

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
      maxWidth: this.slice.primary.maxWidth,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },

    colorTheme() {
      if (this.slice.primary.colorTheme === 'black') return 'black'
      return 'white'
    },
  },
}
</script>

<style lang="scss" scoped>
.description-slice {
  &--black-theme {
    .description-slice__title {
      color: $text-color--white;
    }
  }

  &--white-theme {
    .description-slice__title {
      color: $text-color--black-lighter;
    }
  }
  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.description {
  display: flex;
  text-align: left;
  padding: 60px 0;
  border-bottom:1px solid #CFCFD0;
  border-top:1px solid #CFCFD0;
  &:first-child {
    border-top:none;
    padding-top: 0;
  }

  @media screen and (max-width: 960px) {
    padding: 48px 0;
    &:first-child {
      border-top:none;
      padding-top: 0;
    }
  }

  &__main-icon {
    width: 32px;
  }

  &__text {
    display: flex;
    margin-left: 16px;
    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
  }

  &__title {
    @include font('Inter', 24px, 600);
    line-height: 29px;
    letter-spacing: -1.3%;
    margin:0 40px 24px 0;
    flex: 0 0 200px;
    @media screen and (max-width: 960px) {
      flex: none;
    }
  }

  &__description {
    @include font('Inter', 17px, 400);
    line-height: 28px;
    letter-spacing: -1.3%;
    @media screen and (max-width: 960px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
