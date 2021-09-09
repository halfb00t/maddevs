<template>
  <section class="search-result">
    <SearchResultBanner />
    <PostsSection :posts="posts" />
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { buildHead } from '@/data/seo'
import SearchResultBanner from '@/components/Blog/Main/SearchResultBanner'
import PostsSection from '@/components/Blog/Main/PostsSection'

export default {
  name: 'SearchResult',
  components: {
    SearchResultBanner,
    PostsSection,
  },

  nuxtI18n: false,

  head() {
    return buildHead({
      title: 'Mad Devs: Blog search result',
      metaTitle: 'Blog',
      description: '',
      url: this.openGraphUrl,
      image: 'https://maddevs.io/blog.png',
    })
  },

  computed: {
    ...mapGetters(['getSearchResponse', 'getSearchQuery']),

    posts() {
      if (!this.getSearchResponse || !this.getSearchResponse.results) return null
      if (!this.getSearchResponse || !this.getSearchResponse.results || !this.getSearchResponse.results.length) return []
      return this.getSearchResponse.results
    },
  },

  created() {
    if (!this.getSearchQuery) {
      if (process.browser) {
        const query = this.$route.query.searchBy
        if (query && query.length) {
          this.getPosts(query.replace(/\//g, ''))
        } else {
          this.$router.push('/blog/')
        }
      }
    }
  },

  methods: {
    ...mapActions(['setSearchResponse']),

    async getPosts(query) {
      const response = await this.$prismic.api.query(
        this.$prismic.predicates.fulltext('my.post.title', query),
      )
      this.setSearchResponse(response)
    },
  },
}
</script>

<style lang="scss" scoped>
  .search-result {
    padding-top: 62px;
  }
</style>
