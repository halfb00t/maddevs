<template>
  <section
    :data-aos="animation"
    class="main-block-wrapper"
    :style="{ backgroundColor: wrapperBgColor || '#ffffff' }"
  >
    <section class="container">
      <article
        class="main-block"
        :style="{ backgroundColor: background || '#f4f4f4' }"
      >
        <div class="main-block__text-content">
          <PrismicRichText
            v-if="title"
            :field="slice.primary.title"
            class="main-block__title"
            :html-serializer="serializer"
            :style="textContentColor"
          />
          <div class="main-block__description">
            <p
              :style="textContentColor"
              v-html="$prismic.asHtml(description)"
            />
          </div>
          <figure class="main-block__small-screen-image">
            <img
              v-lazy-load
              width="338"
              height="477"
              :data-src="slice.primary.image.url"
              :alt="slice.primary.image.alt"
              data-testid="main-block__img-block-image"
              class="main-block__img-block-image"
            >
          </figure>
          <a
            :href="link"
            target="_blank"
            class="main-block__button"
            :style="`background-color: ${buttonBgColor}`"
          >
            {{ buttonText }}
          </a>
        </div>
        <figure class="main-block__img-block">
          <img
            v-lazy-load
            width="338"
            height="477"
            :data-src="slice.primary.image.url"
            :alt="slice.primary.image.alt"
            class="main-block__img-block-image"
          >
        </figure>
      </article>
    </section>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'
import convertTagsToText from '@/helpers/convertTagsToText'

export default {
  name: 'BuildAndRisksSlice',

  mixins: [
    animateOnScrollMixin({
      offset: 200,
      delay: 50,
      anchorPlacement: 'top-center',
      duration: 1000,
      once: true,
    }),
  ],

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
      animation: this.slice?.primary?.animation,
      title: this.slice?.primary?.title[0].text,
      description: this.slice?.primary?.description,
      buttonText: this.slice?.primary?.buttonText,
      link: this.slice?.primary?.buttonLink?.url || '',
      background: setSliceBackground(this.slice?.primary?.BackgroundColor),
      wrapperBgColor: setSliceBackground(this.slice?.primary?.outerBgColor),
    }
  },

  computed: {
    serializer() {
      const types = ['build_and_risks_slice']
      if (types.includes(this.slice?.slice_type)) return this.htmlSerializer
      return null
    },

    buttonBgColor() {
      if (this.slice?.primary?.buttonBgColor === 'red') return '#EC1C24'
      if (this.slice?.primary?.buttonBgColor === 'black') return '#111111'
      return '#FFFFFF'
    },

    textContentColor() {
      return `color: ${this.slice?.primary?.titleColor}`
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
.main-block-wrapper {
  width: 100%;
  height: auto;
}

.main-block {
  padding: 84px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media screen and (max-width: 920px) {
    padding: 60px 34px;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }

  &__text-content {
    width: 50%;

    @media screen and (max-width: 920px) {
      width: 100%;
    }
  }

  &__title {
    margin-bottom: 48px;

    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 42px, 700);
      line-height: 46px;
      letter-spacing: -1.3px;
      @media screen and (max-width: 580px) {
        @include font('Inter', 28px, 600);
        line-height: 32px;
      }
    }
  }

  &__description {
    margin-bottom: 48px;

    ::v-deep p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.4px;
      margin: 12px 0;
      & + p {
        margin-top: 24px;
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__button {
    display: inline-block;
    border-radius: 4px;
    color: $text-color--grey-pale;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding: 14px 60px;
    text-align: center;

    @media screen and (max-width: 920px) {
      width: 50%;
      padding: 14px 0;
    }

    @media screen and (max-width: 375px) {
      display: block;
      width: 100%;
      padding: 14px 0;
    }
  }

  &__img-block {
    width: 30%;

    @media screen and (max-width: 1024px) {
      width: 45%;
    }

    @media screen and (max-width: 920px) {
      display: none;
    }
  }

  &__img-block-image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__small-screen-image {
    display: none;
    margin-bottom: 50px;

    @media screen and (max-width: 920px) {
      display: block;
      width: 50%;
    }

    @media screen and (max-width: 375px) {
      width: 100%;
    }
  }
}
</style>
