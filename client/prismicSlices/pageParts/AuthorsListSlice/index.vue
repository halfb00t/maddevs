<template>
  <section
    class="authors-slice-wrapper"
  >
    <div class="container container--1026">
      <UITagCloud />
      <div class="authors">
        <transition
          name="list"
          mode="out-in"
        >
          <div
            :key="activeTags.join(' ')"
            class="authors__list"
          >
            <div
              v-for="(author, i) of filteredPosts.slice(0, countOfShownAuthors)"
              :key="i"
              class="author-wrapper"
            >
              <NuxtLink
                class="authors__item author"
                :to="linkResolver({ type: 'author', uid : author.uid })"
              >
                <div class="author__image-wrapper">
                  <img
                    class="author__image"
                    :src="author.data.image.url"
                    :alt="author.data.image.alt"
                  >
                </div>
                <div class="author-info">
                  <span class="author-info__posts-count">
                    {{ author.post_count }}
                    posts
                  </span>
                  <h3 class="author-info__name">
                    {{ author.data.name }}
                  </h3>
                  <span class="author-info__position">
                    {{ author.data.position }}
                  </span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </transition>
        <button
          v-if="showButton && filteredPosts.length > countOfShownAuthors"
          class="authors__show-button"
          @click="showAllAuthors"
        >
          See All Authors
        </button>
      </div>
    </div>
  </section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import setSliceBackground from '@/helpers/setSliceBackground'
import linkResolver from '@/plugins/link-resolver'
import UITagCloud from '@/components/shared/UITagCloud'

export default {
  name: 'AuthorsListSlice',
  components: { UITagCloud },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
      countOfShownAuthors: 14,
      showButton: true,
    }
  },

  computed: {
    ...mapGetters([
      'authorsWithPostsData',
      'filteredPosts',
      'activeTags',
      'postsPage',
    ]),
  },

  async created() {
    await this.getAuthorsWithPosts()
    await this.$store.dispatch('setDefaultArrayWithTags', this.authorsWithPostsData)
  },

  updated() {
    this.$store.dispatch('setDefaultArrayWithTags', this.authorsWithPostsData)
  },

  methods: {
    ...mapActions(['getAuthorsWithPosts', 'setDefaultArrayWithTags']),
    linkResolver,
    showAllAuthors() {
      this.showButton = false
      this.countOfShownAuthors = this.authorsWithPostsData.length
    },
  },
}
</script>

<style lang="scss" scoped>
.container--1026{
  max-width: 1026px;
}
.authors {
  &-slice-wrapper {
    background-color: $bgcolor--white-primary;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 72px;
    @media screen and (max-width: 768px) {
      grid-row-gap: 48px;
    }
    @media screen and (max-width: 580px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__show-button {
    box-sizing: border-box;
    padding: 16px 24px;
    line-height: 20px;
    width: 100%;
    border: 1px solid rgba(236, 28, 36, 0.5);
    background-color: #ec1c24;
    border-radius: 4px;
    color: #f5f7f9;
    box-shadow: none;
    transition: 0.4s;
    cursor: pointer;
    letter-spacing: -0.4px;
    margin-top: 72px;
    @include font('Inter', 16px, 600);

    &:hover {
      background-color: #f04b51
    }
  }
}

.author {
  display: inline-flex;

  &-wrapper {
  }

  &__image {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    @media screen and (max-width: 1024px) {
      width: 110px;
      height: 110px;
    }
  }

  &-info {
    margin-left: 20px;

    &__posts-count {
      background: $bgcolor--silver;
      color: $text-color--black;
      border-radius: 2px;
      display: inline-block;
      padding: 2px 10px;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: -1px;

      @include font('Inter', 14px, 400);
    }

    &__name {
      color: $text-color--black-oil;
      margin-bottom: 8px;
      letter-spacing: -1px;
      @include font('Inter', 28px, 700);
    }

    &__position {
      color: $text-color--grey-pale;
      letter-spacing: -1px;
      @include font('Inter', 22px, 400);
    }

    @media screen and (max-width: 1024px) {
      &__name {
        font-size: 26px;
        line-height: 30px;
      }

    }

    @media screen and (max-width: 768px) {
      &__posts-count {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.4px;

      }
      &__name {
        font-size: 18px;
        line-height: 22px;
        letter-spacing: -1px;

      }
      &__position {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -1px;

      }
    }
    @media screen and (max-width: 580px) {
      &__posts-count {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.02em;
      }
      &__name {
        font-size: 21px;
        line-height: 24px;
        letter-spacing: -1px;
      }
      &__position {
        font-size: 17px;
        line-height: 24px;
        letter-spacing: -1px;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-in-out;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}
</style>
