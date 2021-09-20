<template>
  <div class="header-post">
    <NuxtLink
      :to="getPostPath(postType, uid)"
      class="header-post__content"
    >
      <div class="header-post__text">
        <p class="header-post__text-title">
          {{ $prismic.asText(title) }}
        </p>
        <p class="header-post__text-paragraph">
          {{ postParagraph }}
        </p>
      </div>
      <img
        :src="featuredImage && featuredImage.url"
        :alt="featuredImage && featuredImage.alt"
        width="260"
        height="161"
        class="header-post__image"
      >
    </NuxtLink>
    <div class="header-post__meta">
      <PostAuthor
        v-bind="postAuthor"
        :date="date"
        theme="dark"
        class="header-post__meta-author"
      />
      <PostTag
        v-if="tags && tags.length"
        :tag="tags[0]"
        theme="dark"
        class="header-post__meta-tag"
      />
    </div>
    <NuxtLink
      v-if="$route.name !== 'blog'"
      to="/blog/"
      class="header-post__more-btn"
    >
      More articles
    </NuxtLink>
  </div>
</template>

<script>
import PostTag from '@/components/Blog/shared/PostTag'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import getFirstParagraph from '@/helpers/getFirstParagraph'

export default {
  name: 'HeaderPost',
  components: {
    PostAuthor,
    PostTag,
  },

  props: {
    postType: {
      type: String,
      default: '',
      required: true,
    },

    uid: {
      type: String,
      default: '',
      required: true,
    },

    title: {
      type: String,
      default: '',
      required: true,
    },

    date: {
      type: String,
      default: '',
      required: true,
    },

    featuredImage: {
      type: Object,
      default: () => ({}),
      required: true,
    },

    tags: {
      type: Array,
      default: () => ([]),
      required: true,
    },

    slices: {
      type: Array,
      default: () => ([]),
    },

    postAuthor: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  computed: {
    postParagraph() {
      const limit = 120
      return getFirstParagraph(this.slices, limit)
    },
  },

  methods: {
    getPostPath(type, uid) {
      if (type === 'post') return `/blog/${uid}/`
      if (type === 'customer_university') return `/customer-university/${uid}/`
      return '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.header-post {
  a {
    color: $text-color--white-primary;
  }

  &__content {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1360px) {
      flex-direction: column-reverse;
    }
  }

  &__text {
    margin-right: 16px;
    @media screen and (max-width: 1360px) {
      margin-right: 0;
      margin-top: 20px;
    }
    &-title {
      @include font('Inter', 18px, 700);
      line-height: 22px;
      letter-spacing: -0.4px;
    }
    &-paragraph {
      @include font('Inter', 15px, 400);
      line-height: 24px;
      letter-spacing: -0.4px;
      margin-top: 8px;
      color: $text-color--grey-opacity-40-percent;
    }
  }

  &__image {
    border-radius: 4px;
    display: block;
    width: 260px;
    height: auto;
    object-fit: cover;
    @media screen and (max-width: 1360px) {
      width: 100%;
      height: auto;
    }
  }

  &__meta {
    margin-top: 18px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    @media screen and (max-width: 1360px) {
      flex-direction: column;
    }
    &-tag {
      margin-left: 20px;
      @media screen and (max-width: 1360px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }

  &__more-btn {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 4px;
    color: $text-color--white-primary;
    border: 1px solid $border-color--grey-selected;
    padding: 7px 20px;
    transition: 0.3s ease;
    &:hover {
      background-color: $bgcolor--grey-dark;
      color: $text-color--black-lighter;
    }
  }
}
</style>
