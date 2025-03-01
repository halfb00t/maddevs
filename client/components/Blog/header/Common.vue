<template>
  <div
    id="introduction-container"
    class="blog-post__introduction-container"
  >
    <slot name="beforeTitle" />
    <span
      v-if="date"
      class="blog-post__date"
    >
      {{ date }}
    </span>
    <h1
      :id="createAnchorID(title)"
      class="blog-post__blog-title title"
    >
      {{ title }}
    </h1>
    <p class="blog-post__blog-sub-title">
      {{ subtitle }}
    </p>
    <slot name="afterTitle" />
    <div
      v-if="imageUrl"
      class="blog-post__introduction-image"
      :class="imageBackgroundClass"
    >
      <img
        :src="`${imageUrl}&w=983&h=534`"
        :srcset="`${imageUrl}&w=1966&h=1068 2x`"
        :alt="coverImageAltText || 'Image'"
        width="983"
        height="534"
      >
    </div>
  </div>
</template>

<script>
import mainMixins from '@/mixins/mainMixins'
import extractFileExtension from '@/helpers/extractFileExtension'

export default {
  name: 'CommonHeader',

  mixins: [mainMixins],

  props: {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      required: false,
      default: '',
    },

    coverImageUrl: {
      type: String,
      default: '',
    },

    coverImageAltText: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    },
  },

  head() {
    return this.compressedImage && {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.compressedImage,
        },
      ],
    }
  },

  computed: {
    imageUrl() {
      const imageWithoutCrop = this.coverImageUrl.split('?')[0] // get image url without params
      const compressedImage = `${imageWithoutCrop}?q=50` // set custom image params
      return compressedImage
    },

    imageBackgroundClass() {
      const allowedExtensions = ['jpeg', 'jpg']
      const extension = extractFileExtension(this.coverImageUrl)
      return allowedExtensions.includes(extension) ? 'blog-post__introduction-image--with-background' : ''
    },
  },
}
</script>

<style scoped lang="scss">
.blog-post {
  &__date {
    display: block;
    color: $text-color--grey-pale;
    font-weight: 400;
    font-size: 12px;
    line-height: 166%;
    margin-bottom: 15px;
    letter-spacing: -0.1px;

    @media screen and (max-width: 1024px) {
      padding: 0 24px;
    }
  }

  &__blog-title {
    @include font('Poppins', 52px, 400);
    line-height: 67px;
    letter-spacing: -2px;
    color: $text-color--white;
  }

  &__blog-sub-title {
    @include font('Inter', 17px, 300);
    margin: 15px 0 36px 0;
    color: $text-color--white-primary;
    letter-spacing: 0.2px;
    font-size: 17px;
    line-height: 28px;
  }

  &__introduction-image {
    width: 983px;
    margin-left: -82.5px;
    &--with-background {
      background-color: $bgcolor--silver;
    }
    img {
      width: 100%;
      height: auto;
      max-height: 534px;
      display: block;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 1024px) {
  .blog-post {
    &__introduction-container {
      padding-top: 120px;
      background-color: $bgcolor--black;
    }

    &__blog-title {
      padding: 0 24px;
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1px;
    }

    &__blog-sub-title {
      padding: 0 24px;
    }

    &__introduction-image {
      width: 100%;
      margin: 0;
      img {
        vertical-align: bottom;
      }
    }
  }
}
</style>
