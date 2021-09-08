<template>
  <section
    id="transparent-header-area"
    data-testid="start-screen-slice"
    class="start-screen-slice"
    :style="{ background: sliceGradient }"
  >
    <img
      :src="image && image.url"
      :alt="image && image.alt"
      :style="{
        opacity: imageOpacity,
        backgroundColor: sliceBackground,
      }"
      data-testid="start-screen-slice__image"
      class="start-screen-slice__image"
    >
    <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
    <div class="container">
      <div
        ref="sectionText"
        :style="{ opacity: sectionTextOpacity }"
        class="start-screen-slice__content"
      >
        <h1
          data-testid="start-screen-slice__title"
          class="start-screen-slice__title"
          v-html="title"
        />
        <p
          v-if="subtitle"
          data-testid="start-screen-slice__subtitle"
          class="start-screen-slice__subtitle"
          v-html="subtitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'StartScreen',
  mixins: [changeSectionTextOpacityMixin('sectionText')],
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
      imageOpacity: this.slice?.primary?.imageOpacity,
      image: this.slice?.primary?.image,
      title: this.slice?.primary?.title,
      subtitle: this.slice?.primary?.subtitle,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },

    sliceGradient() {
      if (this.slice?.primary?.gradientColor === 'white') return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #ffffff)'
      if (this.slice?.primary?.gradientColor === 'grey') return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #f5f7f9)'
      if (this.slice?.primary?.gradientColor === 'black') return 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213)'
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.start-screen-slice {
  position: relative;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213);
  overflow: hidden;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    background-color: $bgcolor--black;
  }
  &__content {
    text-align: center;
    z-index: 2;
    max-width: 1113px;
  }
  &__title {
    @include font('Inter', 64px, 700);
    line-height: 79px;
    letter-spacing: -2px;
    color: $text-color--white-primary;
    @media screen and (max-width: 768px) {
      font-size: 42px;
      line-height: 48px;
    }
    /deep/ .large {
      @include font('Inter', 110px, 800);
      line-height: 105px;
      @media screen and (max-width: 768px) {
        font-size: 56px;
        line-height: 48px;
      }
    }
  }
  &__subtitle {
    @include font('Inter', 32px, 600);
    line-height: 44px;
    letter-spacing: -1px;
    margin-top: 10px;
    color: $text-color--white-primary;
    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 44px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 8px;
      font-size: 21px;
      line-height: 30px;
    }
  }
  /deep/ br {
    @media only screen and (max-width: 520px) {
      display: none;
    }
  }
}
</style>
