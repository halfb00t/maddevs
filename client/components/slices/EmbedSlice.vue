<template>
  <Component
    :is="isTag.is"
    v-if="item"
    v-bind="isTag"
  >
    <PrismicEmbed
      :field="embedFieldData"
      :class="`embed__${item.embed.type}-content`"
    />
    <template v-if="item.embed.type === 'link'">
      <div class="embed__image-wrapper">
        <img
          v-lazy-load
          :data-src="embedImage.url"
          :width="embedImage.width"
          :height="embedImage.height"
          alt="Image."
          class="embed__image"
          data-testid="embed__image"
        >
      </div>
    </template>
  </Component>
</template>

<script>
export default {
  name: 'EmbedSlice',
  props: {
    slice: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      item: this.slice?.items[0],
      embedImage: {
        url: `${this.slice?.items[0]?.embed?.thumbnail_url}?w=400&h=218`,
        width: '200',
        height: '109',
      },

      embedFieldData: {},
    }
  },

  computed: {
    isTag() {
      if (this.item?.embed?.type === 'link') {
        return {
          is: 'a',
          target: '_blank',
          href: this.item?.embed?.url,
          class: `embed__${this.item?.embed?.type}`,
        }
      }
      return {
        is: 'div',
        class: `embed__${this.item?.embed?.type}`,
      }
    },
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  created() {
    if (!this.item) return

    const {
      embed: {
        title: rawTitle,
        html: rawHtml,
        type: embedType,
      },
      embed_title: embedTitle,
      embed_description: embedDescription,
    } = this.item

    if (rawHtml) {
      const matchDescription = rawHtml.match('<p>(.*?)</p>')
      const description = matchDescription ? matchDescription[1] || '' : ''

      const html = `
        <div class="embed__title">${embedTitle || rawTitle.split(' | ')[0]}</div>
        <p class="embed__description">${embedDescription || description}</p>
      `

      this.embedFieldData = {
        ...this.slice?.embed,
        html,
      }
    }

    if (embedType === 'video') {
      const html = rawHtml
        .replace(/height="[0-9]*"/, 'height="500"')
        .replace(/width="[0-9]*"/, 'width="100%"')

      this.embedFieldData = {
        ...this.slice?.embed,
        html,
      }
    }
  },

  methods: {
    onResize() {
      if (this.item && this.item?.embed?.type === 'link') {
        const changeEmbedImage = (url, width, height) => {
          this.embedImage.url = url
          this.embedImage.width = width
          this.embedImage.height = height
        }
        if (window.innerWidth < 1024) changeEmbedImage(`${this.item?.embed?.thumbnail_url}?w=1164&h=632`, '582', '316')
        else changeEmbedImage(`${this.item?.embed?.thumbnail_url}?w=400&h=218`, '200', '109')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.embed {
  /deep/ iframe {
    display: block;
    max-width: 100%;
  }

  &__link,
  &__video {
    margin: 25px 0;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid $border-color--silver;
    text-decoration: none;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }

    &-content {
      width: 100%;
      padding: 24px;
      padding-right: 0;
      @media screen and (max-width: 1024px) {
        order: 2;
        width: 100%;
        padding-right: 24px;
      }
    }
  }

  /deep/ &__title,
  /deep/ &__description {
    letter-spacing: -0.02em;
    line-height: 129%;
  }

  /deep/ &__title {
    @include font('Poppins', 21px, 700);
    line-height: 27.34px;
    color: $text-color--black-oil;
    margin: 0;
    margin-bottom: 6px;
  }

  /deep/ &__description {
    @include font('Inter', 13px, 400);
    color: $text-color--grey-pale;
    margin: 0;
  }

  /deep/ &__image {
    display: block;
    width: 200px;
    min-width: 200px;
    height: auto;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
      width: 100%;
      min-width: auto;
    }

    &-wrapper {
      width: 33%;
      display: flex;
      align-items: center;
      padding: 24px;
      @media screen and (max-width: 1024px) {
        order: 1;
        width: 100%;
      }
    }
  }
}
</style>
