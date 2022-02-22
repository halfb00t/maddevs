<template>
  <section
    id="transparent-header-area"
    class="blog-header"
  >
    <div class="blog-header_bg">
      <img
        :src="$getMediaFromS3('/images/Blog/blog-header-bg.png')"
        width="1440"
        height="741"
        alt="Team"
      >
    </div>
    <div class="container">
      <div
        ref="sectionText"
        :style="{opacity: sectionTextOpacity}"
        class="blog-header_info"
      >
        <h1>IT Blog</h1>
        <p>Here we share our processes, best practices, achievements, and knowledge with you based on our extensive experience working on various IT projects.</p>
      </div>
      <!-- The New Post -->
      <div class="blog-header_last-post">
        <FeaturedPost
          v-if="postsLoaded && Author"
          title-tag="h2"
          :post="featuredPost"
          :author="Author"
        />
        <SkeletonFeaturedPost
          v-else
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import FeaturedPost from '@/components/Blog/shared/FeaturedPost'
import SkeletonFeaturedPost from '@/components/Blog/skeletons/SkeletonFeaturedPost'

import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import changeSectionTextOpacityMixin from '@/mixins/changeSectionTextOpacityMixin'

export default {
  name: 'BlogHeader',
  components: {
    FeaturedPost,
    SkeletonFeaturedPost,
  },

  mixins: [
    findPostAuthorMixin,
    changeSectionTextOpacityMixin('sectionText'),
  ],

  computed: {
    ...mapGetters(['featuredPost', 'postsLoaded', 'allAuthors']),

    Author() {
      if (!this.featuredPost.data.post_author.id) return null
      return this.findAuthor(this.featuredPost.data.post_author.id, this.allAuthors)
    },
  },
}
</script>

<style scoped lang="scss">
.blog-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  padding-top: 62px; // height of header component
  overflow: hidden;
  box-sizing: border-box;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
  }

  &_bg {
    width: calc(100% + 4px);
    height: 741px;
    max-height: 741px;
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;

    @media screen and (max-width: 1024px) {
      height: 527px;
      max-height: 527px;
    }

    @media screen and (max-width: 768px) {
      height: 395px;
      max-height: 395px;
    }

    @media screen and (max-width: 560px) {
      height: 579px;
      max-height: 579px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      z-index: 1;
    }

    &::after {
      content: '';
      width: 100%;
      height: 200px;
      display: block;
      position: relative;
      margin-top: -200px;
      background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #111213 70%);
      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #111213 70%);
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #111213 70%);
      z-index: 2;
    }
  }

  &_info {
    width: 100%;

    h1 {
      width: 100%;
      @include font('Inter', 100px, 700);
      line-height: 96px;
      color: $text-color--white-primary;
      text-align: center;
      letter-spacing: -0.04em;
      margin-top: 135px;

      @media screen and (max-width: 1024px) {
        font-size: 80px;
        line-height: 88px;
      }

      @media screen and (max-width: 768px) {
        font-size: 52px;
        line-height: 57px;
        margin-top: 98px;
      }
    }

    p {
      width: 100%;
      max-width: 815px;
      @include font('Inter', 32px, 400);
      line-height: 44px;
      color: $text-color--cultured;
      text-align: center;
      letter-spacing: -0.013em;
      margin: 32px auto auto;

      @media screen and (max-width: 1024px) {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 124px;
      }

      @media screen and (max-width: 768px) {
        font-size: 21px;
        line-height: 30px;
        margin-bottom: 64px;
      }
    }
  }

  &_last-post {
    padding: 102px 0 118px;
    margin-top: auto;

    @media only screen and (max-width: 991px) {
      padding: 36px 0;
    }

    /deep/ .featured-post__title {
      color: $text-color--white-primary;
    }
  }
}
</style>
