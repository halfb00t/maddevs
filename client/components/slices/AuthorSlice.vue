<template>
  <div
    v-if="blogAuthor"
    class="author-slice"
  >
    <div class="author-slice__info">
      <NuxtLink
        class="author-slice__image author-slice__link"
        :to="link"
      >
        <img
          v-lazy-load
          :data-src="authorImage.url"
          :alt="authorImage.alt || 'Image'"
          width="68"
          height="68"
        >
      </NuxtLink>
      <div>
        <NuxtLink
          class="author-slice__link"
          :to="link"
        >
          <p class="author-slice__name">
            {{ blogAuthor.name }}
          </p>
          <span class="author-slice__position">
            {{ blogAuthor.position }}
          </span>
        </NuxtLink>
        <ul
          v-if="blogAuthor.socialNetworks.length"
          class="author-slice__social-list"
        >
          <li
            v-for="network in blogAuthor.socialNetworks"
            :key="network.key"
            :class="`author-slice__social-item--${network.key}`"
            data-testid="test-social"
            class="author-slice__social-item"
          >
            <a
              :href="network.link.url"
              :target="network.link.target"
            >
              <img
                v-lazy-load
                :data-src="require(`@/assets/img/AuthorSlice/svg/${network.key}.svg`)"
                :alt="network.title || 'Image'"
                width="22"
                height="22"
              >
            </a>
          </li>
        </ul>
      </div>

      <NuxtLink
        class="author-slice__image author-slice__link"
        :to="link"
      >
        <img
          v-lazy-load
          :data-src="authorImage.url"
          :alt="authorImage.alt || 'Image'"
          width="68"
          height="68"
        >
      </NuxtLink>
      <div>
        <NuxtLink
          class="author-slice__link"
          :to="link"
        >
          <p class="author-slice__name">
            {{ blogAuthor.name }}
          </p>
          <span class="author-slice__position">
            {{ blogAuthor.position }}
          </span>
        </NuxtLink>
        <ul
          v-if="blogAuthor.socialNetworks.length"
          class="author-slice__social-list"
        >
          <li
            v-for="network in blogAuthor.socialNetworks"
            :key="network.key"
            :class="`author-slice__social-item--${network.key}`"
            data-testid="test-social"
            class="author-slice__social-item"
          >
            <a
              :href="network.link.url"
              :target="network.link.target"
            >
              <img
                v-lazy-load
                :data-src="require(`@/assets/img/AuthorSlice/svg/${network.key}.svg`)"
                :alt="network.title || 'Image'"
                width="22"
                height="22"
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="contributors.length"
      class="author-slice__contributors"
    >
      <span class="author-slice__contributors-title">Contributors:</span>
      <ul class="author-slice__contributors-list">
        <li
          v-for="contributor in contributors"
          :key="contributor.image.url"
          data-testid="test-contributors"
          class="author-slice__contributors-item"
        >
          <a
            v-if="contributor.link"
            :href="contributor.link.url"
            :target="contributor.link.target"
          >
            <img
              v-lazy-load
              :data-src="contributor.image.url"
              :alt="contributor.image.alt || 'Image'"
              width="28"
              height="28"
            >
          </a>
          <img
            v-else
            v-lazy-load
            :data-src="contributor.image.url"
            :alt="contributor.image.alt || 'Image'"
            width="28"
            height="28"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import linkResolver from '@/plugins/link-resolver'

export default {
  name: 'AuthorSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      contributors: [],
    }
  },

  computed: {
    ...mapGetters(['blogAuthor', 'blogCoAuthor']),

    authorImage() {
      const { author_slice: authorSlice = {} } = this.blogAuthor?.image
      return authorSlice
    },

    link() {
      return linkResolver({ type: 'author', uid: this.blogAuthor.uid })
    },
  },

  created() {
    this.contributors = this.slice.items.filter(contributor => (contributor.image && contributor.image.url))
  },
}
</script>

<style scoped lang="scss">
.author-slice {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin: 70px 0;
  border-top: 1px solid $border-color--red;
  @media only screen and (max-width: 1024px) {
    margin: 49px 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__info {
    display: flex;
    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
  &__image {
    margin-right: 17px;
    background-color: $bgcolor--silver;
    @media screen and (max-width: 1024px) {
      margin-right: 0;
    }
    &,
    img {
      display: block;
      position: relative;
      width: 68px;
      min-width: 68px;
      height: 68px;
      border-radius: 50%;
      @media screen and (max-width: 1024px) {
        width: 64px;
        min-width: 64px;
        height: 64px;
      }
    }
  }
  &__link {
    text-decoration: none;
  }
  &__name {
    @include font('Poppins', 21px, 600);
    line-height: 130%;
    letter-spacing: -0.02px;
    color: $text-color--black-oil;
    margin: 8px 0 2px;
    @media screen and (max-width: 1024px) {
      margin-top: 13px;
    }
  }
  &__position {
    font-size: 15px;
    line-height: 166%;
    letter-spacing: -0.1px;
    color: $text-color--grey-pale;
    @media screen and (max-width: 1024px) {
      margin-top: 4px;
    }
  }
  &__social {
    &-list {
      list-style: none;
      padding: 0;
      margin-top: 16px;
      display: flex;
      flex-flow: row wrap;
      @media screen and (max-width: 1024px) {
        margin-top: 14px;
        justify-content: center;
      }
    }
    &-item {
      width: 29px;
      height: 29px;
      border-radius: 6px;
      background: $bgcolor--silver;
      margin-right: 16px;
      &:last-of-type {
        margin-right: 0;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
  &__contributors {
    margin-left: 20px;
    @media screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 22px;
    }
    &-title {
      font-size: 13px;
      line-height: 166%;
      letter-spacing: -0.1px;
      color: $text-color--quote-box;
    }
    &-list {
      padding: 0;
      list-style: none;
      margin-top: 2px;
      display: flex;
      flex-flow: row nowrap;
      @media screen and (max-width: 1024px) {
        justify-content: center;
      }
    }
    &-item {
      margin-left: -6px;
      background: $bgcolor--silver;
      border: 2px solid $border-color--white;
      @media screen and (max-width: 1024px) {
        border: 0;
        margin-left: 6px;
      }
      &:first-of-type {
        margin-left: -2px;
      }
      &,
      a,
      img {
        position: relative;
        display: block;
        width: 28px;
        min-width: 28px;
        height: 28px;
        border-radius: 50%;
      }
    }
  }
}
</style>
