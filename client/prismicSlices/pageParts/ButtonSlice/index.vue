<template>
  <div
    class="button-slice"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div
      class="container"
      :class="`button-slice__content--align-${sliceAlignment}`"
      :data-aos="animation"
      data-testid="button-slice-container"
    >
      <LazyHydrate
        v-if="variation === 'default-slice'"
        when-visible
      >
        <UIButton
          :full-width="fullWidth"
          is-link
          :to="link.url"
          target="_self"
          data-testid="button-ui"
          :class="[
            'button-slice__button',
            'button-slice__button--normal',
          ]"
          :style="{ maxWidth }"
        >
          {{ text }}
        </UIButton>
      </LazyHydrate>
      <LazyHydrate
        v-else-if="variation === 'outlinedButton'"
        when-visible
      >
        <UIOutlinedButton
          :full-width="fullWidth"
          :color="color"
          is-link
          :to="link.url"
          target="_self"
          data-testid="button-outline"
          :class="[
            'button-slice__button',
            'button-slice__button--outlined',
          ]"
          :style="{ maxWidth }"
        >
          {{ text }}
        </UIOutlinedButton>
      </LazyHydrate>
      <LazyHydrate
        v-else-if="variation === 'linkButton'"
        when-visible
      >
        <UILinkButton
          :full-width="fullWidth"
          :color="color"
          is-link
          :to="link.url"
          target="_self"
          data-testid="button-link"
          :class="[
            'button-slice__button',
            'button-slice__button--link',
          ]"
          :style="{ maxWidth }"
        >
          {{ text }}
        </UILinkButton>
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'ButtonSlice',
  components: {
    LazyHydrate,
    UIButton: () => import('@/components/shared/UIButton'),
    UIOutlinedButton: () => import('@/components/shared/UIOutlinedButton'),
    UILinkButton: () => import('@/components/shared/UILinkButton'),
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
      variation: this.slice?.variation,
      fullWidth: this.slice?.primary?.fullWidth,
      maxWidth: this.slice?.primary?.maxWidth,
      link: this.slice?.primary?.link,
      text: this.slice?.primary?.text,
      color: this.slice?.primary?.color,
      animation: this.slice?.primary?.animation,
      sliceBackground: setSliceBackground(this.slice?.primary?.background),
    }
  },

  computed: {
    sliceAlignment() {
      if (this.slice?.primary?.alignment === 'center') return 'center'
      if (this.slice?.primary?.alignment === 'right') return 'right'
      return 'left'
    },
  },
}
</script>

<style lang="scss" scoped>
.button-slice {
  display: block;
  margin-top: -1px;

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
