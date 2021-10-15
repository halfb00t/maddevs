<template>
  <div class="tag-posts">
    <div class="container">
      <div class="tag-posts__list">
        <template v-if="slice.items">
          <section
            v-for="post in slice.items"
            :key="post.data.id"
            :post="post"
            class="tag-posts__list-item"
          >
            <PostCard
              :post="post"
              :tag="blogTag"
              :author="findAuthor(post.data.id, allAuthors)"
              :disable-tag-link="true"
            />
          </section>
        </template>
        <template v-else>
          <section
            v-for="i in 6"
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

export default {
  name: 'PostsSectionSlice',
  components: {
    SkeletonBlogWidget,
    PostCard,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  mounted() {
    this.showData()
  },

  methods: {
    showData() {
      console.log(this.slice.items[0].data.id)
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
      &:first-of-type {
        display: none;
      }
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
        &:first-of-type {
          display: block;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
