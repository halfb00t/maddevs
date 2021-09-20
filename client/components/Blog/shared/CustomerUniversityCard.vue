<template>
  <div class="customer-university__featured-post">
    <div :class="`featured-post featured-post--${direction}`">
      <NuxtLink
        :to="`/customer-university/${postId}/`"
        class="featured-post__image"
      >
        <img
          v-lazy-load
          :data-src="featured_image.url"
          :alt="featured_image.alt"
          width="560"
          height="347"
        >
      </NuxtLink>
      <NuxtLink
        :to="`/customer-university/${postId}/`"
        class="featured-post__info"
      >
        <span
          v-if="isMain"
          class="featured-post__date"
        >{{ date }}</span>
        <h2 class="featured-post__title">
          {{ $prismic.asText(title).replace(/^[0-9]*\. /, '') }}
        </h2>
        <p class="featured-post__text">
          {{ firstParagraph }}
        </p>
        <PostAuthor
          v-if="author && isMain"
          v-bind="author"
          theme="dark"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import getFirstParagraph from '@/helpers/getFirstParagraph'
import PostAuthor from '@/components/Blog/shared/PostAuthor'

export default {
  name: 'CustomerUniversityCard',
  components: {
    PostAuthor,
  },

  props: {
    featured_image: {
      type: Object,
      default: () => ({}),
    },

    title: {
      type: Array,
      default: () => ([]),
    },

    body: {
      type: Array,
      default: () => ([]),
    },

    date: {
      type: String,
      default: '',
    },

    postId: {
      type: String,
      default: '',
    },

    author: {
      type: Object,
      default: null,
    },

    direction: {
      type: String,
      default: 'column',
    },

    isMain: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    firstParagraph() {
      const paragraphList = this.body
      const WORDS_LIMIT_IN_PARAGRAPH = 150
      return getFirstParagraph(paragraphList, WORDS_LIMIT_IN_PARAGRAPH)
    },
  },
}
</script>
<style scoped lang="scss">
@mixin label {
  @include font('Inter', 13px, 400);
  color: $text-color--grey-opacity-40-percent;
  font-style: normal;
  line-height: 166%;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.customer-university {
  &__featured-post {
    width: 100%;
    margin-bottom: 72px;
  }
}

.featured-post {
  display: flex;
  justify-content: space-between;

  &__date {
    display: block;
    @include label;
    margin: 24px 0 32px 0;
  }

  &__title {
    @include font('Poppins', 33.2px, 600);
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.04em;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    margin-bottom: 32px;
    color: $text-color--white-primary;
  }

  &__text {
    @include font('Inter', 16px, 400);
    font-style: normal;
    line-height: 166%;
    letter-spacing: -0.035em;
    margin-bottom: 32px;
    color: $text-color--grey-matterhorn;
  }

  &__image {
    display: block;
    text-align: center;
    width: 100%;
    max-width: 100%;

    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }

  &--column {
    flex-direction: column;
  }

  &--row {
    flex-direction: row;

    .featured-post {
      &__image {
        width: 50%;
        margin-right: 42px;
      }

      &__info {
        width: 50%;
      }

      &__date {
        margin-top: 0;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .customer-university {
    &__featured-post {
      width: 100%;
      padding-right: 0;
      margin-bottom: 56px;
    }
  }
  .featured-post {
    display: flex;
    flex-direction: column;

    &__date,
    .post-author {
      display: none;
    }

    &__title {
      margin: 14px 0 6px 0;
      font-size: 22.78px;
    }

    &__text {
      margin-bottom: 0;
    }

    &__info {
      order: 1;
    }

    &__image {
      order: 0;
      margin-top: 0;
      margin-bottom: 14px;
    }

    &--row {
      flex-wrap: wrap;

      .featured-post {
        flex-wrap: wrap;

        &__image, &__info {
          width: 100%;
        }

        &__date {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
