<template>
  <div
    class="button-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container"
      :class="sliceAlignmentClass"
    >
      <UIButton
        v-if="variation === 'default-slice'"
        :full-width="fullWidth"
        is-link
        :to="link.url"
        target="_blank"
        :class="[
          'button-slice__button',
          'button-slice__button--normal',
        ]"
        :style="{ maxWidth }"
        :data-aos="animation"
      >
        {{ text }}
      </UIButton>
      <UIOutlinedButton
        v-else-if="variation === 'outlinedButton'"
        :full-width="fullWidth"
        :color="color"
        is-link
        :to="link.url"
        target="_blank"
        :class="[
          'button-slice__button',
          'button-slice__button--outlined',
        ]"
        :style="{ maxWidth }"
        :data-aos="animation"
      >
        {{ text }}
      </UIOutlinedButton>
      <UILinkButton
        v-else-if="variation === 'linkButton'"
        :full-width="fullWidth"
        :color="color"
        is-link
        :to="link.url"
        target="_blank"
        :class="[
          'button-slice__button',
          'button-slice__button--link',
        ]"
        :style="{ maxWidth }"
        :data-aos="animation"
      >
        {{ text }}
      </UILinkButton>
    </div>
  </div>
</template>

<script>
import UIButton from '@/components/shared/UIButton'
import UIOutlinedButton from '@/components/shared/UIOutlinedButton'
import UILinkButton from '@/components/shared/UILinkButton'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'ButtonSlice',
  components: {
    UIButton,
    UIOutlinedButton,
    UILinkButton,
  },

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      variation: this.slice.variation,
      fullWidth: this.slice.primary.fullWidth,
      maxWidth: this.slice.primary.maxWidth,
      link: this.slice.primary.link,
      text: this.slice.primary.text,
      color: this.slice.primary.color,
      animation: this.slice.primary.animation,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice.primary.background === 'white') return '#fff'
      if (this.slice.primary.background === 'grey') return '#f5f7f9'
      if (this.slice.primary.background === 'black') return '#111213'
      return null
    },

    sliceAlignmentClass() {
      if (this.slice.primary.alignment === 'center') return 'button-slice__content--align-center'
      if (this.slice.primary.alignment === 'right') return 'button-slice__content--align-right'
      return 'button-slice__content--align-left'
    },
  },
}
</script>

<style lang="scss" scoped>
.button-slice {
  display: block;

  &__content {
    &--align {
      &-center {
        text-align: center;
      }
      &-right {
        text-align: right;
      }
    }
  }

  &__button {
    box-sizing: border-box;
    padding: 16px 24px;
    line-height: 20px;
    &--normal:hover {
      background-color: lighten($bgcolor--red, 10%) !important;
    }
  }
}
</style>
