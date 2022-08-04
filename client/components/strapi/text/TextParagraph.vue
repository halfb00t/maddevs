<template>
  <section
    :data-aos="animation"
    :class="[
      baseClassName,
      `paragraph-slice-text--${position}`,
    ]"
    class="paragraph-slice"
  >
    <p
      :class="[
        `paragraph-slice-text`,
        `paragraph-slice-text--${textSizeClass}`,
      ]"
      :style="`max-width: ${maxWidth}`"
      v-html="instance.text"
    />
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import useResize from '@/components/strapi/common/useResize'

export default defineComponent({
  name: 'ParagraphSlice',
  props: {
    instance: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    useResize(props.instance)
    return {
      position: props.instance.position,
      baseClassName: props.instance.baseClassName,
      maxWidth: props.instance.maxWidth,
      textSizeClass: props.instance.textSizes.refClassName,
      text: props.instance.text,
      animation: props.instance.animation,
    }
  },

})
</script>

<style lang="scss" scoped>
.paragraph-slice {
  width: 100%;

  &-text {
    width: auto;
    max-width: 100%;
    display: block;
    color: inherit;
    letter-spacing: -1.3%;

    // Positions
    &--left {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      p {
        text-align: left;
      }
    }

    &--center {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      p {
        text-align: center;
      }
    }

    &--right {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      p {
        text-align: right;
      }
    }

    // Sixes
    &--16px {
      @include font('Inter', 16px, 400);
      line-height: 24px;
    }

    &--21px {
      @include font('Inter', 21px, 400);
      line-height: 30px;
    }

    &--24px {
      @include font('Inter', 24px, 400);
      line-height: 35px;
    }

    &--28px {
      @include font('Inter', 28px, 400);
      line-height: 40px;
    }

    &--32px {
      @include font('Inter', 32px, 400);
      line-height: 40px;
    }

    &--40px {
      @include font('Inter', 40px, 600);
      line-height: 48px;
    }

    &--60px {
      @include font('Inter', 60px, 600);
      line-height: 70px;
    }
  }
}
</style>
