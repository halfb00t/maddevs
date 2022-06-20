<template>
  <section class="form-slice">
    <div
      class="container"
      :style="`max-width: ${containerSize || '1026'}px`"
    >
      <PrismicRichText
        v-if="$prismic.asText(title)"
        :field="slice.primary.title"
        class="form-slice__title"
        data-testid="form-slice__title"
        :html-serializer="serializer"
        :data-aos="animation || 'fade-up'"
      />
      <div
        class="form-slice__items"
        :data-aos="animation || 'fade-up'"
      >
        <EbookForm
          class="form-slice__item"
          :ebook-path="ebookPath"
          :ebook-name="ebookName"
          :send-pulse-template-id="sendPulseTemplateId"
        />
        <div class="form-slice__item-img">
          <img
            v-lazy-load
            :data-src="image.url"
            :alt="image.alt || 'Image'"
            class="form-slice__image"
            width="349.51"
            height="423.34"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import convertTagsToText from '@/helpers/convertTagsToText'
import EbookForm from '@/components/slices/EbookForm'

export default {
  name: 'FormSlice',
  components: {
    EbookForm,
  },

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
      image: this.slice?.primary?.image,
      ebookPath: this.slice?.primary?.ebookPath,
      ebookName: this.slice?.primary?.ebookName,
      animation: this.slice?.primary.animation,
      containerSize: this.slice?.primary?.containerSize,
      sendPulseTemplateId: this.slice?.primary?.sendPulseTemplateId,
    }
  },

  computed: {
    serializer() {
      const types = ['form_slice']
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
        default: return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-slice {
  .container {
    max-width: 1026px;
  }

  background-color: $bgcolor--white-primary;
  &__title {
    margin-bottom: 32px;
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      list-style-position: -1.3px;
      color: $text-color--red;

      @media screen and (max-width: 580px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
      }
    }
  }

  &__items {
    border: 1px solid $border-color--grey-20-percent;
    border-radius: 4px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 580px) {
      flex-direction: column-reverse;
      padding: 32px;
    }
  }

  &__item {
    width: 38%;
    padding: 58px 0;
    @media screen and (max-width: 1024px) {
      width: 49%;
    }
    @media screen and (max-width: 768px) {
      padding: 40px 0;
    }
    @media screen and (max-width: 580px) {
      width: 100%;
      padding: 0;
    }
  }

  &__item-img {
    width: 39%;
    @media screen and (max-width: 1024px) {
      width: 46%;
    }

    @media screen and (max-width: 580px) {
      margin-bottom: 32px;
    }
  }

  &__image {
    width: auto;
    height: auto;
    display: block;
    max-width: 100%;
    max-height: 423.34px;
  }
}
</style>
