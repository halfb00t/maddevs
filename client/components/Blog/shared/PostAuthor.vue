<template>
  <NuxtLink
    v-if="name"
    :event="disabled ? '' : 'click'"
    :to="link"
    :class="`post-author--${theme}-theme`"
    class="post-author"
  >
    <div
      v-if="authorImage !== undefined"
      class="post-author__image"
    >
      <img
        :src="authorImage.url"
        :alt="authorImage.alt || 'Image'"
        width="40"
        height="40"
      >
    </div>
    <div
      v-else
      class="post-author__none-image"
    />
    <div class="post-author__info">
      <p
        class="post-author__name"
        :title="name"
      >
        {{ shortTitle }}
        <span
          class="post-author__divider"
        > / </span>
        <span
          class="post-author__position"
          :title="position"
        >
          {{ position }}
        </span>
      </p>
      <span
        v-if="date"
        class="post-author__date"
      >
        {{ date }}
      </span>
    </div>
  </NuxtLink>
</template>

<script>
import linkResolver from '@/plugins/link-resolver'

export default {
  name: 'PostAuthor',
  props: {
    uid: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    name: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },

    image: {
      type: Object,
      default: () => ({
        thumbnail: {
          url: '',
          alt: '',
          dimensions: {},
        },
      }),
    },

    theme: {
      type: String,
      default: 'light',
    },
  },

  head() {
    return this.authorImage?.url && {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.authorImage?.url,
        },
      ],
    }
  },

  computed: {
    authorImage() {
      const { thumbnail = {} } = this.image
      return thumbnail
    },

    link() {
      return linkResolver({ type: 'author', uid: this.uid })
    },

    shortTitle() {
      return this.name.substr(0, 100)
    },
  },
}
</script>

<style scoped lang="scss">
.post-author {
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  &--dark-theme {
    .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--black-light;
      }
      &__name {
        color: $text-color--white;
      }
    }
  }
  &--light-theme {
    .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--silver;
      }
      &__name {
        color: $text-color--black;
      }
    }
  }

  &__image,
  &__none-image {
    &,
    img {
      display: block;
      position: relative;
      width: 40px;
      min-width: 40px;
      height: 40px;
      border-radius: 9.4px;
    }
  }

  &__info {
    max-width: 100%;
    margin-left: 9px;
    overflow: hidden;
  }

  &__name,
  &__position {
    @include font('Inter', 15px, 400);
    display: block;
    line-height: 166%;
    letter-spacing: -0.1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__divider {
    color: $text-color--ruddy;
  }

  &__position {
    display: inline;
    color: $text-color--grey-matterhorn;
  }

  &__date {
    color: $text-color--grey-pale;
    font-size: 12px;
    line-height: 166%;
  }
}
</style>
