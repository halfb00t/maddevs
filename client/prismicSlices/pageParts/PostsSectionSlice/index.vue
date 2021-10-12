<template>
  <div class="tag-posts">
    <div class="container">
      <div class="tag-posts__list">
        <template v-if="tagPostsLoaded">
          <section
            v-for="post in tagPostsToShow"
            :key="post.id"
            :post="post"
            class="tag-posts__list-item"
          >
            <PostCard
              :post="post"
              :tag="blogTag"
              :author="findAuthor(post.data.post_author.id, allAuthors)"
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
export default {
  name: 'PostsSectionSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
