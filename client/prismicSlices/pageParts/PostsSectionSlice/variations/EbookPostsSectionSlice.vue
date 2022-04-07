<template>
  <section class="ebook-posts">
    <div
      class="container"
      :style="`max-width: ${containerSize || '1026'}px`"
    >
      <PrismicRichText
        v-if="$prismic.asText(title)"
        :field="slice.primary.title"
        class="ebook-posts__title"
        data-testid="ebook-posts__title"
        :html-serializer="serializer"
        data-aos="fade-up"
      />
      <div
        class="ebook-posts__wrapper"
        :data-aos="animation || 'fade-up'"
      >
        <template
          v-if="posts.length"
        >
          <div
            v-for="(post, i) in posts.slice(0, 6)"
            :key="`${post.data.title[0].text}-${i}`"
            class="ebook-posts__item"
          >
            <PostCard
              :post="post"
              :disable-tag-link="true"
              :with-author="false"
              :limit="80"
            />
          </div>
          <template
            v-if="showMore"
          >
            <div
              v-for="(post, i) in posts.slice(6)"
              :key="`${post.data.title[0].text}-${i}`"
              class="ebook-posts__item"
            >
              <PostCard
                :post="post"
                :disable-tag-link="true"
                :with-author="false"
                :limit="80"
              />
            </div>
          </template>
        </template>
        <template
          v-else
        >
          <div
            v-for="i in posts"
            :key="i"
            class="ebook-posts__item"
          >
            <SkeletonBlogWidget />
          </div>
        </template>
      </div>
      <div class="ebook-posts__btn-box">
        <UIButton
          v-if="posts.length > 6"
          class="ebook-posts__btn"
          :disabled="showMore"
          @click="getMoreArticles"
        >
          More articles
        </UIButton>
      </div>
    </div>
  </section>
</template>
<script>
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'
import PostCard from '@/components/Blog/shared/PostCard'
import convertTagsToText from '@/helpers/convertTagsToText'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'EbookPostsSectionSlice',
  components: {
    SkeletonBlogWidget,
    PostCard,
    UIButton,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default: () => ({}),
    },

    posts: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      title: this.slice?.primary?.title,
      animation: this.slice?.primary?.animation,
      showMore: false,
      containerSize: this.slice?.primary?.containerSize,
    }
  },

  computed: {
    serializer() {
      const types = ['posts_section_slice']
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

    getMoreArticles() {
      this.showMore = true
    },
  },
}
</script>
<style lang="scss" scoped>
.ebook-posts {
  background-color: #fff;

  .container {
    max-width: 1026px;
  }

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

  &__wrapper {
    @include grid(repeat(3, 1fr), auto, 24px, 24px);
    margin-bottom: 50px;
    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 24px, 24px);
      margin-bottom: 32px;
    }

    @media screen and (max-width: 580px) {
      @include grid(repeat(1, 1fr), auto, 0px, 48px);
      margin-bottom: 48px;
    }
  }

  &__btn-box {
    width: 100%;
    display: flex;
    button {
      @include font('Inter', 16px, 600);
      letter-spacing: -0.4px;
      line-height: 20px;
      color: $text-color--white-primary;
      width: 100%;
    }

    button {
      display: flex;
      align-items: center;
      padding: 14px;
    }
  }
}
</style>
