<template>
  <div
    v-if="allPosts.length"
    class="filtered-posts"
  >
    <div class="container">
      <UITagCloud />
      <div
        v-if="filteredPosts.length !== 0"
        class="filtered-posts__list"
      >
        <section
          v-for="(post, i) in filteredPostsToShow"
          :key="`filtered-posts__item-${i}`"
          :post="post"
          class="filtered-posts__list-item"
          data-testid="test-single-post"
        >
          <PostCard
            :post="post"
            :tag="post.tags.find(tag => activeTags.includes(tag))"
            :author="findAuthor(post.data.post_author.id, allAuthors)"
          />
        </section>
      </div>
      <div
        v-if="totalPages > postsPage"
        class="filtered-posts__load-more"
      >
        <LoadMoreButton @click="getMorePosts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostCard from '@/components/Blog/shared/PostCard'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'
import UITagCloud from '@/components/shared/UITagCloud'
import initializeLazyLoad from '@/helpers/lazyLoad'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'

export default {
  name: 'AllPostsSection',
  components: {
    UITagCloud,
    PostCard,
    LoadMoreButton,
  },

  mixins: [findPostAuthorMixin],

  data() {
    return {
      pageSize: 12,
    }
  },

  computed: {
    ...mapGetters([
      'allPosts',
      'allAuthors',
      'filteredPosts',
      'activeTags',
      'postsPage',
    ]),

    filteredPostsToShow() {
      return this.filteredPosts.slice(0, this.pageSize * this.postsPage)
    },

    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.pageSize)
    },
  },

  watch: {
    // Fixes scroll position for async filtered posts list
    filteredPosts() {
      const visitedLinkEl = document.querySelector(`a[href='${this.visitedPost}']`)
      if (
        visitedLinkEl
        && !visitedLinkEl.classList.contains('featured-post')
        && !visitedLinkEl.classList.contains('latest-post')
      ) {
        const postItemEl = visitedLinkEl.parentNode // single-post__wrapper
        postItemEl.scrollIntoView({ block: 'start' })
        window.scrollTo(0, window.scrollY - 120) // scroll for distance between the post and the top of the screen
      }
    },
  },

  mounted() {
    this.$store.dispatch('setDefaultArrayWithTags', this.allPosts)
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
    this.$store.dispatch('setDefaultArrayWithTags', this.allPosts)
  },

  methods: {
    ...mapActions(['getMorePosts', 'setDefaultArrayWithTags']),
  },
}
</script>

<style lang="scss" scoped>
.filtered-posts {
  background-color: $bgcolor--white-primary;
  padding: 80px 0 73px;

  &__list {
    display: flex;
    flex-flow: row wrap;
    margin: 50px -10px 0;
  }

  &__list-item {
    box-sizing: border-box;
    width: 33.3333%;
    padding: 0 10px;
    margin-bottom: 103px;
    @media only screen and (min-width: 991px) {
      &:nth-last-child(-n+3) {
        margin-bottom: 0;
      }
    }
  }

  &__load-more {
    text-align: center;
    margin-top: 75px;

    ::v-deep .load-more-button {
      display: flex;
      width: 100%;
      border-color: $border-color--red;
      color: $text-color--red;
      background-color: transparent;
      @include font('Inter', 16px, 600);
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      letter-spacing: -.02em;
      line-height: 24px;
      box-shadow: none;
      transition: .4s;
      cursor: pointer;

      &:hover {
        background-color: $bgcolor--red;
        color: $text-color--white-primary;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 30px 0 69px;

    &__list {
      margin-top: 0;
    }

    &__list-item {
      width: 100%;
      margin-bottom: 32px;

      &:last-child {
        margin-bottom: 0;
      }

      /deep/ .post-card {
        display: flex;
        align-items: flex-start;

        &__image {
          width: 235px;
          flex-shrink: 0;
          margin-right: 16px;
          margin-bottom: 0;
        }

        &__title {
          font-size: 15px;
          line-height: 18.6px;
          letter-spacing: -0.03em;
        }

        &__paragraph {
          display: none;
        }

        &__meta {
          margin: 8px 0;

          .post-tag {
            display: none;
          }
        }

        &__date {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: -0.02em;
        }
      }

      /deep/ .post-author {
        align-items: unset;

        &__image,
        &__none-image {
          &,
          img {
            width: 20px;
            min-width: 20px;
            height: 20px;
            margin-bottom: 0;
          }
        }

        &__name,
        &__position {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: -0.02em;
        }

        &__name {
          margin-bottom: 0;
        }
      }
    }

    &__load-more {
      margin-top: 35px;
    }
  }

  @media only screen and (max-width: 600px) {
    &__list-item /deep/ .post-card {
      &__image {
        width: 180px;
      }

      &__title {
        -webkit-line-clamp: 2;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    &__list-item /deep/ .post-card {
      &__image {
        width: 145px;
        height: 100%;

        img {
          height: 100%;
          object-fit: cover;
          object-position: -2px;
        }
      }

      &__title {
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
