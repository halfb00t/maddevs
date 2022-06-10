<template>
  <div class="container">
    <ul class="grid-lottie__grid">
      <li
        v-for="(item, i) in items"
        :key="item.title"
        :class="[
          item.fullWidth ? 'card-item--full-width' : null,
          item.alignText ? `card-item--text-${item.alignText}` : null,
          `card-item-${item.lottiePosition}`,
          !item.lottieAnimation ? 'card-item--without-lottie' : null
        ]"
        :style="{ backgroundColor: item.background || null }"
        class="card-item"
        data-testid="grid-lottie-animation-item"
      >
        <div
          v-if="item.lottieAnimation"
          :class="`card-item__lottie card-item__lottie-${item.lottiePosition}`"
          :style="{
            'maxWidth': item.width ? `${item.width}px` : null,
            'height': item.height ? `${item.height}px` : null
          }"
        >
          <LottieMad
            :id="`${item.lottieAnimation}-${i}`"
            class="case_lottie"
            :height="item.lottieHeight || '395px'"
            :lottie-link="$getMediaFromS3(`${item.lottieAnimation}`)"
            :autoplay="true"
          />
        </div>
        <h2
          v-if="item.title"
          class="card-item__title"
          v-html="item.title"
        />
        <div
          v-if="item.content"
          class="card-item__content"
          v-html="renderCardContent($prismic.asHtml(item.content))"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import LottieMad from '@/components/shared/LottieMad'

export default {
  name: 'GridWithAnimationOptionSlice',

  components: {
    LottieMad,
  },

  props: {
    items: {
      type: Array,
      default: () => ([]),
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
  padding: 80px;
  color: $text-color--white-primary;
  background-color: $bgcolor--black-pale;
  display: grid;
  grid-template-areas:"lottie"  "title"  "content";
  &-bottom{
    padding-bottom: 0;
    grid-template-areas:"title" "content" "lottie";
  }
  &--without-lottie {
    padding-bottom: 80px;
  }

  @media screen and (max-width: 1024px) {
    padding: 60px;
    &-bottom{
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 60px;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 32px;
    &-bottom{
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 32px;
    }
  }

  @media screen and (max-width: 430px) {
    padding: 24px;
    &-bottom{
      padding-bottom: 0;
    }
    &--without-lottie {
      padding-bottom: 24px;
    }
  }

  &--full-width {
    grid-column: auto/span 2;

    @media screen and (max-width: 1024px) {
      grid-column: auto;
    }
  }

  &__lottie {
    max-width: 385px;
    height: 95px;
    margin-bottom: 60px;
    grid-area: lottie;

    @media screen and (max-width: 430px) {
      margin-bottom: 24px;
      height: 75px !important;
    }

    &-bottom {
      max-width: 689px;
      height: auto;
      margin: 40px auto 0;

      @media screen and (max-width: 430px) {
        height: 85px !important;
      }

      @media screen and (max-width: 343px) {
        width: 289px;
        height: 117px;
      }
    }
  }

  &--text-center {
    .card-item__title {
      text-align: center;

      @media screen and (max-width: 1024px) {
        text-align: left;
      }
    }
    ::v-deep p {
      text-align: center;

      @media screen and (max-width: 1024px) {
        text-align: left;
      }
    }
  }

  &__title {
    grid-area: title;
    @include font('Inter', 56px, 800);
    line-height: 65px;
    letter-spacing: -0.04em;
    max-width: 1080px;

    @media screen and (max-width: 580px) {
      font-size: 30px;
      line-height: 37px;
    }

    @media screen and (max-width: 430px) {
      font-size: 22px;
      line-height: 26.63px;
    }
  }

  &__content {
    grid-area: content;
    @include font('Inter', 24px, 600);
    line-height: 38px;
    letter-spacing: -0.013em;
    word-break: break-word;
    max-width: 1080px;

    @media screen and (max-width: 1260px) {
      font-size: 24px;
      line-height: 38px;
    }

    @media screen and (max-width: 580px) {
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (max-width: 430px) {
      font-size: 16px;
      line-height: 23.8px;
    }

    ::v-deep p {
      margin-top: 40px;

      @media screen and (max-width: 430px) {
        margin-top: 16px;
      }
    }

    ::v-deep li {
      font-weight: 400;
      margin-top: 7px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ::v-deep ul {
      li {
        &:before {
          content: '';
          display: inline-block;
          width: 20px;
          min-width: 20px;
          height: 1.5px;
          background-color: $border-color--red;
          vertical-align: top;
          margin: 18px 12px 0 0;

          @media screen and (max-width: 1260px) {
            margin-top: 14px;
          }
        }
      }
    }
  }
}
</style>
