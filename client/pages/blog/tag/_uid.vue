<template>
  <section class="tag">
    <TagBanner
      :title="blogTag"
      :count="tagPostsCount"
    />
    <TagPostsSection />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TagBanner from '@/components/Blog/Main/TagBanner'
import TagPostsSection from '@/components/Blog/Main/TagPostsSection'
import { buildHead, getMetadata } from '@/data/seo'

export default {
  name: 'Tag',
  components: {
    TagBanner,
    TagPostsSection,
  },

  nuxtI18n: false,

  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('getBlogTag', params.uid)
      return {
        openGraphUrl: `${process.env.domain}/blog/tag/${params.uid}/`,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    const metaData = getMetadata(this.$route.params.uid)
    return buildHead({
      title: metaData.title || `Top articles about ${this.blogTag} | Mad Devs Blog`,
      metaTitle: metaData.title || `Top articles about ${this.blogTag} | Mad Devs Blog`,
      description: metaData.description || `Discover articles about ${this.blogTag}. Quality content curated by Mad Devs.`,
      url: this.openGraphUrl,
      image: 'https://maddevs.io/blog.png',
    })
  },

  computed: {
    ...mapGetters(['blogTag', 'tagPostsCount']),
  },

  created() {
    this.getTagPosts(this.blogTag)
    this.getBlogAuthors()
  },

  methods: {
    ...mapActions(['getTagPosts', 'getBlogAuthors']),
  },
}
</script>

<style lang="scss" scoped>
  .tag {
    padding-top: 62px;
  }
</style>
