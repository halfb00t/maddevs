<template>
  <section class="modal-search">
    <div class="container">
      <!-- Search input -->
      <div class="modal-search_form">
        <label>
          <img
            class="modal-search_form-search"
            src="@/assets/img/common/magnify.svg"
            width="30"
            height="35"
            alt="Magnify"
          >
          <input
            ref="searchInput"
            v-model="value"
            type="text"
            placeholder="Search"
            @input="searchQuery"
          >
        </label>
        <button
          class="modal-search_form-close"
          @click="onClose"
        >
          <img
            src="@/assets/img/common/close-icon-search.svg"
            width="24"
            height="24"
            alt="Close"
          >
        </button>
      </div>

      <!-- Search result -->
      <div
        v-if="searchPosts && searchPosts.length"
        class="modal-search_result"
      >
        <div
          v-for="(post, i) of searchPosts"
          :key="`search-post-${i}`"
          class="modal-search_result-item"
        >
          <NuxtLink :to="link(post)">
            <img
              class="modal-search_result-item_img"
              :src="post.data.featured_image.url"
              alt="Post image"
            >
          </NuxtLink>
          <div class="modal-search_result-item_content">
            <NuxtLink :to="link(post)">
              <h4>{{ post.data.title[0].text }}</h4>
            </NuxtLink>
            <div class="modal-search_result-item_content-date">
              {{ formattedDate(post) }}
            </div>
            <NuxtLink
              :to="`/author/${getAuthor(post, 'uid')}/`"
              class="modal-search_result-item_content-author"
            >
              <img
                v-if="getAuthor(post, 'image')"
                :src="getAuthor(post, 'image').url"
                alt="Author"
              >
              <div>
                <h5>{{ getAuthor(post, 'name') }}</h5>
                <p>{{ getAuthor(post, 'position') }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Not found -->
      <div
        v-if="searchPosts && !searchPosts.length"
        class="modal-search_not-found"
      >
        No results found
      </div>

      <!-- Suggest -->
      <div
        v-if="filteredTags && filteredTags.length"
        class="modal-search_suggest"
      >
        <h5>May we suggest</h5>
        <div class="modal-search_suggest-list">
          <NuxtLink
            v-for="(tag, i) of filteredTags"
            :key="`search-tag-${i}`"
            :to="tagLink(tag.tagName)"
            class="modal-search_suggest-list-item"
          >
            {{ tag.tagName }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import formatDate from '@/helpers/formatDate'
import findPostAuthorMixin from '@/mixins/findPostAuthorMixin'
import linkResolver from '@/plugins/link-resolver.js'
import convertStringToSlug from '@/helpers/convertStringToSlug'
import debounce from '@/helpers/debounce'

export default {
  name: 'ModalSearch',

  mixins: [findPostAuthorMixin],

  data() {
    return {
      response: null,
      value: null,
      searchQuery: debounce(event => {
        const { value } = event.target
        if (typeof value !== 'string') return null
        this.setSearchQuery(value)
        this.getPosts(value)
        return value
      }, 300),
    }
  },

  computed: {
    ...mapGetters(['allAuthors', 'tags']),

    searchPosts() {
      if (!this.response || !this.response.results || !this.response.results.length) return []
      const list = [...this.response.results]
      return list.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    },

    filteredTags() {
      const ignoreTags = ['iOS development', 'iOS', 'Featured post', 'Software features']
      if (!this.tags || (this.tags && !this.tags.length)) return []
      return this.tags.filter(tag => !ignoreTags.some(ignoreTag => ignoreTag === tag.tagName))
    },
  },

  watch: {
    // eslint-disable-next-line
    '$route' () {
      this.onClose()
    },
  },

  created() {
    if (!this.filteredTags.length) this.getTagsFromPrismic()
  },

  mounted() {
    this.focusOnInput()
    document.addEventListener('keyup', this.listenKeys)
  },

  beforeDestroy() {
    document.removeEventListener('keyup', this.listenKeys)
  },

  methods: {
    ...mapActions(['getTagsFromPrismic', 'setSearchQuery', 'setSearchResponse']),

    focusOnInput() {
      if (!this.$refs.searchInput) return null
      return this.$refs.searchInput.focus()
    },

    async getPosts(query) {
      this.response = await this.$prismic.api.query(
        this.$prismic.predicates.fulltext('my.post.title', query),
      )
      this.setSearchResponse(this.response)
    },

    formattedDate(post) {
      return formatDate(post.data.date)
    },

    getAuthor(post, field) {
      try {
        if (!post || !field) return null
        const authorId = post.data.post_author.id
        if (!authorId) return null
        const author = this.findAuthor(authorId, this.allAuthors)
        return author[field]
      } catch {
        return null
      }
    },

    link(post) {
      return linkResolver(post)
    },

    tagLink(tag) {
      return linkResolver({ type: 'tag', uid: convertStringToSlug(tag) })
    },

    listenKeys(event) {
      if (event.keyCode === 27) this.cleanUp()
      if (event.keyCode === 13) this.onEnter()
    },

    updateUrl() {
      if (this.value && this.value.length) {
        this.$router.push({ path: '/blog/search-result/', query: { searchBy: this.value } })
      } else {
        this.$router.push('/blog/')
      }
    },

    cleanUp() {
      document.removeEventListener('keyup', this.listenKeys)
      this.onClose()
    },

    onClose() {
      this.$emit('on-close')
      this.response = null
    },

    onEnter() {
      if (this.searchPosts && this.searchPosts.length) {
        this.updateUrl()
        this.cleanUp()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .modal-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bgcolor--black-opacity-1;
    z-index: 999;
    padding-top: 115px;
    padding-bottom: 30px;
    box-sizing: border-box;
    overflow: auto;

    @media only screen and (max-width: 992px) {
      padding-top: 30px;
    }

    a {
      text-decoration: none;
    }

    // Form
    &_form {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      border-bottom: 1px solid $border-color--grey-pale;
      padding-bottom: 14px;
      position: sticky;
      top: -117px;
      background-color: $bgcolor--black-opacity-1;
      padding-top: 15px;

      @media only screen and (max-width: 440px) {
        padding-top: 10px;
        padding-bottom: 10px;
      }

      label {
        width: 100%;
        display: flex;
        align-items: center;
      }

      &-search {
        width: 30px;
        height: 35px;
        margin-right: 22px;

        @media only screen and (max-width: 440px) {
          width: 25px;
          height: 30px;
        }
      }

      input {
        width: 100%;
        border: 0;
        background-color: transparent;
        color: $text-color--white-primary;
        line-height: 130%;
        letter-spacing: -0.04em;
        @include font('Poppins', 33px, 600);

        @media only screen and (max-width: 440px) {
          @include font('Poppins', 26px, 600);
        }
      }

      &-close {
        width: auto;
        height: auto;
        border: 0;
        background-color: transparent;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;

          @media only screen and (max-width: 440px) {
            width: 19px;
            height: 19px;
          }
        }
      }
    }

    // Result
    &_result {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 48px;
      margin-top: 35px;

      @media only screen and (max-width: 1260px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }

      &-item {
        display: flex;

        &_img {
          width: 200px;
          height: auto;
          object-fit: cover;
          object-position: left;

          @media only screen and (max-width: 992px) {
            width: 150px;
          }

          @media only screen and (max-width: 768px) {
            width: 200px;
          }

          @media only screen and (max-width: 468px) {
            width: 150px;
          }
        }

        &_content {
          max-width: 188px;
          margin-left: 16px;

          h4 {
            max-height: 57px;
            line-height: 124%;
            letter-spacing: -0.03em;
            color: $text-color--white-primary;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            @include font('Poppins', 15px, 600);
          }

          &-date {
            font-weight: normal;
            line-height: 141%;
            letter-spacing: -0.02em;
            color: $text-color--grey-opacity-40-percent;
            margin: 8px 0;
            @include font('Inter', 11px, 400);
          }

          &-author {
            display: flex;
            margin-top: auto;

            img {
              width: 20px;
              height: 20px;
              border-radius: 100%;
              margin-right: 8px;
            }

            h5 {
              line-height: 141%;
              color: $text-color--white-primary;
              letter-spacing: -0.02em;
              @include font('Inter', 11px, 500);
            }

            p {
              line-height: 141%;
              color: $text-color--white07-opacity;
              letter-spacing: -0.02em;
              @include font('Inter', 11px, 400);
            }
          }
        }
      }
    }

    // Not found
    &_not-found {
      color: $text-color--red;
      font-weight: normal;
      line-height: 166%;
      letter-spacing: -0.035em;
      margin-top: 50px;
      @include font('Inter', 17px, 400);
    }

    &_suggest {
      margin-top: 50px;

      h5 {
        color: $text-color--grey-pale;
        line-height: 166%;
        letter-spacing: -0.02em;
        @include font('Inter', 13px, 400);
      }

      &-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 6px;
        margin-left: -5px;
        margin-right: -5px;

        &-item {
          line-height: 166%;
          letter-spacing: -0.02em;
          color: $text-color--cultured;
          background: $bgcolor--quote-box;
          border-radius: 2px;
          padding: 4px 16px;
          margin: 5px;
          text-decoration: none;
          @include font('Inter', 13px, 400);
        }
      }
    }
  }
</style>
