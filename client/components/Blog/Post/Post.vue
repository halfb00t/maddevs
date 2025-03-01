<template>
  <main
    ref="blogPost"
    :class="wrapperClass"
    class="blog-post"
  >
    <div class="blog-post__background" />
    <div class="blog-post__inner-container">
      <div
        v-if="dataLoaded"
        ref="navbar"
        class="blog-post__left-navbar"
        :class="className"
      >
        <TableOfContents
          v-if="tableOfContentsSlice"
          :slice="tableOfContentsSlice"
        />
        <div class="blog-post__share-links">
          <ShareNetwork
            :url="openGraphUrl"
            :title="metaTitle"
            network="facebook"
            class="blog-post__share-link icon-wrapper__icon icon-wrapper__facebook-icon"
            @open="sendPixelAnalitics(facebookNetworkPixelEvent)"
          />
          <ShareNetwork
            :url="openGraphUrl"
            :title="metaTitle"
            network="twitter"
            class="blog-post__share-link icon-wrapper__icon icon-wrapper__twitter-icon"
            @open="sendPixelAnalitics(twitterNetworkPixelEvent)"
          />
          <ShareNetwork
            :url="openGraphUrl"
            :title="metaTitle"
            network="linkedin"
            class="blog-post__share-link icon-wrapper__icon icon-wrapper__linkedin-icon"
            @open="sendPixelAnalitics(linkedinNetworkPixelEvent)"
          />
        </div>
        <SubscribeForm
          form-location="Table of Contents"
        />
      </div>

      <CustomerUniversityHeader
        v-if="type === 'customer_university'"
        :id="id"
        :title="title"
        :subtitle="subtitle"
        :featured-image="featuredImage"
        :post-list="clusterPosts || []"
        :cluster-name="cluster ? $prismic.asText(cluster.primary.cluster_name) : ''"
        :date="date"
      />
      <BlogHeader
        v-else
        :title="title"
        :subtitle="subtitle"
        :featured-image="featuredImage"
        :tags="tags"
        :date="date"
      />
      <div class="blog-post__main-content">
        <SlicesBlock
          :slices="slices"
          :slices-type="type"
          class="blog-post__text-container"
        />
        <div class="blog-post__comments">
          <Disqus
            shortname="maddevs-io"
            :url="`https://maddevs.io/blog/${getPostUid}/`"
            :identifier="`/blog/${getPostUid}`"
            lang="en"
          />
        </div>
      </div>
    </div>
    <div
      ref="postFooter"
    >
      <div
        v-if="showRecommended"
        class="blog-post__recommended-posts"
      >
        <div class="blog-post__recommended-posts-list container">
          <section
            v-for="post in recommendedPosts"
            :key="post.id"
            :post="post"
            class="blog-post__recommended-post"
            data-testid="test-recommended-post"
          >
            <PostCard
              :post="post"
              theme="white"
              :author="findAuthor(post.data.post_author.id, allAuthors)"
            />
          </section>
        </div>
      </div>
      <CustomerUniversityNavigation
        v-if="clusterPosts && cluster"
        :cluster-posts="clusterPosts"
      />
    </div>
    <button
      v-if="buttonIsActive"
      class="blog-post__back-to-list"
      data-testid="test-back-list"
      @click="scrollToTop"
    >
      <i />
    </button>
    <div
      ref="progressBar"
      class="progress-bar"
    />
    <client-only>
      <ContentLocker
        v-if="Object.keys(ebook).length !== 0"
        :ebook="ebook"
      />
    </client-only>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { Disqus } from 'vue-disqus'
import SlicesBlock from '@/components/slices'
import TableOfContents from '@/components/Blog/Post/TableOfContents'
import BlogHeader from '@/components/Blog/header/Blog'
import CustomerUniversityHeader from '@/components/Blog/header/CustomerUniversity'
import CustomerUniversityNavigation from '@/components/Blog/Post/CustomerUniversityNavigation'
import PostCard from '@/components/Blog/shared/PostCard'
import ContentLocker from '@/components/Blog/Post/ContentLocker'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import { Cookies } from '@/helpers/cookies'
import SubscribeForm from '@/components/core/forms/SubscribeForm'
import { getEbooks } from '@/api/ebooks'

export default {
  name: 'PostView',
  components: {
    SubscribeForm,
    ContentLocker,
    SlicesBlock,
    PostCard,
    TableOfContents,
    BlogHeader,
    CustomerUniversityHeader,
    CustomerUniversityNavigation,
    Disqus,
  },

  mixins: [findPostAuthorMixin],

  props: {
    type: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },

    metaTitle: {
      type: String,
      default: '',
    },

    featuredImage: {
      type: Object,
      default: () => {},
    },

    postAuthor: {
      type: Object,
      default: () => {},
    },

    slices: {
      type: Array,
      default: () => [],
    },

    tags: {
      type: Array,
      default: () => [],
    },

    tableOfContents: {
      type: Array,
      default: () => [],
    },

    recommendedPosts: {
      type: Array,
      default: () => [],
    },

    openGraphUrl: {
      type: String,
      default: '',
    },

    cluster: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      buttonIsActive: false,
      dataLoaded: false,
      introductionContainer: null,
      headerContainer: null,
      isFixed: false,
      isBottom: false,
      ebooks: [],
      ebook: {},
    }
  },

  computed: {
    ...mapGetters(['allAuthors', 'blogTag']),

    getPostUid() {
      return this.$route.params.uid
    },

    tableOfContentsSlice() {
      return this.slices && this.slices.find(slice => slice.slice_type === 'table_of_contents')
    },

    clusterPosts() {
      return this.cluster ? this.cluster.items : []
    },

    wrapperClass() {
      return (this.recommendedPosts && this.recommendedPosts.length) || this.type === 'customer_university' ? 'with-recommended' : ''
    },

    showRecommended() {
      return this.type !== 'customer_university' && this.recommendedPosts && this.recommendedPosts.length !== 0
    },

    className() {
      const tableOfContentsSlice = this.slices && this.slices.find(slice => slice.slice_type === 'table_of_contents')

      if (!tableOfContentsSlice) return 'blog-post__left-navbar--is-vertical'

      if (this.isFixed && !this.isBottom) return 'blog-post__left-navbar--is-fixed'

      if (!this.isFixed && !this.isBottom) return 'blog-post__left-navbar--is-top'

      if (this.isBottom) return 'blog-post__left-navbar--is-bottom'

      return ''
    },
  },

  watch: {
    dataLoaded(loaded) {
      if (loaded) {
        this.$nextTick(() => this.setStylesForNavbar())
      }
    },
  },

  async mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    this.dataLoaded = true
    await this.getEbooksFromPrismic()
    this.takeRandomEbook()
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollHandler)
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },

    scrollHandler(event) {
      this.buttonIsActive = Boolean(event.target.scrollingElement.scrollTop !== 0)
      this.calcProgress()
      this.setStylesForNavbar()
    },

    setStylesForNavbar() {
      this.introductionContainer = document.getElementById('introduction-container')
      this.headerContainer = document.getElementById('header-container')

      if (this.tableOfContentsSlice) this.handleNavbar()
    },

    handleNavbar() {
      const scrollStartPoint = this.getScrollStartPoint()
      const scrollEndPoint = this.getScrollEndPoint()

      this.setStateForCssVar()

      this.isFixed = window.pageYOffset > scrollStartPoint
      this.isBottom = window.pageYOffset > scrollEndPoint
    },

    setStateForCssVar() {
      const indentFromIntroductionContainer = 30
      const root = document.documentElement
      const top = this.introductionContainer.offsetHeight + indentFromIntroductionContainer

      root.style.setProperty('--top', `${top}px`)
    },

    getScrollStartPoint() {
      return this.introductionContainer.offsetHeight + this.headerContainer.offsetHeight
    },

    getScrollEndPoint() {
      const { offsetHeight: blogPostHeight } = this.$refs.blogPost
      const { offsetHeight: navbarHeight } = this.$refs.navbar
      const { offsetHeight: postFooterHeight } = this.$refs.postFooter
      const postFooterPadding = 190 // sum of padding from top and bottom

      return blogPostHeight - (postFooterHeight + navbarHeight + postFooterPadding)
    },

    calcProgress() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.$refs.progressBar.style.width = `${scrolled}%`
    },

    sendPixelAnalitics(pixelEvent) {
      pixelEvent.send()
    },

    async getEbooksFromPrismic() {
      const { results } = await getEbooks(this.$prismic)
      this.ebooks = results
        .filter(ebook => ebook.tags.some(tag => this.tags.includes(tag)))
        .filter(ebook => !Cookies.checkCookie(`sawModal_${ebook.data.body[0].primary.sendPulseTemplateId}`))
    },

    takeRandomEbook() {
      if (this.ebooks.length === 0) return
      const randomIndex = Math.floor(Math.random() * this.ebooks.length)
      const [ebookInfo] = this.ebooks[randomIndex].data.body
      this.ebook = ebookInfo
    },
  },
}
</script>

<style lang="scss" scoped>
:root {
  --top: 0px;
}

.blog-post {
  margin: auto;
  background-color: $text-color--white-primary;
  position: relative;
  padding-bottom: 96px;

  &.with-recommended {
    padding-bottom: 0;
  }

  &__background {
    background-color: $bgcolor--black;
    height: 683px;
  }

  &__inner-container {
    max-width: 818px;
    margin: -514px auto 0;
    position: relative;
  }

  &__main-content {
    max-width: 680px;
    margin: 25px auto 0;
  }

  &__left-navbar {
    display: flex;
    flex-direction: column;
    margin-top: 0;

    &--is-top,
    &--is-bottom {
      position: absolute;
      left: -210px;
    }

    &--is-top {
      top: var(--top);
    }

    &--is-bottom {
      bottom: 0;
    }

    &--is-fixed {
      position: fixed;
      top: 100px;
      margin-left: -210px;
    }

    &--is-vertical {
      position: absolute;
      top: 580px;
      left: -183px;

      .blog-post__share-links {
        margin-top: 0;
        flex-direction: column;

        .blog-post__share-link {
          margin: 0;
          margin-bottom: 30px;
        }
      }
    }

    @media only screen and (max-width: 1285px) {
      display: none;
    }
  }

  &__share-links {
    display: flex;
    margin-top: 20px;
    margin-bottom: 33px;
  }

  &__share-link {
    width: 33px;
    height: 33px;
    display: block;
    background-repeat: no-repeat;
    margin-right: 24px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.icon-wrapper {
      &__facebook-icon {
        @include social-network-facebook;
      }
      &__twitter-icon {
        @include social-network-twitter;
      }
      &__linkedin-icon {
        @include social-network-linkedin;
      }
    }
  }

  &__introduction-paragraph,
  &__table-of-content-list-item,
  &__table-of-content-title {
    @include font('Inter', 17px, 400);
    margin: 25px 0;
    color: $text-color--black-oil;
    line-height: 28px;
    letter-spacing: -0.02em;
    white-space: pre-wrap;
  }

  &__table-of-content {
    margin-top: 0;
    margin-bottom: 30px;
  }

  &__table-of-content-list {
    list-style-type: disc;
  }

  &__table-of-content-title {
    @include font('Poppins', 1.9em, 700);
    margin-top: 0;
    margin-bottom: -5px;
  }

  &__table-of-content-list-item {
    margin: 15px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  &__comments {
    margin-top: 70px;
    margin-bottom: 50px;
  }

  &__back-to-list {
    padding: 12px 14px 4px;
    position: fixed;
    left: 28px;
    bottom: 20px;
    background-color: $bgcolor--red;
    border: 1px solid $border-color--red;
    border-radius: 2px;
    transition: 0.2s;
    cursor: pointer;
    i {
      display: inline-block;
      padding: 4px;
      border: solid $border-color--white;
      border-width: 0 3px 3px 0;
      transform: rotate(-135deg);
    }
    &:hover {
      background-color: $button-active--red;
    }
  }

  &__recommended-posts {
    background-color: $bgcolor--silver;
    margin-top: 88px;
  }

  &__recommended-posts-list {
    padding: 100px;
    display: flex;
  }

  &__recommended-post {
    width: 33.33333%;
    border-radius: 3px;
    transition: 0.2s;
    margin-right: 20px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    /deep/ .post-tag {
      background-color: $bgcolor--white-primary;
    }
    /deep/ .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--white-primary;
      }
    }
  }
}

.progress-bar {
  width: 0%;
  height: 2px;
  position: fixed;
  top: 0;
  background-color: $bgcolor--red;
  z-index: 3;
  @media only screen and (max-width: 768px) {
    height: 1px;
  }
}

@media only screen and (max-width: 1024px) {
  .blog-post {
    padding-bottom: 48px;

    &__background {
      display: none;
    }

    &__inner-container {
      margin: 0;
      max-width: none;
      h1 {
        margin-top: 0;
      }
    }

    &__introduction-paragraph,
    &__text-container,
    &__comments {
      padding: 0 24px;
    }

    &__recommended-posts-list {
      display: block;
      padding: 31px 24px;
    }

    &__recommended-posts {
      margin-top: 40px;
    }

    &__recommended-post {
      width: 100%;
      margin-right: 0;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    &__back-to-list {
      left: 24px;
    }
  }
}
</style>
