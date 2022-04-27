<template>
  <div class="container">
    <div class="current-author">
      <div class="current-author__image">
        <img
          v-lazy-load
          :data-src="authorImage.url"
          :alt="authorImage.alt || 'Image'"
          width="165"
          height="165"
        >
      </div>
      <div class="current-author__info">
        <h1 class="current-author__name">
          {{ blogAuthor.name }}
        </h1>
        <p class="current-author__position">
          {{ blogAuthor.position }}
        </p>
      </div>
      <div class="current-author__count">
        <p class="current-author__count-posts">
          {{ authorPosts.length }} Posts
        </p>
        <hr class="current-author__count-red-line">
      </div>
      <div class="current-author__tags">
        <ul
          v-if="authorPosts.length"
          class="current-author__tags-list"
        >
          <li
            v-for="tag in tags"
            :key="tag"
            class="current-author__tags-item"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthorBanner',

  computed: {
    ...mapGetters(['blogAuthor', 'authorPosts']),

    authorImage() {
      if (this.blogAuthor?.image) {
        return this.blogAuthor.image.header
      }
      return { url: '', alt: '' }
    },

    tags() {
      const tagsToIgnore = ['Featured post', 'Editors pick', 'Python']
      if (!this.authorPosts.length) return []
      return Array.from(new Set(this.authorPosts.flatMap(post => post.tags[0]))).filter(tag => !tagsToIgnore.includes(tag))
    },
  },
}
</script>

<style lang="scss" scoped>
  .current-author {
    padding-top: 102px;
    padding-bottom: 126px;
    display: grid;
    grid-template-columns: auto 73px;
    gap: 42px;
    justify-content: start;
    color: $text-color--white-primary;

    @media screen and (max-width: 962px) {
      gap: 20px;
      grid-template-columns: 128px 68px;
      padding-bottom: 87px;
    }

    @media screen and (max-width: 768px) {
      padding-top: 75px;
    }

    @media screen and (max-width: 420px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &__image {
      grid-row: 1 / 3;
      grid-column: 1 / 2;
      &,
      img {
        position: relative;
        display: block;
        width: 170px;
        height: 170px;
        border-radius: 10px;
        @media screen and (max-width: 962px) {
          width: 128px;
          height: 128px;
        }

        @media screen and (max-width: 580px) {
          width: 100%;
          height: auto;
        }
      }
    }

    &__info {
      grid-row: 1 / 2;
      grid-column: 2 / 4;
    }

    &__name {
      font-size: 41.5px;
      line-height: 46px;
      letter-spacing: -1.3px;
      margin-bottom: 20px;
      @media screen and (max-width: 962px) {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: -1px;
      }

      @media screen and (max-width: 580px) {
        font-size: 21px;
        line-height: 24px;
      }
    }

    &__position {
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
      @media screen and (max-width: 962px) {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.4px;
      }

      @media screen and (max-width: 580px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    &__count {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      position: relative;
      width: 72px;
      height: 34px;
      background: $bgcolor--silver;
      border-radius: 5px;
      display: grid;
      place-items: center;
      @media screen and (max-width: 962px) {
        width: 68px;
        height: 26px;
      }
      @media screen and (max-width: 580px) {
        align-self: end;
        width: 62px;
        height: 20px;
      }

      &-posts {
        @include font('Inter', 12px, 400);
        letter-spacing: -0.4px;
        color: $text-color--black;
        text-transform: uppercase;
        @media screen and (max-width: 962px) {
          font-size: 10px;
        }
      }
      &-red-line {
        position: absolute;
        border: none;
        top: -3px;
        right: -21px;
        width: 1px;
        height: 27px;
        background-color: $bgcolor--red;
        @media screen and (max-width: 962px) {
          right: -11px;
          top: -4px;
          height: 21px;
        }
        @media screen and (max-width: 580px) {
          display: none;
        }
      }
    }

    &__tags {
      grid-row: 2 / 3;
      grid-column: 3 / 4;
      @media screen and (max-width: 580px) {
        grid-row: 3 / 4;
        grid-column: 1 / 4;
      }

      &-list {
        display: flex;
        max-width: 500px;
        flex-wrap: wrap;
        gap: 16px;
      }

      &-item {
        background-color: $bgcolor--quote-box;
        border-radius: 5px;
        @include font('Inter', 12px, 400);
        line-height: 18px;
        letter-spacing: -0.02em;
        color: $text-color--white-primary;
        padding: 8px 18px;
        @media screen and (max-width: 962px) {
          font-size: 10px;
          padding: 4px 15px;
        }
      }
    }
  }
</style>
