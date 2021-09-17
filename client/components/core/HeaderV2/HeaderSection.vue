<template>
  <div
    class="header-section"
    :class="`header-section-${name}`"
  >
    <div class="container">
      <div class="header-section__content">
        <div class="header-section__menus">
          <div
            v-for="menu in menus"
            :key="menu.name"
            class="header-menu"
          >
            <p
              v-if="menu.name"
              class="header-menu__name"
            >
              {{ menu.name }}
            </p>
            <ul class="header-menu__list">
              <li
                v-for="{label, link} in menu.routes"
                :key="label"
                class="header-menu__item"
              >
                <NuxtLink
                  v-if="!extractLink(link).isExternalLink"
                  :to="extractLink(link).url"
                >
                  {{ label }}
                </NuxtLink>
                <a
                  v-else
                  :href="extractLink(link).url"
                  :target="extractLink(link).target"
                >
                  {{ label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="header-section__divider">
        <div class="header-section__post">
          <div class="header-post">
            <NuxtLink
              :to="getPostPath(post.type, post.uid)"
              class="header-post__content"
            >
              <div class="header-post__text">
                <p class="header-post__text-title">
                  {{ $prismic.asText(post.title) }}
                </p>
                <p class="header-post__text-paragraph">
                  {{ postParagraph }}
                </p>
              </div>
              <img
                :src="post.featuredImage && post.featuredImage.url"
                :alt="post.featuredImage && post.featuredImage.alt"
                width="260"
                height="161"
                class="header-post__image"
              >
            </NuxtLink>
            <div class="header-post__meta">
              <PostAuthor
                v-bind="postAuthor"
                :date="post.date"
                theme="dark"
                class="header-post__meta-author"
              />
              <PostTag
                v-if="post.tags && post.tags.length"
                :tag="post.tags[0]"
                theme="dark"
                class="header-post__meta-tag"
              />
            </div>
            <NuxtLink
              to="/blog/"
              class="header-post__more-btn"
            >
              More articles
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostTag from '@/components/Blog/shared/PostTag'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import getFirstParagraph from '@/helpers/getFirstParagraph'

export default {
  name: 'HeaderSection',
  components: {
    PostAuthor,
    PostTag,
  },

  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },

    menus: {
      type: Array,
      default: () => ([]),
      required: true,
    },

    post: {
      type: Object,
      default: () => ({}),
      required: true,
    },

    postAuthor: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  computed: {
    postParagraph() {
      const { slices } = this.post
      const limit = 120
      return getFirstParagraph(slices, limit)
    },
  },

  methods: {
    getPostPath(type, uid) {
      if (type === 'post') return `/blog/${uid}/`
      if (type === 'customer_university') return `/customer-university/${uid}/`
      return '/'
    },

    extractLink({
      link_type = '', // eslint-disable-line
      url = '/',
      target = null,
      type: documentType,
      uid: documentUID,
    }) {
      const linkType = link_type.toLowerCase()

      if (linkType === 'web') {
        if (url.includes(process.env.domain)) {
          return {
            isExternalLink: false,
            target,
            url: url.split(process.env.domain)[1],
          }
        }
        return {
          isExternalLink: true,
          target: '_blank',
          url,
        }
      }

      if (
        linkType === 'document'
        && (documentType === 'post' || documentType === 'customer_university')
        && documentUID
      ) {
        return {
          isExternalLink: false,
          target: null,
          url: this.getPostPath(documentType, documentUID),
        }
      }

      if (linkType === 'media') {
        return {
          isExternalLink: true,
          target: '_blank',
          url,
        }
      }

      return {
        isExternalLink: false,
        target: null,
        url: '/',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-section {
  cursor: auto;
  position: absolute;
  top: 63px;
  right: 0;
  left: 0;
  padding: 24px 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 275px;
  overflow: hidden;
  background: rgba(17, 17, 17, 0.85);
  backdrop-filter: blur(16px);
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;
  transition: all 0;
  &--active {
    transform: scaleY(1);
    opacity: 1;
    visibility: visible;
    transition: all .5s ease;
  }

  a {
    color: $text-color--white-primary;
  }

  &__content {
    display: flex;
  }

  &__menus {
    overflow: auto;
    max-height: 320px;
    width: calc(100% + 40px);
    padding-right: 15px;
    padding-left: 28px;
    margin-left: -28px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 30px;
    scrollbar-color: $border-color--grey-selected;
    scrollbar-width: 6px;
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: $border-color--grey-selected;
    }
    &::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }
    &::-webkit-track {
      background-color: transparent;
    }
    @media screen and (max-width: 1360px) {
      max-height: 547px;
    }
    @media screen and (max-width: 1280px) {
      max-height: 510px;
    }
    @media screen and (max-width: 1140px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__divider {
    display: block;
    width: 2px;
    border: 0px solid;
    background-color: $bgcolor--red;
    margin: 0 24px 0 12px;
  }

  &__post {
    width: 100%;
    max-width: 540px;
    overflow: hidden;
    @media screen and (max-width: 1360px) {
      max-width: 450px;
    }
    @media screen and (max-width: 1280px) {
      max-width: 340px;
    }
  }
}

.header-menu {
  box-sizing: border-box;
  width: 100%;

  &__name {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    color: $text-color--grey-pale;
    margin-bottom: 2px;
  }

  &__list {
    width: 100%;
  }

  &__item {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    letter-spacing: -0.1px;
    display: flex;
    &::before {
      content: '';
      display: block;
      opacity: 0;
      transform: translate(-100%, 20px) scale(0.6);
      margin-left: -18px;
      margin-right: 8px;
      width: 10px;
      height: 3px;
      background-color: $bgcolor--red;
      transition: all .15s ease-in;
    }
    &:hover {
      a {
        color: $text-color--red;
      }
      &::before {
        opacity: 1;
        transform: translate(-100%, 20px) scale(1);
      }
    }
    a {
      padding: 8px 0;
      display: block;
      width: 100%;
      color: $text-color--white-primary;
      transition: all .15s ease;
    }
    &--active {
      font-weight: 700;
      a {
        cursor: default;
        color: $text-color--red !important;
      }
      &:hover::before  {
        display: none;
      }
    }
  }
}

.header-post {
  &__content {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1360px) {
      flex-direction: column-reverse;
    }
  }

  &__text {
    margin-right: 16px;
    @media screen and (max-width: 1360px) {
      margin-right: 0;
      margin-top: 20px;
    }
    &-title {
      @include font('Inter', 18px, 700);
      line-height: 22px;
      letter-spacing: -0.4px;
    }
    &-paragraph {
      @include font('Inter', 15px, 400);
      line-height: 24px;
      letter-spacing: -0.4px;
      margin-top: 8px;
      color: $text-color--grey-opacity-40-percent;
    }
  }

  &__image {
    border-radius: 4px;
    display: block;
    width: 260px;
    height: auto;
    object-fit: cover;
    @media screen and (max-width: 1360px) {
      width: 100%;
      height: auto;
    }
  }

  &__meta {
    margin-top: 18px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    @media screen and (max-width: 1360px) {
      flex-direction: column;
    }
    &-tag {
      margin-left: 20px;
      @media screen and (max-width: 1360px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }

  &__more-btn {
    @include font('Inter', 15px, 400);
    line-height: 25px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 4px;
    color: $text-color--white-primary;
    border: 1px solid $border-color--grey-selected;
    padding: 7px 20px;
    transition: 0.3s ease;
    &:hover {
      background-color: $bgcolor--grey-dark;
      color: $text-color--black-lighter;
    }
  }
}
</style>
