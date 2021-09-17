<template>
  <NuxtLink
    :to="getPostLink"
    class="customer-university__list-item"
  >
    <div class="single-cluster">
      <div class="single-cluster__image">
        <img
          v-lazy-load
          :data-src="cover_image.url"
          :alt="cover_image.alt"
          width="295"
          height="160"
        >
      </div>
      <div class="single-cluster__info">
        <h3 class="single-cluster__title">
          {{ $prismic.asText(cluster_name) }}
        </h3>
        <div class="single-cluster__description">
          {{ $prismic.asText(description) }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script>

export default {
  name: 'CustomerUniversityListItem',
  props: {
    cluster_name: {
      type: Array,
      default: () => ([]),
    },

    description: {
      type: Array,
      default: () => ([]),
    },

    cover_image: {
      type: Object,
      default: () => ({}),
    },

    items: {
      type: Array,
      default: () => ([]),
    },

  },

  computed: {
    postLink() {
      if (!this.items.length) return ''
      return `/customer-university/${this.items[0].cu_post.uid}/`
    },
  },
}
</script>
<style scoped lang="scss">
.customer-university {
  &__list-item {
    display: block;
    margin-bottom: 32px;

    @media screen and (max-width: 1024px) {
      margin-bottom: 56px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.single-cluster {
  display: flex;
  @media screen and (max-width: 1024px) {
    display: block;
  }

  &__image {
    display: block;
    flex-shrink: 0;
    text-align: center;
    width: 52.68%;
    margin-right: 20px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      margin-bottom: 14px;
    }

    img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }

  &__title {
    @include font('Poppins', 21.25px, 600);
    color: $text-color--white-primary;
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.02em;
    font-feature-settings: 'ss02' on;
    margin-bottom: 6px;

    @media screen and (max-width: 1024px) {
      color: $text-color--grey-opacity-20-percent;
      font-size: 22.78px;
      letter-spacing: -1px;
      font-feature-settings: 'zero' on, 'ordn' on, 'ss02' on, 'ss05' on;
      margin-top: 14px;
    }
  }

  &__description {
    @include font('Inter', 16px, 400);
    font-style: normal;
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-matterhorn;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
