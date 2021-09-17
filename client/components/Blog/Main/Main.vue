<template>
  <main class="home">
    <BlogHeader />
    <LatestPostsSection />
    <Feature flag="customerUniversitySection">
      <CustomerUniversitySection />
    </Feature>
    <Feature flag="newCustomerUniversitySection">
      <NewCustomerUniversitySection />
    </Feature>
    <AllPostsSection />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BlogHeader from '@/components/Blog/Main/BlogHeader'
import LatestPostsSection from '@/components/Blog/Main/LatestPostsSection'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'
import NewCustomerUniversitySection from '@/components/Blog/Main/NewCustomerUniversitySection'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'

export default {
  name: 'Main',
  components: {
    BlogHeader,
    LatestPostsSection,
    CustomerUniversitySection,
    NewCustomerUniversitySection,
    AllPostsSection,
  },

  data() {
    return {
      pageSize: 12,
    }
  },

  computed: {
    ...mapGetters([
      'allPosts',
    ]),
  },

  created() {
    this.getContent()
  },

  methods: {
    ...mapActions(['getBlogPosts', 'getBlogAuthors', 'getCustomerUniversityContent']),

    getContent() {
      // Query to get blog home content
      this.getCustomerUniversityContent()

      // Query to get posts content to preview
      this.getBlogPosts()
      this.getBlogAuthors()
    },
  },
}
</script>
