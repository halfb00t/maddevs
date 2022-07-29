<template>
  <div class="twitter-card">
    <div class="twitter-card__inner">
      <img
        v-lazy-load
        :data-src="$getMediaFromS3('/images/Cases/lido/svg/three-dots.svg')"
        alt="Three dots"
        class="twitter-card__inner-three-dots"
        width="22"
        height="4"
      >
      <div class="twitter-card__inner-header m-24_bottom">
        <img
          v-lazy-load
          :data-src="$getMediaFromS3('/images/Cases/lido/svg/lido-twitter-logo.svg')"
          alt="Lido Twitter Logo"
          class="twitter-card__inner-logo"
          width="56"
          height="56"
        >
        <div class="twitter-card__inner-header-content">
          <TextParagraph class="twitter-card__inner-header-text">
            Lido
          </TextParagraph>
          <TextParagraph class="twitter-card__inner-header-company-tag twitter-card__header-text">
            @Lidofinance
          </TextParagraph>
        </div>
      </div>
      <slot />
      <div class="twitter-card__inner-footer m-24_top">
        <TextParagraph class="twitter-card__inner-footer-text">
          Twitter Web App
        </TextParagraph>
      </div>
    </div>
    <TextParagraph class="twitter-card__source case_text-align-center m-12_top">
      Source:
      <a
        :href="sourceLink"
        class="twitter-card__source-link"
        target="_blank"
      >
        https://twitter.com/LidoFinance
      </a>
    </TextParagraph>
  </div>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'TwitterCard',

  components: { TextParagraph },

  props: {
    sourceLink: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.twitter-card {
  &__inner {
    background: $bgcolor--silver;
    border-radius: 10px;
    border: 1px solid $border-color--grey-20-percent;
    position: relative;
    padding: 27px 32px;

    @media screen and (max-width: 480px) {
      padding-right: 22px;
    }

    &-three-dots {
      position: absolute;
      top: 27px;
      right: 52px;

      @media screen and (max-width: 480px) {
        right: 22px;
      }
    }

    &-header {
      display: flex;
      align-items: center;
      column-gap: 19px;

      &-text {
        font-size: 16px;
        font-weight: 700;
        line-height: 22.85px;
        color: $text-color--chinese-black;
      }

      &-company-tag {
        font-weight: 400;
        color: $text-color--grey-pale;
      }
    }

    &-footer {
      &-text {
        font-size: 16px;
        line-height: 166%;
        letter-spacing: -0.035em;
        color: $text-color--grey-pale;
      }
    }
  }

  &__source {
    font-size: 14px;
    line-height: 166%;
    color: $text-color--grey-opacity-40-percent;

    &-link {
      color: $text-color--grey-opacity-40-percent;
      text-decoration: underline;
    }
  }
}
</style>
