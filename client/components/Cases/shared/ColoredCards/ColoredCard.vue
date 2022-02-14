<template>
  <div
    class="colored-card"
    :class="`background-color-${colorName} colored-card--${cardIndex}`"
  >
    <div class="colored-card__image-wrapper">
      <Picture
        v-if="hasImage"
        class="colored-card__image"
        :class="`colored-card-image-${image.file}`"
        :width="396"
        :height="200"
        :file="image.file"
        :alt="image.alt || 'Image'"
        :folder="image.folder"
        extension="png"
      />
    </div>

    <div class="colored-card__footer">
      <span
        v-if="preTitle"
        class="colored-card__pre-title"
      >{{ preTitle }}</span>
      <h2
        v-if="title"
        class="colored-card__title"
      >
        {{ title }}
      </h2>

      <template v-if="Array.isArray(descriptions)">
        <TextParagraph
          v-for="description in descriptions"
          :key="description"
          class="colored-card__description"
        >
          {{ description }}
        </TextParagraph>
      </template>
      <template v-else>
        <TextParagraph
          v-if="descriptions"
          class="colored-card__description"
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
    },

    preTitle: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    colorName: {
      type: String,
      default: '',
    },

    descriptions: {
      type: [String, Array],
      default: '',
    },

    hasImage: {
      type: Boolean,
      default: false,
    },

    image: {
      type: Object,
      default: () => ({
        width: 0,
        height: 0,
        folder: '',
        file: '',
        alt: '',
      }),
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
  }

  &__image .image {
    height: 100%;
    object-fit: cover;
  }

  &__footer {
    flex-grow: 1;
    padding: 20px;
  }
}
</style>
