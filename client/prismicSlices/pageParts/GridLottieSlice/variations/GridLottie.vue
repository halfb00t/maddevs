<template>
  <div class="container">
    <ul class="grid-lottie__grid">
      <li
        v-for="item in items"
        :key="item.title"
        :class="[
          item.fullWidth ? 'card-item--full-width' : null,
          item.alignText ? `card-item--text-${item.alignText}` : null,
          `card-item-${item.lottiePosition}`
        ]"
        :style="{ backgroundColor: item.background || null }"
        class="card-item"
        data-testid="grid-lottie-animation-item"
      >
        <div
          :class="`card-item__lottie card-item__lottie-${item.lottiePosition}`"
          :style="{ 'maxWidth': `${item.width}px`, 'height': `${item.height}px` }"
        >
          <LottieCard
            :animation-name="item['lottie-animation']"
          />
        </div>
        <h2
          class="card-item__title"
          v-html="item.title"
        />
        <div
          class="card-item__content"
          v-html="renderCardContent($prismic.asHtml(item.content))"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import LottieCard from '@/prismicSlices/pageParts/GridLottieSlice/components/LottieCard'

export default {
  name: 'GridLottie',

  components: {
    LottieCard,
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

  @media screen and (max-width: 1024px) {
    padding: 60px;
    &-bottom{
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 32px;
    &-bottom{
      padding-bottom: 0;
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
    &-bottom{
      max-width: 689px;
      height: auto;
      margin: 40px auto 0;

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
    /deep/ p {
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

    /deep/ p {
      margin-top: 40px;
    }

    /deep/ li {
      font-weight: 400;
      margin-top: 7px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    /deep/ ul {
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
