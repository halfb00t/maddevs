<template>
  <div class="post-card">
    <NuxtLink
      :to="link"
      class="post-card__image"
    >
      <img
        v-lazy-load
        :data-src="post.data.featured_image.url"
        :alt="post.data.featured_image.alt || 'Feature image'"
        :width="width"
        :height="height"
      >
    </NuxtLink>
    <div class="post-card__info">
      <NuxtLink
        :to="link"
        class="post-card__info-text"
      >
        <h2
          class="post-card__title post-card__title--short"
          :title="$prismic.asText(post.data.title)"
        >
          {{ shortTitle }}
        </h2>
        <h2
          class="post-card__title post-card__title--very-short"
          :title="$prismic.asText(post.data.title)"
        >
          {{ veryShortTitle }}
        </h2>
        <h2
          class="post-card__title post-card__title--full"
          :title="$prismic.asText(post.data.title)"
        >
          {{ $prismic.asText(post.data.title) }}
        </h2>
        <p
          class="post-card__paragraph"
          :style="'color: ' + textColor"
          data-testid="test-post-card"
          v-html="firstParagraph"
        />
      </NuxtLink>
      <div
        v-if="withAuthor"
        class="post-card__meta"
      >
        <LazyHydrate when-visible>
          <PostTag
            v-if="isShowPostTags && post.tags && post.tags.length"
            :tag="tag || post.tags[0]"
            :disabled="disableTagLink"
            :theme="theme"
          />
        </LazyHydrate>
      </div>
      <LazyHydrate
        v-if="withAuthor"
        when-visible
      >
        <PostAuthor
          v-bind="author"
          :disabled="disableAuthorLink"
          theme="light"
          :date="formattedDate"
        />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import linkResolver from '@/plugins/link-resolver.js'
import getFirstParagraph from '@/helpers/getFirstParagraph'
import textEllipsis from '@/helpers/textEllipsis'
import formatDate from '@/helpers/formatDate'

export default {
  name: 'PostCard',
  components: {
    LazyHydrate,
    PostAuthor: () => import('@/components/Blog/shared/PostAuthor'),
    PostTag: () => import('@/components/Blog/shared/PostTag'),
  },

  props: {
    post: {
      type: Object,
      required: true,
    },

    width: {
      type: Number,
      default: 400,
    },

    height: {
      type: Number,
      default: 217,
    },

    textColor: {
      type: String,
      default: '',
    },

    isShowPostTags: {
      type: Boolean,
      default: true,
    },

    author: {
      type: Object,
      default: null,
    },

    tag: {
      type: String,
      default: null,
    },

    theme: {
      type: String,
      default: 'light',
    },

    disableAuthorLink: {
      type: Boolean,
      default: false,
    },

    disableTagLink: {
      type: Boolean,
      default: false,
    },

    limit: {
      type: Number,
      default: 150,
    },

    withAuthor: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    link() {
      return linkResolver(this.post)
    },

    formattedDate() {
      return formatDate(this.post.data.date)
    },

    firstParagraph() {
      const slices = this.post.data.body
      return getFirstParagraph(slices, this.limit)
    },

    shortTitle() {
      const limit = 55
      const title = this.$prismic.asText(this.post.data.title)
      return textEllipsis(title, { limit })
    },

    veryShortTitle() {
      const limit = 38
      const title = this.$prismic.asText(this.post.data.title)
      return textEllipsis(title, { limit })
    },
  },
}
</script>

<style lang="scss" scoped>
.post-card {
  width: 100%;
  height: 100%;
  * {
    color: $text-color--black;
  }
  p,
  span {
    @include font('Inter', 16px, 400);
    opacity: 0.8;
  }
  p {
    margin-top: 5px;
  }
  span {
    letter-spacing: -0.02em;
  }
  a {
    text-decoration: none;
  }
  &__image {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: 16px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__info {
    max-width: 100%;
    overflow: hidden;
  }
  &__title {
    @include font('Poppins', 21px, 600);
    max-width: 100%;
    height: 54px;
    line-height: 130%;
    letter-spacing: -0.02em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    &--short {
      display: block;
      @media screen and (max-width: 1196px) {
        display: none;
      }
    }
    &--very-short {
      display: none;
      @media screen and (max-width: 1196px) {
        display: block;
      }
      @media screen and (max-width: 991px) {
        display: none;
      }
      @media screen and (max-width: 600px) {
        display: block;
        height: auto;
      }
    }
    &--full {
      display: none;
      height: auto;
      @media screen and (max-width: 991px) {
        display: block;
      }
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
  &__paragraph {
    @include font('Inter', 16px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__meta {
    @include font('Inter', 13px, 400);
    display: flex;
    align-items: center;
    margin: 16px 0;
  }
  &__date {
    margin-right: 5px;
    flex-basis: 95px;
    white-space: nowrap;
    color: $text-color--grey;
  }
}
</style>
