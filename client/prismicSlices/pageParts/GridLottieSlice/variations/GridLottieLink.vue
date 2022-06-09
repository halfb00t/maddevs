<template>
  <div class="container">
    <div class="grid-lottie__grid">
      <Component
        :is="item.link && item.link.url ? 'a' : 'div'"
        v-for="item in items"
        :key="item['lottie-animation']"
        :href="(item.link && item.link.url) ? item.link.url : null"
        :target="(item.link && item.link.url) ? '_self' : null"
        :class="[
          `card-item--lottie-${item.lottiePosition}`,
          item.alignText ? `card-item--text-${item.alignText}` : null,
          item.fullWidth ? 'card-item--full-width' : null,
        ]"
        class="card-item"
        data-testid="grid-lottie-animation-item"
        :style="{ backgroundColor: item.background || null }"
        @click="sendClickCardEvent"
      >
        <div
          v-if="item['lottie-animation']"
          class="card-item__lottie"
          :style="{
            maxWidth: item.width ? `${item.width}px` : null,
            height: item.height ? `${item.height}px` : null,
          }"
        >
          <LottieMad
            :id="item['lottie-animation']"
            :lottie-link="$getMediaFromS3(`/images/${item['lottie-S3-path'] + item['lottie-animation']}.json`)"
            :height="item.lottieHeight"
            :autoplay="true"
          />
        </div>
        <div
          class="card-item__content"
          v-html="renderCardContent($prismic.asHtml(item.content))"
        />
        <UIArrowButton
          v-if="item.link && item.link.url"
          class="card-item__button"
        />
      </Component>
    </div>
  </div>
</template>

<script>
import LottieMad from '@/components/shared/LottieMad'
import UIArrowButton from '@/components/shared/UIArrowButton'
import { cardClickEvent } from '@/analytics/events'

export default {
  name: 'GridLottieLink',

  components: {
    LottieMad,
    UIArrowButton,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    renderCardContent(content) {
      if (typeof content !== 'string') return ''
      return content
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
    },

    sendClickCardEvent() {
      cardClickEvent.send()
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-lottie {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1260px) {
      grid-gap: 24px;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
}

.card-item {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 80px;
  color: $text-color--white-primary;
  background-color: $bgcolor--black-pale;
  @media screen and (max-width: 1024px) {
    padding: 60px;
    &--lottie-bottom {
      padding-bottom: 0;
    }
  }
  @media screen and (max-width: 580px) {
    padding: 32px;
    &--lottie-bottom {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 24px;
    &--lottie-bottom {
      padding-bottom: 0;
    }
  }

  &--full-width {
    grid-column: auto/span 2;
    @media screen and (max-width: 1024px) {
      grid-column: auto;
    }

    /deep/ .card-item__button {
      align-self: center;
      @media screen and (max-width: 1024px) {
        align-self: flex-start;
      }
    }
  }

  &--text-center {
    /deep/ .card-item__content {
      align-self: center;
      text-align: center;

      @media screen and (max-width: 1024px) {
        align-self: flex-start;
        text-align: left;
      }
    }
  }

  &--lottie-bottom {
    padding-bottom: 0;
    /deep/ .card-item {
      &__content {
        order: 1;
        font-size: 40px;
        line-height: 51px;
        @media screen and (max-width: 1260px) {
          font-size: 35px;
          line-height: 45px;
        }
        @media screen and (max-width: 1024px) {
          font-size: 30px;
          line-height: 37px;
        }

        @media screen and (max-width: 430px) {
          font-size: 22px;
          line-height: 26.63px;
        }
      }
      &__button {
        order: 2;
      }
      &__lottie {
        order: 3;
        margin: 0 auto;
        @media screen and (max-width: 1024px) {
          margin-top: 56px;
        }

        @media screen and (max-width: 430px) {
          margin-top: 24px;
        }
      }
    }
  }

  &:hover {
    /deep/ .card-item__button {
      background-color: $text-color--white-primary;
      color: $text-color--black-oil;
    }
  }

  &__lottie {
    order: 1;
    display: flex;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 60px;
    @media screen and (max-width: 580px) {
      margin-bottom: 40px;
    }

    @media screen and (max-width: 430px) {
      margin-bottom: 24px;
    }
  }

  &__content {
    @include font("Inter", 37px, 700);
    order: 2;
    flex: 1;
    line-height: 51px;
    letter-spacing: -0.013em;
    word-break: break-word;
    width: 100%;
    max-width: 1053px;
    @media screen and (max-width: 1260px) {
      font-size: 35px;
      line-height: 45px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 30px;
      line-height: 37px;
    }

    @media screen and (max-width: 430px) {
      font-size: 22px;
      line-height: 26.63px;
    }
  }

  &__button {
    order: 3;
    @media screen and (max-width: 430px) {
      width: 30px;
      min-width: 30px;
      height: 30px;
      margin-top: 24px;
    }
  }
}
</style>
