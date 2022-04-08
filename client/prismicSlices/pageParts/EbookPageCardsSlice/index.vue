<template>
  <section class="section ebook-cards">
    <div
      class="container"
      :style="`max-width: ${containerSize ? containerSize : '1026'}px`"
    >
      <PrismicRichText
        v-if="$prismic.asText(title)"
        :field="slice.primary.title"
        class="ebook-cards__title"
        data-testid="ebook-cards__title"
        :html-serializer="serializer"
        :data-aos="animation || 'fade-up'"
      />
      <div
        v-if="cards.length"
        class="ebook-cards__items"
        :data-aos="animation || 'fade-up'"
      >
        <div
          v-for="(card, i) in cards"
          :key="i"
        >
          <EbookCard
            v-bind="card"
          />
        </div>
      </div>
      <div class="ebook-cards__btn-box">
        <UIButton
          class="ebook-cards__btn"
          is-link
          :to="btnLink.url"
        >
          {{ btnText }}
        </UIButton>
      </div>
    </div>
  </section>
</template>

<script>
import convertTagsToText from '@/helpers/convertTagsToText'
import textEllipsis from '@/helpers/textEllipsis'
import UIButton from '@/components/shared/UIButton'
import EbookCard from '@/components/slices/EbookCard'

export default {
  name: 'EbookPageCardsSlice',
  components: { EbookCard, UIButton },
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
      title: this.slice?.primary?.title,
      animation: this.slice?.primary?.animation,
      btnText: this.slice?.primary?.btnText,
      btnLink: this.slice?.primary?.btnLink,
      containerSize: this.slice?.primary?.containerSize,
      cards: [],
    }
  },

  computed: {
    serializer() {
      const types = ['ebook_page_cards_slice']
      if (types.includes(this.slice?.slice_type)) return this.htmlSerializer
      return null
    },
  },

  async mounted() {
    const pageIDs = this.slice.items?.map(item => item.data.id)
    if (pageIDs && pageIDs.length) this.cards = await this.getPrismicData(pageIDs)
    this.cards = this.cards.map(item => ({
      image: item.data.body[0].primary.rightImage,
      title: item.data.body[0].primary.title[0].text,
      subtitle: textEllipsis(item.data.body[0].primary.subtitle[0].text, { limit: 80 }),
      link: item.uid,
    }))
  },

  methods: {
    async getPrismicData(ids) {
      const response = await this.$prismic.api.getByIDs(ids)
      return response.results
    },

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
        default: return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ebook-cards {
  background: $bgcolor--white-primary;

  &__title {
    margin-bottom: 50px;

    @media screen and (max-width: 580px) {
      margin-bottom: 32px;
    }

    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      letter-spacing: -1.3px;
      color: $text-color--chinese-black;

      @media screen and (max-width: 580px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
      }
    }
  }

  &__items {
    @include grid(repeat(3, 1fr), auto, 25px, 25px);
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 25px, 25px);
      margin-bottom: 48px;
    }

    @media screen and (max-width: 580px) {
      @include grid(repeat(1, 1fr), auto, 0px, 25px);
    }
  }

  &__btn-box {
    width: 100%;
    display: flex;
    a {
      @include font('Inter', 16px, 600);
      letter-spacing: -0.4px;
      line-height: 20px;
      color: $text-color--white-primary;
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
      padding: 14px;
    }
  }
}
</style>
