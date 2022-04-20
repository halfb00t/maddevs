<template>
  <div
    :class="[
      'customer-university-card',
      `customer-university-card--${size}`,
      `customer-university-card--w-${width}`,
      `customer-university-card customer-university-card--${direction}`,
    ]"
  >
    <NuxtLink
      :to="postLink"
      class="customer-university-card__image"
    >
      <img
        v-lazy-load
        :data-src="featured_image.url"
        :alt="featured_image.alt"
        width="560"
        height="311"
      >
    </NuxtLink>
    <NuxtLink
      :to="postLink"
      class="customer-university-card__info"
    >
      <span
        v-if="isMain"
        class="customer-university-card__date"
      >
        {{ date }}
      </span>
      <h2 class="customer-university-card__title">
        {{ $prismic.asText(title).replace(/^[0-9]*\. /, '') }}
      </h2>
      <p class="customer-university-card__text">
        {{ firstParagraph }}
      </p>
      <PostAuthor
        v-if="author && isMain"
        v-bind="author"
        theme="dark"
      />
    </NuxtLink>
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
    // eslint-disable-next-line vue/prop-name-casing
    featured_image: {
      type: Object,
      default: () => ({}),
    },

    title: {
      type: Array,
      default: () => [],
    },

    body: {
      type: Array,
      default: () => [],
    },

    date: {
      type: String,
      default: '',
    },

    postId: {
      type: String,
      default: '',
    },

    type: {
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

    size: {
      type: String,
      default: 'md',
    },

    width: {
      type: String,
      default: '100',
    },
  },

  computed: {
    postLink() {
      if (this.type === 'customer_university') return `/customer-university/${this.postId}/`
      return `/blog/${this.postId}/`
    },

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
}

.customer-university-card {
  display: flex;
  justify-content: space-between;

  &--w-100 {
    width: 100%;
  }

  &--w-90 {
    width: 90%;
    @media screen and (max-width: 1124px) {
      width: 100%;
    }
  }

  &__date {
    display: block;
    @include label;
    margin-top: 24px;
  }

  &__title {
    color: $text-color--white-primary;
    letter-spacing: -0.04em;
    font-style: normal;
    line-height: 130%;
  }

  &__text {
    font-style: normal;
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-matterhorn;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .post-author {
    margin-top: 24px;
  }

  &__image {
    width: 100%;
    max-width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  &--md {
    margin-bottom: 72px;

    .customer-university-card {
      &__title {
        @include font('Poppins', 28px, 600);
        max-width: 400px;
        width: 100%;
        margin-top: 8px;
      }

      &__text {
        @include font('Inter', 16px, 400);
        margin-top: 8px;
      }

      &__image {
        height: 311px;
      }

      @media screen and (max-width: 1124px) {
        &__title {
          max-width: 100%;
        }
        &__image {
          height: auto;
        }
      }
    }
  }

  &--sm {
    margin-bottom: 32px;

    .customer-university-card {
      &__title {
        @include font('Poppins', 20px, 600);
        color: $text-color--white-primary;
        letter-spacing: -0.02em;
        margin-bottom: 6px;
      }

      &__text {
        @include font('Inter', 16px, 400);
      }

      &__image {
        margin-right: 20px !important;
      }
    }
  }

  &--column {
    flex-direction: column;

    .customer-university-card {
      &__text {
        min-height: 80px;
        @media screen and (max-width: 1024px) {
          min-height: auto;
        }
      }
    }
  }

  &--row {
    flex-direction: row;

    .customer-university-card {
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

@media screen and (max-width: 1124px) {
  .customer-university {
    &__featured-post {
      width: 100%;
      padding-right: 0;
      margin-bottom: 32px;
    }
  }
  .customer-university-card {
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

      .customer-university-card {
        &__image,
        &__info {
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
