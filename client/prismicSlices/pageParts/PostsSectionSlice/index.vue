<template>
  <div class="tag-posts">
    <div class="container">
      <div
        class="tag-posts__list"
        :data-aos="animation"
      >
        <template v-if="posts">
          <section
            v-for="post in posts"
            :key="post.id"
            :post="post"
            class="tag-posts__list-item"
          >
            <PostCard
              :post="post"
              :tag="post.tags[0]"
              :author="findAuthor(post.data.post_author.id, authors)"
              :disable-tag-link="false"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in slice.items"
            :key="i"
            class="tag-posts__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'
import PostCard from '@/components/Blog/shared/PostCard'
import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import extractAuthorData from '@/helpers/extractAuthorData'

export default {
  name: 'PostsSectionSlice',
  components: {
    SkeletonBlogWidget,
    PostCard,
  },

  mixins: [findPostAuthorMixin],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      animation: this.slice.primary?.animation,
      posts: [],
      authors: [],
    }
  },

  watch: {
    async posts() {
      if (this.posts && this.posts.length) {
        const authorIDs = this.posts.map(result => result.data.post_author.id)
        const postsAuthors = await this.getPrismicData(authorIDs)
        this.authors = postsAuthors.map(author => extractAuthorData(author))
      }
    },
  },

  async mounted() {
    const postIDs = this.slice.items?.map(item => item.data.id)
    if (postIDs && postIDs.length) this.posts = await this.getPrismicData(postIDs)
  },

  methods: {
    async getPrismicData(ids) {
      const response = await this.$prismic.api.getByIDs(ids)
      return response.results
    },
  },
}
</script>

<style lang="scss" scoped>
  .tag-posts {
    background-color: $bgcolor--white-primary;
    padding: 60px 0 71px;

    &__list {
      display: flex;
      flex-flow: row wrap;
      margin: 0 -10px;
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

    @media only screen and (max-width: 991px) {
      padding: 34px 0 60px;

      &__list-item {
        width: 100%;
        margin-bottom: 56px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
