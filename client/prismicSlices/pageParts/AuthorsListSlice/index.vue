<template>
  <section class="section">
    <div>
      authors filter
    </div>
    <div class="authors">
      <div class="authors__list">
        <div
          v-for="(author,i ) of authorsWithPostsData"
          :key="i"
          class="authors__item author"
        >
          <div class="author__posts-count">
            {{ author.post_count }}
          </div>
          <div class="author__image-wrapper">
            <img
              class="author__image"
              :src="author.data.image.url"
              :alt="author.data.image.alt"
            >
          </div>

          <div class="author__name">
            {{ author.data.name }}
          </div>
          <div class="author__position">
            {{ author.data.position }}
          </div>
        </div>
      </div>
    </div>

    <span>{{ slice.primary.background }}</span>
  </section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AuthorsListSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  computed: {
    ...mapGetters(['authorsWithPostsData']),
  },

  created() {
    this.getAuthorsWithPosts()
  },

  methods: {
    ...mapActions(['getAuthorsWithPosts']),
  },

}
</script>

<style lang="scss" scoped>
.authors {
  &__list {
    color: white;
    display: flex;
    flex-wrap: wrap;
  }
}
.author{
  width: 18%;
  display: inline-block;
  margin: 30px 0;
  &__image{
    width: 120px;
    height: 120px;
  }
}
</style>
