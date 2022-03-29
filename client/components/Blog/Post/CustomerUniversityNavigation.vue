<template>
  <div
    v-if="clusterPosts"
    class="cluster-navigation"
  >
    <div class="container">
      <h4
        v-if="title"
        class="cluster-navigation__title"
      >
        {{ title }}
      </h4>
      <div
        ref="clusterNavigationList"
        class="cluster-navigation__list"
      >
        <template v-if="posts">
          <section
            v-for="post in posts"
            :key="post.id"
            :post="post"
            class="cluster-navigation__list-item"
            :style="{ transition: 'all .5s', transform: `translateX(${transformWidth}px)` }"
          >
            <PostCard
              :post="post"
              :is-show-post-tags="false"
              text-color="#707072"
              :limit="70"
              :width="288"
              :height="177"
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
        :right="right"
        :left="left"
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
      transformWidth: 0,
      offset: 1,
      offsetSize: 0,
      title: this.cluster?.primary?.cluster_name[0]?.text,
      right: false,
      left: true,
    }
  },

  async mounted() {
    const postIDs = this.clusterPosts.map(item => item.cu_post.id)
    if (postIDs && postIDs.length) this.posts = await this.getPrismicData(postIDs)
    window.addEventListener('resize', this.calcOffsetWidth)
    this.calcOffsetWidth()
  },

  destroyed() {
    window.removeEventListener('resize', this.calcOffsetWidth)
  },

  methods: {
    async getPrismicData(ids) {
      const response = await this.$prismic.api.getByIDs(ids)
      return response.results
    },

    getNextPosts() {
      if ((this.offset + this.offsetSize) >= this.posts.length) this.right = true
      if ((this.offset + this.offsetSize) > this.posts.length) return
      this.left = false
      this.offset += this.offsetSize
      this.transformWidth -= this.$refs.clusterNavigationList.getBoundingClientRect().width
    },

    getPrevPosts() {
      if ((this.offset - this.offsetSize) <= 1) this.left = true
      if ((this.offset - this.offsetSize) < 1) return
      this.right = false
      this.offset -= this.offsetSize
      this.transformWidth += this.$refs.clusterNavigationList.getBoundingClientRect().width
    },

    calcOffsetWidth() {
      this.right = false
      this.left = true
      if (window.innerWidth <= 991) {
        this.offsetSize = 1
        this.transformWidth = 0
        this.offset = 1
      } else {
        this.offsetSize = 3
        this.transformWidth = 0
        this.offset = 1
      }
    },
  },
}
</script>

<style scoped lang="scss">
.cluster-navigation {
  background: $bgcolor--silver;
  padding: 60px 0 71px;

  &__title {
    font-family: 'Poppins';
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: -0.04em;
    color: $text-color--tech-label-black;
    margin-bottom: 37px;

    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }

  .container {
    max-width: 924px;
  }

  &__list {
    display: flex;
    margin: 0 -10px 20px -10px;
    overflow: hidden;
  }

  &__list-item {
    box-sizing: border-box;
    flex: 1 0 33.33%;
    padding: 0 10px;

    @media only screen and (max-width: 991px) {
      flex: 1 0 100%;
    }
  }
}
</style>
