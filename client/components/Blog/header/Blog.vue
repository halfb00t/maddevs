<template>
  <CommonHeader
    :title="title"
    :subtitle="subtitle"
    :cover-image-url="featuredImage.url"
    :cover-image-alt-text="featuredImage.alt"
    :cover-image-width="featuredImage.dimensions.width"
    :cover-image-height="featuredImage.dimensions.height"
    :date="date"
  >
    <template #afterTitle>
      <div class="blog-post__post-info">
        <PostAuthor
          class="blog-post__post-info-author"
          v-bind="blogAuthor"
          theme="dark"
        />
        <PostAuthor
          v-bind="blogCoAuthor"
          theme="dark"
        />
        <div class="blog-post__tag">
          <PostTag
            v-if="tags.length"
            :tag="tags[0]"
            theme="dark"
          />
        </div>
      </div>
    </template>
  </CommonHeader>
</template>

<script>
import { mapGetters } from 'vuex'
import PostAuthor from '@/components/Blog/shared/PostAuthor'
import CommonHeader from '@/components/Blog/header/Common'
import PostTag from '@/components/Blog/shared/PostTag'

export default {
  name: 'Blog',
  components: {
    PostAuthor,
    CommonHeader,
    PostTag,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    featuredImage: {
      type: Object,
      default: () => {
      },
    },

    tags: {
      type: Array,
      required: true,
    },

    date: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapGetters(['blogAuthor', 'blogTag', 'blogCoAuthor']),
  },
}
</script>

<style scoped lang="scss">
/deep/ .blog-post {
  &__post-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 7px;
    margin-bottom: 43px;
    text-decoration: none;
    width: 100%;

    a {
      text-decoration: none;
    }

    /deep/ .blog-post__author-image {
      width: 30px;
      min-width: 30px;
      height: 30px;
    }
  }

  &__tag {
    display: flex;
  }
}

@media screen and (max-width: 1024px) {
  /deep/ .blog-post {
    &__post-info {
      padding: 0 24px;
      display: block;
      margin: 0 0 40px 0;
      &-author {
        width: 50%;
      }
    }

    &__tag {
      margin-top: 19px;
    }
  }
}

@media screen and (max-width: 768px) {
  /deep/ .blog-post {
    &__post-info {
      padding: 0 24px;
      display: block;
      margin: inherit;
      width: inherit;
      &-author {
        width: 100%;
        margin-bottom: 12px;
      }
    }
    &__tag {
      margin: 19px 0 44px 0;
    }
  }
}
</style>
