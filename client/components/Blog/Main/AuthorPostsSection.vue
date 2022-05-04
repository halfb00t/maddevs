<template>
  <div class="author-posts">
    <div class="container">
      <div
        class="author-posts__featured-post"
        :class="[authorPosts.length === 1 ? 'author-posts__featured-post--mb-0' : '']"
      >
        <FeaturedPost
          v-if="authorPostsLoaded && authorPosts && authorPosts.length"
          :post="authorPosts[0]"
          :author="blogAuthor"
          theme="light"
          :disable-author-link="true"
        />
        <SkeletonFeaturedPost
          v-else
          theme="light"
        />
      </div>
      <div class="author-posts__list">
        <template v-if="authorPosts.length">
          <PostCard
            v-for="post in authorPosts.slice(0, authorsPerPage)"
            :key="post.id"
            :post="post"
            :author="blogAuthor"
            :disable-author-link="true"
            class="author-posts__list-item"
            data-testid="author-posts__list-item"
          />
        </template>
        <template v-else>
          <section
            v-for="i in 6"
            :key="i"
            class="author-posts__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
      <div
        v-if="showButton && authorPosts.length > authorsPerPage"
        class="author-posts__load-more"
      >
        <LoadMoreButton
          @click="showMorePosts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FeaturedPost from '@/components/Blog/shared/FeaturedPost'
import SkeletonFeaturedPost from '@/components/Blog/skeletons/SkeletonFeaturedPost'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'
import PostCard from '@/components/Blog/shared/PostCard'
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton'
import initializeLazyLoad from '@/helpers/lazyLoad'

export default {
  name: 'AuthorPostsSection',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
    SkeletonBlogWidget,
    PostCard,
    LoadMoreButton,
  },

  data() {
    return {
      authorsPerPage: 7,
      showButton: true,
    }
  },

  computed: {
    ...mapGetters(['blogAuthor', 'authorPosts', 'authorPostsLoaded']),
  },

  updated() {
    this.$nextTick(() => initializeLazyLoad())
  },

  methods: {
    showMorePosts() {
      this.showButton = false
      this.authorsPerPage = this.authorPosts.length
    },
  },
}
</script>

<style lang="scss" scoped>
  .author-posts {
    background-color: $bgcolor--white-primary;
    padding: 60px 0 71px;

    &__featured-post {
      margin-bottom: 137px;
      &--mb-0 {
        margin-bottom: 0;
      }
    }

    ::v-deep .post-card {
      display: flex;
      flex-direction: column;
      width: 33.3333%;
      height: auto;

      @media screen and (max-width: 991px) {
        width: 100%;
      }
      &__info {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      &__info-text{
        margin-bottom: 16px;
      }
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      margin: 0 -10px;
      row-gap: 103px;
    }

    &__list-item {
      box-sizing: border-box;
      width: 33.3333%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      height: auto;
      ::v-deep .post-card__meta {
        margin: auto 0 16px;
      }
      &:first-of-type {
        display: none;
      }
    }

    &__load-more {
      margin-top: 75px;
      ::v-deep .load-more-button {
        width: 100%;
      }
    }

    @media only screen and (max-width: 991px) {
      padding: 34px 0 60px;

      &__featured-post {
        display: none;
        margin-bottom: 56px;
      }

      &__list {
        row-gap: 56px;
      }

      &__list-item {
        width: 100%;
        &:first-of-type {
          display: block;
        }
      }

      &__load-more {
      margin-top: 56px;
    }
    }
  }
</style>
