<template>
  <div
    class="colored-card"
    :class="`background-color-${colorName}`"
  >
    6666
    <span class="colored-card__pre-title">{{ preTitle }}</span>
    <h2 class="colored-card__title">
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
        class="colored-card__description"
      >
        {{ descriptions }}
      </TextParagraph>
    </template>
    <img
      v-if="hasImage"
      v-lazy-load
      :width="image.width"
      :height="image.height"
      :data-src="$getMediaFromS3(`/images/Cases/${image.folder}/svg/${image.file}.svg`)"
      :alt="image.alt || 'Image'"
      :class="`colored-card-image-${image.file}`"
      class="colored-card__image"
    >
    <slot />
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'ColoredCard',
  components: { TextParagraph },
  props: {
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

  mounted() {
    console.log(this.imageData)
  },
}
</script>

<style scoped lang="scss">

</style>
