<template>
  <div class="rich-text-cards">
    <div class="container">
      <ul class="rich-text-cards__grid">
        <li
          v-for="item in items"
          :key="item.title"
          class="card-item"
          :class="[
            item.fullWidth ? 'card-item--full-width' : null,
            item.alignText ? `card-item--text-${item.alignText}` : null,
          ]"
          :style="{ backgroundColor: item.background || null }"
        >
          <h3
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
  </div>
</template>

<script>
export default {
  name: 'RichTextCards',

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

.rich-text-cards {
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
  display: block;
  box-sizing: border-box;
  padding: 80px;
  padding-bottom: 96px;
  color: $text-color--white-primary;
  background-color: $bgcolor--black-pale;
  @media screen and (max-width: 1024px) {
    padding: 32px;
  }
  &--full-width {
    grid-column: auto/span 2;
    @media screen and (max-width: 1024px) {
      grid-column: auto;
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
    @include font('Inter', 56px, 800);
    line-height: 65px;
    letter-spacing: -0.04em;
    max-width: 1080px;
    @media screen and (max-width: 1260px) {
      font-size: 30px;
      line-height: 37px;
    }
  }

  &__content {
    @include font('Inter', 24px, 600);
    line-height: 38px;
    letter-spacing: -0.013em;
    word-break: break-word;
    max-width: 1080px;
    @media screen and (max-width: 1260px) {
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
