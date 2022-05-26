<template>
  <div class="container">
    <div class="current-tag">
      <div class="current-tag__info">
        <h1 class="current-tag__title">
          {{ title }}
        </h1>
        <p
          v-if="getTagDescriptionIdx !== null"
          class="current-tag__description"
        >
          {{ tagsDescriptions[getTagDescriptionIdx].description }}
        </p>
        <p class="current-tag__posts-count">
          A collection of {{ count }} posts
        </p>
      </div>
      <div
        v-if="getTagDescriptionIdx !== null"
        class="current-tag__lottie"
      >
        <LottieMad
          class="case_lottie"
          height="201px"
          :lottie-link="$getMediaFromS3(`/images/custom/tags/${tagsDescriptions[getTagDescriptionIdx].title.replace(/ /g, '-').toLowerCase()}-tag.json`)"
          :autoplay="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LottieMad from '@/components/shared/LottieMad'
import { tagsDescriptions } from '@/data/tagsDescriptions'

export default {
  name: 'TagBanner',

  components: { LottieMad },

  props: {
    title: {
      type: String,
      default: null,
    },

    count: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      tagsDescriptions,
    }
  },

  computed: {
    getTagDescriptionIdx() {
      const index = this.tagsDescriptions.findIndex(tag => tag.title === this.title?.trim())
      if (index === -1) return null
      return index
    },
  },
}
</script>

<style lang="scss" scoped>
  .current-tag {
    padding-top: 117px;
    padding-bottom: 97px;
    color: $text-color--white-primary;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &__info {
      width: 61%;
    }
    &__title {
      font-size: 68px;
      line-height: 130%;
      letter-spacing: -2px;
    }
    &__description {
      @include font('Inter', 22px, 400);
      line-height: 30px;
      letter-spacing: -1px;
      margin-top: 32px;
    }
    &__posts-count {
      margin-top: 32px;
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-opacity-40-percent;
    }
    @media only screen and (max-width: 991px) {
      padding-top: 134px;
      padding-bottom: 48px;
      &__title {
        font-size: 42px;
        letter-spacing: -1px;
      }
      &__posts-count {
        font-size: 17px;
        margin-top: 12px;
      }
    }
    @media screen and (max-width: 800px) {
      flex-wrap: wrap-reverse;
      &__info {
        width: 100%;
      }
      &__lottie {
        margin-bottom: 52px;
      }
    }
    @media screen and (max-width: 580px) {
      &__lottie {
        width: 147px;
        height: 114px;
      }
    }
  }
</style>
