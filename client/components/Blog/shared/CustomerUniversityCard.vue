<template>
  <div :class="`customer-university__featured-post customer-university__featured-post--${size}`">
    <div :class="`featured-post featured-post--${direction}`">
      <NuxtLink
        :to="postLink"
        class="featured-post__image"
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
        :to="`/customer-university/${postId}/`"
        class="featured-post__info"
      >
        <span
          v-if="isMain"
          class="featured-post__date"
        >{{ date }}</span>
        <h2 class="featured-post__title">
          {{
            $prismic.asText(title)
              .replace(/^[0-9]*\. /, '')
          }}
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

.customer-university {
  &__featured-post {
    width: 100%;

    &--md {
      margin-bottom: 48px;

      .featured-post {
        width: 90%;

        &__image {
          height: 311px;
        }

        &__text {
          margin-bottom: 24px;
        }

        @media screen and (max-width: 1024px) {
          width: 100%;
          &__text {
            margin-bottom: 0;
          }
          &__image {
            height: auto;
          }
        }

        &--row {
          .featured-post {
            &__image {
              width: 55%;
            }

            &__info {
              width: 45%;
            }

            @media screen and (max-width: 1024px) {
              &__info, &__image {
                width: 100%;
              }
            }
          }
        }
      }
    }

    &--sm {
      margin-bottom: 32px;

      .featured-post {
        min-height: 180px;

        &__title {
          @include font('Poppins', 20px, 600);
          color: $text-color--white-primary;
          font-style: normal;
          line-height: 130%;
          letter-spacing: -0.02em;
          font-feature-settings: 'ss02' on;
          margin-bottom: 6px;
        }

        &__text {
          @include font('Inter', 16px, 400);
          font-style: normal;
          line-height: 166%;
          letter-spacing: -0.035em;
          color: $text-color--grey-matterhorn;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &__image {
          margin-right: 20px !important;
        }
      }
    }
  }
}

.featured-post {
  display: flex;
  justify-content: space-between;

  &__date {
    display: block;
    @include label;
    margin-top: 24px;
  }

  &__title {
    @include font('Poppins', 28px, 600);
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.04em;
    font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
    color: $text-color--white-primary;
    max-width: 400px;
    width: 100%;
    margin-top: 8px;
  }

  &__text {
    @include font('Inter', 16px, 400);
    font-style: normal;
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-matterhorn;
    margin-top: 6px;
  }

  &__image {
    display: block;
    text-align: center;
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  &--column {
    flex-direction: column;

    .featured-post {
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
      margin-bottom: 32px;
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
