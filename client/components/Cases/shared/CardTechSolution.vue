<template>
  <Card class="card-content background-color-silver">
    <img
      v-if="icon"
      v-lazy-load
      :data-src="$getMediaFromS3(`/images/Cases/${folder}/svg/${icon}.svg`)"
      :alt="alt || 'Icon'"
      width="51.94"
      height="51.94"
      class="card-content_icon"
    >
    <h3
      v-if="title"
      class="case_title_h4 m-10-bottom"
    >
      {{ title }}
    </h3>
    <TextParagraph>
      {{ description }}
    </TextParagraph>
  </Card>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'

export default {
  name: 'CardTechSolution',
  components: {
    TextParagraph,
    Card,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },

    folder: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.card-content {
  &_icon {
    width: 51.94px;
    height: 51.94px;
    display: block;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
