<template>
  <section class="section card-with-image">
    <div class="container">
      <div
        class="card-with-image__item"
        :style="{backgroundColor: background || '#f4f4f4'}"
      >
        <div
          class="card-with-image__text-content"
          :class="Object.keys(image).length === 0 && 'card-with-image__text-content-full'"
        >
          <PrismicRichText
            v-if="title"
            :field="slice.primary.title"
            class="card-with-image__title"
            :html-serializer="serializer"
            :style="{color: textColor || '#111'}"
          />
          <p
            v-if="description"
            class="card-with-image__description"
            :style="{color: textColor || '#111'}"
          >
            {{ description }}
          </p>
        </div>
        <div
          v-if="Object.keys(image).length !== 0"
          class="card-with-image__image-box"
        >
          <img
            v-lazy-load
            :data-src="image.url"
            :alt="image.alt || 'Image'"
            class="card-with-image__image"
            :width="image.dimensions.width"
            :height="image.dimensions.height"
            data-testid="card-with-image__image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import setSliceBackground from '@/helpers/setSliceBackground'
import convertTagsToText from '@/helpers/convertTagsToText'

export default {
  name: 'CardWithImageSlice',
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
      description: this.slice?.primary?.description,
      background: setSliceBackground(this.slice?.primary?.backgroundColor),
      textColor: this.slice?.primary?.textColor === 'white' ? '#ffffff' : '#101113',
      image: this.slice?.primary?.image,
    }
  },

  computed: {
    serializer() {
      const types = ['card_with_image_slice']
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
.section {
  background: #fff;
}

.container {
  max-width: 817px;
}

.card-with-image {
  &__item {
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      position: relative;
    }
    @media screen and (max-width: 676px) {
      flex-direction: column;
    }
  }
  &__text-content {
    padding: 39px 43px;
    width: 53%;
    @media screen and (max-width: 768px) {
      width: 62%;
      padding: 34.33px 33px;
    }
    @media screen and (max-width: 676px) {
      width: 100%;
      padding: 30px 21px 0;
      box-sizing: border-box;
    }
  }
  &__text-content-full {
    width: 100%;
    @media screen and (max-width: 676px) {
      padding-bottom: 30px;
    }
  }
  &__title {
    margin-bottom: 10px;
    width: 135%;
    position: relative;
    z-index: 2;
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 32px, 700);
      line-height: 130%;
      letter-spacing: -0.4px;
    }
    @media screen and (max-width: 980px) {
      width: 170%;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      ::v-deep h1,
      ::v-deep h2,
      ::v-deep h3,
      ::v-deep h4,
      ::v-deep h5,
      ::v-deep h6 {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 576px) {
      ::v-deep h1,
      ::v-deep h2,
      ::v-deep h3,
      ::v-deep h4,
      ::v-deep h5,
      ::v-deep h6 {
        font-size: 18px;
        line-height: 22px;
        white-space: initial;
      }
      margin-bottom: 14px;
    }
  }
  &__description {
    @include font('Inter', 17px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
  }
  &__image-box {
    width: 36%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 33%;
      height: 100%;
    }
    @media screen and (max-width: 676px) {
      position: relative;
      inset: unset;
      width: 100%;
      height: 147px;
      display: flex;
    }
  }
  &__image {
    width: auto;
    height: auto;
    display: block;
    max-width: 100%;
    max-height: 100%;
    @media screen and (max-width: 676px) {
      position: relative;
      bottom: -10px;
      height: 100%;
      width: auto;
      margin-left: auto;
      margin-right: 30px;
    }
  }
}
</style>
