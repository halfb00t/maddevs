<template>
  <div class="content">
    <section class="container">
      <div :style="cssVars">
        <PrismicRichText
          :field="slice.primary.title"
          class="content__title"
          :html-serializer="serializer"
        />
        <PrismicRichText
          class="content__description"
          :field="slice.primary.description"
          :html-serializer="serializer"
        />
      </div>
    </section>
  </div>
</template>

<script>
import convertTagsToText from '@/helpers/convertTagsToText'
import linkResolver from '@/plugins/link-resolver.js'

export default {
  name: 'TitleAndParagraphSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  computed: {
    serializer() {
      const types = ['title_and_paragraph_slice']
      if (types.includes(this.slice.slice_type)) return this.htmlSerializer
      return null
    },

    cssVars() {
      return {
        'max-width': this.slice?.primary?.maxWidth,
        margin: '0 auto',
      }
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
.content {
  width: 100%;
  margin: 0 auto;
  background: $bgcolor--white-primary;
  margin-top: -1px;
}

/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4,
/deep/ h5,
/deep/ h6 {
  padding-top: 48px;
  padding-bottom: 12px;
}

/deep/ h1 {
  @include title($text-color--black-oil, 38px, -0.04em);
  display: none; // h1 tag should not be used
}
/deep/ h2 {
  @include title($text-color--black-oil, 32px, -0.04em);
}
/deep/ h3 {
  @include title($text-color--black-oil, 26px, -0.04em);
}
/deep/ h4 {
  @include title($text-color--black-oil, 21px, -0.04em);
}
/deep/ h5 {
  @include title($text-color--black-oil, 17px, -0.04em);
}
/deep/ h6 {
  @include title($text-color--black-oil, 14px, -0.04em);
}

/deep/ a {
  text-decoration: underline;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
}

/deep/ img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

/deep/ hr {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid $border-color--grey-20-percent;
  margin: 48px 0;
}

/deep/ strong {
  font-weight: 700;
}

/deep/ ul,
/deep/ ol {
  padding-left: 18px;
}

/deep/ ul {
  list-style: disc;
}

/deep/ ol {
  list-style: decimal;
}

/deep/ p,
/deep/ li {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: -0.02em;
}

/deep/ li {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}

/deep/ pre {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  overflow: auto;
  background: $bgcolor--grey-light;
  border-radius: 2px;
  line-height: 24px;
}

@media only screen and (max-width: 1024px) {
  /deep/ h2 {
    font-size: 26px;
    line-height: 33px;
  }

  /deep/ h5 {
    font-size: 20px;
    line-height: 27px;
  }

  /deep/ p {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
