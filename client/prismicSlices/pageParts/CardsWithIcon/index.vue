<template>
  <section class="section cards-with-icons">
    <div
      class="cards-with-icons__wrapper container"
      :data-aos="animation || 'fade-up'"
      :style="`max-width: ${containerSize || '1240'}px`"
    >
      <div
        v-for="(item, i) of items"
        :key="i"
        class="cards-with-icons__item"
      >
        <img
          v-if="item.iconImage.url"
          v-lazy-load
          :data-src="item.iconImage.url"
          width="54"
          height="54"
          :alt="item.iconImage.alt || 'Icon image'"
          class="cards-with-icons__item-icon"
        >
        <PrismicRichText
          v-if="$prismic.asText(item.title)"
          :field="item.title"
          data-testid="cards-with-icons__item-title"
          class="cards-with-icons__item-title"
          :html-serializer="serializer"
        />
        <p class="cards-with-icons__item-description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import convertTagsToText from '@/helpers/convertTagsToText'

export default {
  name: 'CardsWithIcon',
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
      items: this.slice?.items,
      animation: this.slice?.primary?.animation,
      containerSize: this.slice?.primary?.containerSize,
    }
  },

  computed: {
    serializer() {
      const types = ['cards_with_icon']
      if (types.includes(this.slice?.slice_type)) return this.htmlSerializer
      return null
    },
  },

  methods: {
    htmlSerializer(type, element, content, children) {
      const { Elements } = this.$prismic.dom.RichText
      let text = children.join('')
      text = text.replace(/`(.*?)`/g, (_, inlineCode) => {
        // the second parameter of function excludes tags
        const formattedCode = convertTagsToText(inlineCode, ['strong', 'em', 'a'])
        return `<code class="inline-code">${formattedCode}</code>`
      })

      switch (type) {
        case Elements.heading1: return `<h1>${text}</h1>`
        case Elements.heading2: return `<h2>${text}</h2>`
        case Elements.heading3: return `<h3>${text}</h3>`
        case Elements.heading4: return `<h4>${text}</h4>`
        case Elements.heading5: return `<h5>${text}</h5>`
        case Elements.heading6: return `<h6>${text}</h6>`
        case Elements.strong: return `<strong>${text}</strong>`
        default: return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cards-with-icons {
  &__wrapper {
    @include grid(repeat(3, 1fr), auto, 30px, 30px);

    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 30px, 30px);
    }

    @media screen and (max-width: 540px) {
      @include grid(repeat(1, 1fr), auto, 0, 30px);
    }
  }

  &__item {
    background-color: $bgcolor--black-pale;
    padding: 56px 54px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 1024px) {
      padding: 24px;
    }
  }

  &__item-title {
    margin-bottom: 21px;
    color: $text-color--white-primary;
    line-height: 32.5px;
    letter-spacing: -0.013em;
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 28px, 600);
      @media screen and (max-width: 1024px) {
        @include font('Inter', 21px, 600);
        line-height: 24px;
        letter-spacing: -1px;
      }
    }
  }

  &__item-description {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
    color: $text-color--grey-20-percent;
  }

  &__item-icon {
    width: 54px;
    height: 54px;
    margin-bottom: 36px;
  }
}
</style>
