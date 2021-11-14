<template>
  <div class="case_statistics-item">
    <TextParagraph
      v-if="headerText"
      data-testid="card-header-text"
      class="case_statistics-item_header"
      :color="headerTextColor"
    >
      {{ headerText }}
    </TextParagraph>
    <img
      v-if="icon"
      v-lazy-load
      class="case_statistics-item_icon m-21_bottom"
      data-testid="test-icon"
      :data-src="$getMediaFromS3(`/images/Cases/${icon.folder}/${icon.type}/${icon.name}.${icon.type}`)"
      :alt="icon.name || 'Icon'"
      :width="icon.width || '30px'"
      :height="icon.height || '30px'"
    >
    <h3
      class="case_statistics-item_number p-16_bottom"
      :style="colorNumber"
    >
      <span
        :id="`statistics-${section}-${index}`"
        :data-end-value="number"
        :data-start-value="numberText"
      >
        {{ numberText }}
      </span>
      {{ name ? name : '' }}
    </h3>
    <TextParagraph
      v-if="description"
      class="case_statistics-item_description"
      :color="descriptionColor"
    >
      {{ description }}
    </TextParagraph>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'StatisticCard',
  components: {
    TextParagraph,
  },

  props: {
    headerText: {
      type: String,
    },

    headerTextColor: {
      type: String,
    },

    number: {
      type: Number,
      default: 0,
    },

    numberText: {
      type: String,
      default: '0',
    },

    name: {
      type: String,
    },

    numberColor: {
      type: String,
    },

    icon: {
      type: Object,
    },

    description: {
      type: String,
    },

    descriptionColor: {
      type: String,
    },

    section: {
      type: String,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

  },

  computed: {
    colorNumber() {
      if (this.numberColor) {
        return `color: ${this.numberColor}`
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_statistics-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    text-align: center;
    &_header{
      text-align: center;
      @include font($text-color--black, 16px, 400)
    }

    &_number {
      width: 100%;
      text-align: center;
      border-right: 1px solid $border-color--black-border-03-opacity;
      @include font($text-color--black, 40px, 600)
    }

    &:last-child {
      .case_statistics-item_number {
        border: none;
      }
    }

    &_description {
      margin-top: auto;
      font-size: 16px;
      line-height: 135%;
      color: $text-color--black;
    }
  }

  @media screen and (max-width: 820px) {
    &_statistics-item {
      padding: 24px 0;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &_number {
        border: none;
      }

      position: relative;

      &:before,
      &:after {
        content: '';
        width: 79px;
        height: 1px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: $border-color--black-border-03-opacity;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }

      &:first-child, &:last-child {
        &:before,
        &:after {
          content: none;
        }
      }
    }
  }
}
</style>
