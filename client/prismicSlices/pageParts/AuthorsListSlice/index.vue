<template>
  <section class="section">
    <div style="font-size: 40px; color:red;">
      authors slice
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

<style scoped>
</style>
