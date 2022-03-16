<template>
  <div
    class="colored-card"
    :class="`colored-card--${cardIndex} ${cardColor.card} ${pictureRight ? 'row-flex' : ''}`"
  >
    <template v-if="cardImage.file && !pictureRight">
      <div class="colored-card__image-wrapper">
        <Picture
          class="colored-card__image"
          :class="`colored-card-image-${cardImage.file}`"
          :width="396"
          :height="200"
          :file="cardImage.file"
          :alt="cardImage.alt || 'Image'"
          :folder="cardImage.folder"
          extension="png"
        />
      </div>
    </template>

    <div
      class="colored-card__footer"
      :class="`${centeredTitle ? 'colored-card__footer--centered' : ''}`"
    >
      <span
        v-if="preTitle"
        class="colored-card__pre-title case_paragraph-uppercase m-10_bottom media-m-8_bottom"
        :class="cardColor.preTitle"
      >{{ preTitle }}</span>
      <h3
        v-if="title"
        class="colored-card__title case_title_h4 m-10_bottom media-m-8_bottom"
        :class="cardColor.title"
      >
        {{ title }}
      </h3>

      <template v-if="Array.isArray(descriptions)">
        <TextParagraph
          v-for="description in descriptions"
          :key="description"
          class="colored-card__description m-24_bottom media-m-16_bottom"
          :class="cardColor.descriptions"
        >
          {{ description }}
        </TextParagraph>
      </template>
      <template v-else>
        <TextParagraph
          v-if="descriptions"
          class="colored-card__description"
          :class="cardColor.descriptions"
        >
          {{ descriptions }}
        </TextParagraph>
      </template>

      <slot />
    </div>
    <template v-if="cardImage.file && pictureRight">
      <div
        :class="`${pictureRight ? isMobile ?
          'colored-card__image-wrapper--right colored-card__image-wrapper--mobile'
          :
          'colored-card__image-wrapper--right'
          : 'colored-card__image-wrapper'}`"
      >
        <Picture
          v-if="!isMobile"
          class="colored-card__image"
          :class="`colored-card-image-${cardImage.file}`"
          :width="160"
          :height="302"
          :file="cardImage.file"
          :alt="cardImage.alt || 'Image'"
          :folder="cardImage.folder"
          extension="png"
        />
        <Picture
          v-if="isMobile"
          class="colored-card__image"
          :class="`colored-card-image-${cardImage.file}`"
          :width="cardImage.mobileImage.width"
          :height="cardImage.mobileImage.height"
          :file="cardImage.mobileImage.file"
          :alt="cardImage.alt || 'Image'"
          :folder="cardImage.folder"
          extension="png"
        />
      </div>
    </template>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'ColoredCard',
  components: {
    TextParagraph,
    Picture,
  },

  props: {
    cardIndex: {
      type: Number,
      required: true,
    },

    preTitle: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    descriptions: {
      type: [String, Array],
      default: '',
    },

    image: {
      type: Object,
      default: () => {
      },
    },

    colors: {
      type: Object,
      default: () => {
      },
    },

    pictureRight: {
      type: Boolean,
      default: false,
    },

    centeredTitle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      cardColor: {
        card: this.colors?.card ? `background-color-${this.colors?.card}` : '',
        title: this.colors?.title ? `text-color-${this.colors?.title}` : '',
        preTitle: this.colors?.preTitle ? `text-color-${this.colors?.preTitle}` : '',
        descriptions: this.colors?.descriptions ? `text-color-${this.colors?.descriptions}` : '',
      },

      cardImage: {
        width: this.image?.width,
        height: this.image?.height,
        folder: this.image?.folder,
        file: this.image?.file,
        alt: this.image?.alt,
        mobileImage: {
          width: this.image?.mobileImage?.width,
          height: this.image?.mobileImage?.height,
          file: this.image?.mobileImage?.file,
        },
      },

      isMobile: false,
    }
  },

  mounted() {
    this.isMobile = window.innerWidth <= 820
    if (this.cardImage.mobileImage.file) {
      window.addEventListener('resize', this.checkMobile)
    }
  },

  beforeDestroy() {
    if (this.cardImage.mobileImage.file) {
      window.removeEventListener('resize', this.checkMobile)
    }
  },

  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 820
    },
  },
}
</script>

<style scoped lang="scss">
.colored-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;

  &__image-wrapper {
    max-height: 200px;
    overflow: hidden;
    &--right {
      min-width: 162px;
      min-height: 302px;
      overflow: hidden;
    }
    &--mobile {
      min-width: 130px;
      min-height: 140px;
      @media screen and (max-width: 396px) {
        margin-right: -15px;
      }
      @media screen and (max-width: 380px) {
        margin-right: -60px;
      }
    }
  }

  &__image .image {
    height: 100%;
    object-fit: cover;
  }

  &__footer {
    flex-grow: 1;
    padding: 25px;
    &--centered {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__pre-title{
    text-transform: uppercase;
    display: block;
  }
}

.row-flex {
  flex-direction: row;
}
</style>
