<template>
  <div
    class="ebook-card"
    data-testid="ebook-card"
  >
    <NuxtLink
      :to="`/ebooks/${link}`"
      class="ebook-card__image"
    >
      <img
        v-lazy-load
        :data-src="image.url"
        :alt="image.alt || 'Image'"
        width="270"
        height="289"
      >
    </NuxtLink>
    <div class="ebook-card__info">
      <NuxtLink :to="`/ebooks/${link}`">
        <h4
          class="ebook-card__title ebook-card__title--full"
          :title="title"
        >
          {{ title }}
        </h4>
        <h4
          class="ebook-card__title ebook-card__title--short"
          :title="title"
        >
          {{ shortTitle }}
        </h4>
        <h4
          class="ebook-card__title ebook-card__title--very-short"
          :title="title"
        >
          {{ veryShortTitle }}
        </h4>
        <p
          class="ebook-card__description"
          v-html="subtitle"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import textEllipsis from '@/helpers/textEllipsis'

export default {
  name: 'EbookCard',
  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },

    image: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    shortTitle() {
      const limit = 46
      return textEllipsis(this.title, { limit, trimToSpace: false })
    },

    veryShortTitle() {
      const limit = 38
      return textEllipsis(this.title, { limit })
    },
  },
}
</script>
<style lang="scss" scoped>
.ebook-card {
  display: flex;
  flex-direction: column;

  &__image {
    background: $bgcolor--silver;
    padding: 22.5px 27.5px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__title {
    @include font('Poppins', 22.78px, 600);
    line-height: 130%;
    letter-spacing: -1px;
    color: $text-color--chinese-black;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 1024px) {
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: -0.4px;
    }

    &--short {
      display: block;
      @media screen and (max-width: 1196px) {
        display: none;
      }
    }
    &--very-short {
      display: none;
      @media screen and (max-width: 1196px) {
        display: block;
      }
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
    &--full {
      display: none;
      height: auto;
      @media screen and (max-width: 991px) {
        display: block;
      }
      @media screen and (max-width: 600px) {
        display: block;
      }
    }
  }

  &__description {
    @include font('Inter', 16px, 400);
    line-height: 166%;
    letter-spacing: -0.035em;
    color: $text-color--grey-pale;
  }
}
</style>
