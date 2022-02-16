<template>
  <div
    class="colored-card"
    :class="`colored-card--${cardIndex} ${cardColor.card}`"
  >
    <template v-if="cardImage.file">
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

    <div class="colored-card__footer">
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
      },
    }
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
  }

  &__image .image {
    height: 100%;
    object-fit: cover;
  }

  &__footer {
    flex-grow: 1;
    padding: 20px;
  }
  &__pre-title{
    display: block;
  }
}
</style>
