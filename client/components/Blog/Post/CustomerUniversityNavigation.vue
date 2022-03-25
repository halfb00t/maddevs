<template>
  <div
    v-if="clusterPosts"
    class="cluster-navigation"
  >
    <div class="container">
      <div
        class="cluster-navigation__list"
      >
        <template v-if="posts">
          <section
            v-for="post in posts.slice(n, n + 3)"
            :key="post.id"
            :post="post"
            class="cluster-navigation__list-item"
          >
            <PostCard
              :post="post"
              :is-show-post-tags="false"
              text-color="#707072"
              :limit="70"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in slice.items"
            :key="i"
            class="cluster-navigation__list-item"
          >
            <SkeletonBlogWidget />
          </section>
        </template>
      </div>
      <NextPreviewButtons
        @next="getNextPosts"
        @preview="getPrevPosts"
      />
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Blog/shared/PostCard'
import NextPreviewButtons from '@/components/shared/NextPreviewButtons.vue'

export default {
  name: 'CustomerUniversityNavigation',

  components: {
    PostCard,
    NextPreviewButtons,
  },

  props: {
    clusterPosts: {
      type: Array,
      required: true,
    },

    cluster: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      posts: [],
      n: 0,
    }
  },

  async mounted() {
    const postIDs = this.clusterPosts.map(item => item.cu_post.id)
    if (postIDs && postIDs.length) this.posts = await this.getPrismicData(postIDs)
  },

  methods: {
    async getPrismicData(ids) {
      const response = await this.$prismic.api.getByIDs(ids)
      return response.results
    },

    getNextPosts(value) {
      this.n += value
      if (this.n >= this.posts.length) {
        this.n = this.posts.length - 1
      }
    },

    getPrevPosts() {
      this.n -= 3
      if (this.n < 0) {
        this.n = 0
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cluster-navigation {
  background: $bgcolor--silver;
  padding: 60px 0 71px;

  .container {
    max-width: 924px;
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -10px 40px -10px;
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
