<template>
  <div
    id="transparent-header-area"
    class="careers-banner"
    :class="[`careers-banner_${currentLanguage}`]"
  >
    <picture>
      <source
        :srcset="[$getMediaFromS3('/images/Careers/webp/office_black.webp') + ' ', $getMediaFromS3('/images/Careers/webp/office_black@2x.webp 2x')]"
        type="image/webp"
        class="careers-banner__image"
      >
      <img
        :src="$getMediaFromS3('/images/Careers/jpg/office_black.jpg')"
        :srcset="$getMediaFromS3('/images/Careers/jpg/office_black@2x.jpg')"
        width="1239"
        height="606"
        class="careers-banner__image"
        alt="Office"
      >
    </picture>
    <div
      ref="sectionText"
      class="container"
      :style="{opacity: sectionTextOpacity}"
    >
      <h1 class="careers-banner_title">
        {{ $t('careers.section-1.title') }}
      </h1>
      <p class="careers-banner_description">
        {{ $t('careers.section-1.description') }}
      </p>
      <button
        class="careers-banner_btn"
        @click="changeLocale"
      >
        <img
          v-if="currentLanguage === 'en'"
          src="@/assets/img/Careers/svg/russian-flag.svg"
          alt="Russian flag"
        >
        <img
          v-if="currentLanguage === 'ru'"
          src="@/assets/img/Careers/svg/uk-flag.svg"
          alt="UK flag"
        >
        {{ $t('careers.section-1.btn') }}
      </button>
    </div>
  </div>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'CareersBanner',

  mixins: [changeSectionTextOpacityMixin('sectionText')],

  computed: {
    currentLanguage() {
      return this.$i18n?.locale || 'en'
    },
  },

  methods: {
    changeLocale() {
      const lang = this.$i18n.locale === 'en' ? 'ru' : 'en'
      this.$i18n.setLocale(lang)
      return lang
    },
  },
}
</script>

<style lang="scss" scoped>
.careers-banner {
  position: relative;
  height: 100vh;
  min-height: 568px;
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213 100%);
  overflow: hidden;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    object-position: top;
    opacity: 0.48;
  }

  &_title,
  &_description {
    text-align: center;
  }

  &_title {
    margin-bottom: 56px;
    @include font('Inter', 100px, 900);
    letter-spacing: -0.04em;
    line-height: 96px;
    color: $text-color--white;

    @media screen and (max-width: 991px) {
      margin-top: 70px;
    }
  }

  &_btn {
    padding: 12px 24px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    color: #101113;
    border: none;
    @include font('Inter', 16px, 400);
    letter-spacing: -0.013em;
    cursor: pointer;

    img {
      width: 18px;
      margin-right: 10px;
    }

    &:active {
      background-color: #dadada;
    }
  }

  &_img {
    width: 100%;
    height: 100%;
  }

  &_description {
    max-width: 1028px;
    margin: 0 auto;
    @include font('Inter', 32px, 400);
    line-height: 44px;
    letter-spacing: -0.013em;
    color: #F4F4F4;
    margin-bottom: 56px;

    span {
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 98px;

    &_title {
      margin-bottom: 26px;
      font-size: 76px;
      line-height: 76px;
    }

    &_description {
      font-size: 24px;
      line-height: 31px;
    }
  }

  @media screen and (max-width: 620px) {
    margin-bottom: 108px;

    &_title {
      max-width: 250px;
      margin-bottom: 34px;
      font-size: 48px;
      line-height: 49px;
    }

    &_description {
      margin-bottom: 65px;
    }
  }
}
</style>
