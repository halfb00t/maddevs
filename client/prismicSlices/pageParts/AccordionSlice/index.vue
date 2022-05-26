<template>
  <section class="section accordion-slice">
    <div
      class="container"
      :style="{ maxWidth: `${containerSize}px` || '1026px' }"
    >
      <PrismicRichText
        v-if="$prismic.asText(mainTitle)"
        :field="mainTitle"
        data-testid="accordion-slice__title"
        class="accordion-slice__title"
        :html-serializer="serializer"
      />
      <UIAccordion
        v-for="(faq, index) in questions"
        :key="`${faq.question}-${index}`"
        :question="faq.question"
        :answer="$prismic.asHtml(faq.answer)"
        is-prismic
        :accordion-id="faq.question"
        :section-id="i"
      />
    </div>
  </section>
</template>

<script>
import convertTagsToText from '@/helpers/convertTagsToText'
import linkResolver from '@/plugins/link-resolver'
import UIAccordion from '@/components/shared/UIAccordion'

export default {
  name: 'AccordionSlice',
  components: { UIAccordion },
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
      questions: this.slice?.items,
      mainTitle: this.slice?.primary?.mainTitle,
      containerSize: this.slice?.primary?.containerSize,
    }
  },

  computed: {
    serializer() {
      const types = ['accordion_slice']
      if (types.includes(this.slice?.slice_type)) return this.htmlSerializer
      return null
    },
  },

  methods: {
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
        case Elements.heading1: return `<h1>${text}</h1>`
        case Elements.heading2: return `<h2>${text}</h2>`
        case Elements.heading3: return `<h3>${text}</h3>`
        case Elements.heading4: return `<h4>${text}</h4>`
        case Elements.heading5: return `<h5>${text}</h5>`
        case Elements.heading6: return `<h6>${text}</h6>`
        case Elements.paragraph: return `<p>${text}</p>`
        case Elements.preformatted: return `<pre>${text}</pre>`
        case Elements.strong: return `<strong>${text}</strong>`
        case Elements.em: return `<em>${text}</em>`
        case Elements.listItem: return `<li>${text}</li>`
        case Elements.oListItem: return `<li>${text}</li>`
        case Elements.list: return `<ul>${text}</ul>`
        case Elements.oList: return `<ol>${text}</ol>`
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
        case Elements.span: return content ? content.replace(/\n/g, '<br />') : ''
        default: return null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion-slice {
  background: $bgcolor--white-primary;
  &__title {
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5,
    ::v-deep h6 {
      @include font('Inter', 68px, 700);
      line-height: 72px;
      letter-spacing: -2px;
      margin-bottom: 96px;
      @media screen and (max-width: 768px) {
        font-size: 42px;
        line-height: 48px;
        margin-bottom: 72px;
      }
      @media screen and (max-width: 580px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
        margin-bottom: 48px;
      }
    }
  }
}
</style>
