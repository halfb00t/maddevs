<template>
  <div
    id="transparent-header-area"
    class="open-source-banner"
  >
    <picture>
      <source
        :srcset="[
          $getMediaFromS3('/images/OpenSource/webp/programmer.webp') + ' ',
          $getMediaFromS3('/images/OpenSource/webp/programmer@2x.webp') + ' 2x'
        ]"
        type="image/webp"
        class="open-source-banner__image"
      >
      <img
        :src="$getMediaFromS3('/images/OpenSource/png/programmer.png')"
        :srcset="$getMediaFromS3('/images/OpenSource/png/programmer@2x.png') + ' 2x'"
        width="1680"
        height="969"
        class="open-source-banner__image"
        alt="Programmer"
      >
    </picture>
    <div class="container">
      <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
      <div
        ref="sectionText"
        class="open-source-banner__content"
        :style="{opacity: sectionTextOpacity}"
      >
        <h1 class="open-source-banner__title">
          The power <br> of open source
        </h1>
        <p class="open-source-banner__subtitle">
          While we love writing code, nothing excites us more than collaborating with other members of the tech community.
          We love building with new and emerging technologies here at Mad Devs. Making the world a better place, one line of code at a time.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'Banner',
  mixins: [changeSectionTextOpacityMixin('sectionText')],
}
</script>

<style lang="scss" scoped>
.open-source-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 62px;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 75%, $bgcolor--black 100%);
  overflow: hidden;
  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    object-position: top;
  }
  &__content {
    z-index: 2;
    display: block;
    margin: 0 auto;
    max-width: 1028px;
    text-align: center;
  }
  &__title {
    color: $text-color--white;
    font-size: 100px;
    line-height: 96px;
    letter-spacing: -0.04em;
  }
  &__subtitle {
    margin-top: 64px;
    font-size: 32px;
    letter-spacing: -0.013em;
    line-height: 44px;
    color: $text-color--silver;
  }

  @media screen and (max-width: 1024px) {
    height: 85vh;
    &__title {
      font-size: 80px;
      line-height: 88px;
    }
    &__subtitle {
      margin-top: 62px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 52px;
      line-height: 57px;
    }
    &__subtitle {
      margin-top: 21px;
      font-size: 21px;
      line-height: 30px;
    }
  }
}
</style>
