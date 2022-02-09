<template>
  <div class="card-content background-color-silver">
    <img
      v-if="icon"
      v-lazy-load
      :data-src="$getMediaFromS3(`/images/Cases/${folder}/svg/${icon}.svg`)"
      :alt="alt || 'Icon'"
      :width="width"
      :height="height"
      class="card-content_icon"
    >
    <h4
      v-if="title"
      class="case_title_h4 m-10-bottom"
    >
      {{ title }}
    </h4>
    <template
      v-if="Array.isArray(descriptions)"
    >
      <TextParagraph
        v-for="(description, i) in descriptions"
        :key="description"
        :class="i === descriptions.length ? '' : 'm-24_bottom media-m-12_bottom'"
      >
        {{ description }}
      </TextParagraph>
    </template>
    <template
      v-else
    >
      <TextParagraph>
        {{ descriptions }}
      </TextParagraph>
    </template>
    <slot />
  </div>
</template>
<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'ParallaxCard',
  components: {
    TextParagraph,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    descriptions: {
      type: [String, Array],
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    folder: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    width: {
      type: Number,
      default: 0,
    },

    height: {
      type: Number,
      default: 0,
    },
  },
}
</script>
<style lang="scss" scoped>
.card-content {
  position: relative;
  overflow: hidden;
  width: auto;
  height: auto;
  padding: 32px;
  border-radius: 8px;
  &_title {
    margin-bottom: 10px;
  }

  &_icon {
    width: 51.94px;
    height: 51.94px;
    display: block;
    margin-bottom: 13px;
  }

  @media screen and (max-width: 768px) {
    &_title,
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
