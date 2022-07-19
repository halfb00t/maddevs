<template>
  <div
    id="transparent-header-area"
    class="delivery-model-banner"
  >
    <picture>
      <source
        :srcset="[$getMediaFromS3('/images/DeliveryModels/webp/banner-min.webp') + ' ', $getMediaFromS3('/images/DeliveryModels/webp/banner-min@2x.webp 2x')]"
        type="image/webp"
        class="delivery-model-banner__image"
      >
      <img
        :srcset="$getMediaFromS3('/images/DeliveryModels/jpg/banner-min@2x.jpg')"
        :src="$getMediaFromS3('/images/DeliveryModels/jpg/banner-min.jpg')"
        width="1680"
        height="827"
        class="delivery-model-banner__image"
        alt="Team"
      >
    </picture>
    <div class="container">
      <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
      <div
        ref="sectionText"
        class="delivery-model-banner__content"
        :style="{opacity: sectionTextOpacity}"
      >
        <h1 class="delivery-model-banner__title">
          Delivery models
        </h1>
        <p class="delivery-model-banner__subtitle">
          At Mad Devs, we provide a full range of services aimed at delivering long-term value for both our customers and end users.
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
.delivery-model-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  min-height: 568px;
  padding-top: 62px; // height of header component
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213 100%);
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
    opacity: 0.48;
  }
  &__content {
    z-index: 2;
    display: block;
    margin: 0 auto;
    max-width: 816px;
    text-align: center;
  }
  &__title {
    @include font('Inter', 100px, 800);
    line-height: 105px;
    letter-spacing: -2px;
    color: $text-color--white-primary;
  }
  &__subtitle {
    @include font('Inter', 32px, 600);
    line-height: 44px;
    letter-spacing: -1px;
    margin-top: 20px;
    color: $text-color--white-primary;
  }

  @media screen and (max-width: 1120px) {
    padding-top: 48px;
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 56px;
      line-height: 48px;
    }
    &__subtitle {
      margin-top: 8px;
      font-size: 21px;
      line-height: 30px;
    }
  }
}
</style>
