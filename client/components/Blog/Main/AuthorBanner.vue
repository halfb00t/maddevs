<template>
  <div class="container">
    <div class="current-author">
      <div class="current-author__image">
        <img
          v-lazy-load
          :data-src="authorImage.url"
          :alt="authorImage.alt || 'Image'"
          width="165"
          height="165"
        >
      </div>
      <h1 class="current-author__name">
        {{ blogAuthor.name }}
      </h1>
      <p class="current-author__position">
        {{ blogAuthor.position }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthorBanner',

  computed: {
    ...mapGetters(['blogAuthor']),

    authorImage() {
      const { header = {} } = this.blogAuthor?.image
      return header
    },
  },
}
</script>

<style lang="scss" scoped>
  .current-author {
    padding-top: 82px;
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: $text-color--white-primary;
    @media screen and (max-width: 991px) {
      padding-top: 92px;
      padding-bottom: 49px;
    }

    &__image {
      background: $bgcolor--black-light;
      &,
      img {
        position: relative;
        display: block;
        width: 165px;
        height: 165px;
        border-radius: 50%;
        @media screen and (max-width: 991px) {
          width: 128px;
          height: 128px;
        }
      }
    }

    &__name {
      margin-top: 29px;
      font-size: 41.5px;
      line-height: 130%;
      letter-spacing: -0.04em;
      @media screen and (max-width: 991px) {
        margin-top: 31px;
        font-size: 35px;
        letter-spacing: -1px;
      }
    }

    &__position {
      margin-top: 8px;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
      @media screen and (max-width: 991px) {
        margin-top: 7px;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.02em;
      }
    }
  }
</style>
