<template>
  <section
    id="transparent-header-area"
    data-testid="start-screen-slice-with-image"
    class="start-screen-slice start-screen-slice-with-image"
    :style="{ background: sliceGradient }"
  >
    <img
      :src="image && image.url"
      :alt="image && image.alt || 'Image'"
      width="1680"
      height="969"
      :style="{
        opacity: imageOpacity,
        backgroundColor: sliceBackground,
      }"
      data-testid="start-screen-slice__image"
      class="start-screen-slice__image"
    >
    <!-- sectionTextOpacity - value from changeOpacityOnScrollMixin mixin -->
    <div class="container">
      <div
        ref="sectionText"
        :style="{ opacity: sectionTextOpacity }"
        class="start-screen-slice__flex-wrapper"
      >
        <div
          class="start-screen-slice__content"
        >
          <div class="start-screen-slice__titles-wrapper">
            <PrismicRichText
              v-if="$prismic.asText(title)"
              :field="title"
              data-testid="start-screen-slice__title"
              class="start-screen-slice__title"
              :html-serializer="serializer"
            />
          </div>
          <PrismicRichText
            v-if="$prismic.asText(subtitle)"
            data-testid="start-screen-slice__subtitle"
            class="start-screen-slice__subtitle"
            :field="subtitle"
            :html-serializer="serializer"
          />
          <div class="start-screen-slice__btn-box">
            <UIButton
              v-if="modal === 'download-pdf'"
              class="start-screen-slice__btn"
              @click="showModalEbook"
            >
              {{ btnText }}
              <img
                width="20"
                height="20"
                src="@/assets/img/common/arrow-up-right.svg"
                alt="Arrow"
              >
            </UIButton>
          </div>
        </div>
        <div
          class="start-screen-slice__img-box"
        >
          <img
            :src="rightImage && rightImage.url"
            :alt="rightImage && rightImage.alt || 'Image'"
            width="259.69"
            height="380.25"
            class="start-screen-slice__img-box-image"
            data-testid="right-image"
          >
        </div>
      </div>
    </div>
    <ModalEbook
      id="sent-ebook"
      ref="modalEbook"
      :ebook-title="$prismic.asText(title)"
      :ebook-path="ebookPath"
      :book-name="bookName"
      :book-image="ebookImage"
      :send-pulse-template-id="sendPulseTemplateId"
    />
  </section>
</template>

<script>
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'
import setSliceBackground from '@/helpers/setSliceBackground'
import UIButton from '@/components/shared/UIButton'
import ModalEbook from '@/components/core/modals/ModalEbook'
import convertTagsToText from '@/helpers/convertTagsToText'
import linkResolver from '@/plugins/link-resolver'

export default {
  name: 'StartScreen',
  components: {
    UIButton,
    ModalEbook,
  },

  mixins: [changeSectionTextOpacityMixin('sectionText')],
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
    let sliceColor = ''
    if (this.slice?.primary?.gradientColor === 'white') sliceColor = 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #ffffff)'
    if (this.slice?.primary?.gradientColor === 'grey') sliceColor = 'linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #f5f7f9)'
    if (this.slice?.primary?.gradientColor === 'black') sliceColor = 'linear-gradient(180deg, rgba(17, 18, 19, 0) 0, #111213 100%)'

    return {
      imageOpacity: this.slice?.primary?.imageOpacity,
      image: this.slice?.primary?.image,
      title: this.slice?.primary?.title,
      subtitle: this.slice?.primary?.subtitle,
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
      sliceGradient: sliceColor,
      rightImage: this.slice?.primary?.rightImage,
      btnText: this.slice?.primary?.btnText,
      btnLink: this.slice?.primary?.btnLink,
      modal: this.slice?.primary?.modal,
      ebookPath: this.slice?.primary?.bookPath,
      bookName: this.slice?.primary?.bookName,
      ebookImage: this.slice?.primary?.ebookImage,
      sendPulseTemplateId: this.slice?.primary?.sendPulseTemplateId,
    }
  },

  computed: {
    serializer() {
      const types = ['start_screen_slice']
      if (types.includes(this.slice?.slice_type)) return this.htmlSerializer
      return null
    },
  },

  methods: {
    showModalEbook() {
      if (!this.$refs?.modalEbook?.show) return
      this.$refs.modalEbook.show()
    },

    htmlSerializer(type, element, content, children) {
      const { Elements } = this.$prismic.dom.RichText
      const { Link } = this.$prismic.dom
      let text = children.join('')

      if (type === Elements.preformatted) {
        // the second parameter of function excludes tags
        text = convertTagsToText(text, ['br'])
      } else {
        text = text.replace(/`(.*?)`/g, (_, inlineCode) => {
          // the second parameter of function excludes tags
          const formattedCode = convertTagsToText(inlineCode, ['strong', 'em', 'a'])
          return `<code class="inline-code">${formattedCode}</code>`
        })
      }

      switch (type) {
        case Elements.heading1:
          return `<h1>${text}</h1>`
        case Elements.heading2:
          return `<h2>${text}</h2>`
        case Elements.heading3:
          return `<h3>${text}</h3>`
        case Elements.heading4:
          return `<h4>${text}</h4>`
        case Elements.heading5:
          return `<h5>${text}</h5>`
        case Elements.heading6:
          return `<h6>${text}</h6>`
        case Elements.paragraph:
          return `<p>${text}</p>`
        case Elements.preformatted:
          return `<pre>${text}</pre>`
        case Elements.strong:
          return `<strong>${text}</strong>`
        case Elements.em:
          return `<em>${text}</em>`
        case Elements.listItem:
          return `<li>${text}</li>`
        case Elements.oListItem:
          return `<li>${text}</li>`
        case Elements.list:
          return `<ul>${text}</ul>`
        case Elements.oList:
          return `<ol>${text}</ol>`
        case Elements.image:
          // eslint-disable-next-line
          const linkUrl = element.linkTo ? Link.url(element.linkTo, linkResolver) : null
          // eslint-disable-next-line
          const linkTarget = element.linkTo && element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : ''
          // eslint-disable-next-line
          const wrapperClassList = [element.label || '', 'block-img']
          // eslint-disable-next-line
          const img = `<img src="${element.url}" alt="${element.alt || 'Image'}" copyright="${element.copyright || ''}">`
          return (`
            <p class="${wrapperClassList.join(' ')}">
              ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
            </p>
          `)
        case Elements.embed:
          return (`
            <div data-oembed="${element.oembed.embed_url}"
              data-oembed-type="${element.oembed.type}"
              data-oembed-provider="${element.oembed.provider_name}"
            >
              ${element.oembed.html}
            </div>
          `)
        case Elements.hyperlink:
          // eslint-disable-next-line
          const target = element.data.target ? `target="${element.data.target}" rel="noopener"` : ''
          // eslint-disable-next-line
          const url = Link.url(element.data, linkResolver)
          return `<a ${target} href="${url}">${text}</a>`
        case Elements.label:
          // eslint-disable-next-line
          const label = element.data.label ? ` class="${element.data.label}"` : ''
          return `<span ${label}>${text}</span>`
        case Elements.span:
          return content ? content.replace(/\n/g, '<br />') : ''
        default:
          return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.start-screen-slice {
  background: linear-gradient(180deg, rgba(17, 18, 19, 0) 60%, #111213);
  overflow: hidden;
  padding-top: 268px;
  height: auto;
  @media screen and (max-width: 768px) {
    padding-top: 147px;
  }

  &__image {
    display: block;
    z-index: -1;
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    object-fit: cover;
    background-color: $bgcolor--black;
  }

  &__title {
    color: $text-color--white-primary;
    margin-bottom: 70px;
    max-width: 650px;
    @media screen and (max-width: 580px) {
      margin-bottom: 32px;
    }

    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 64px, 700);
      line-height: 72px;
      letter-spacing: -2px;
      @media screen and (max-width: 580px) {
        @include font('Inter', 42px, 600);
        line-height: 48px;
      }
    }
  }

  &__subtitle {
    @include font('Inter', 32px, 600);
    line-height: 44px;
    letter-spacing: -1px;
    color: $text-color--white-primary;
    max-width: 704px;
    margin-bottom: 50px;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      line-height: 44px;
    }

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 35px;
    }

    @media screen and (max-width: 580px) {
      font-size: 24px;
      line-height: 35px;
    }
  }

  ::v-deep br {
    @media only screen and (max-width: 520px) {
      display: none;
    }
  }

  &__flex-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  &__content {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &__img-box {
    width: 25%;
    position: relative;
    top: -60px;
    @media screen and (min-width: 1025px) {
      margin-right: 75px;
    }
    @media screen and (max-width: 1024px) {
      width: 45%;
    }
    @media screen and (max-width: 768px) {
      width: 211px;
      margin-bottom: 83px;
    }
    @media screen and (max-width: 580px) {
      margin-bottom: 47px;
    }
  }

  &__img-box-image {
    width: 100%;
    height: auto;
    display: block;
  }

  &__btn-box {
    width: 100%;
    display: flex;

    a,
    button {
      @include font('Inter', 16px, 600);
      letter-spacing: -0.4px;
      line-height: 20px;
      color: $text-color--white-primary;
      margin-right: auto;
    }

    button {
      display: flex;
      align-items: center;
      padding: 14px 132.5px;
      margin-right: 32px;
      @media screen and (max-width: 580px) {
        padding: 14px 24px;
      }

      @media screen and (max-width: 880px) {
        padding: 14px 100px;
      }

      img {
        margin-left: 7px;
      }
    }

    a {
      text-decoration-line: underline;
      text-underline-offset: 2px;
    }
  }
}
</style>
