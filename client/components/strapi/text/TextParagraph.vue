<template>
  <section
    :class="[
      `paragraph-slice-text--${data.position}`,
    ]"
    class="paragraph-slice"
  >
    <p
      :class="[
        `paragraph-slice-text`,
        `paragraph-slice-text--${textSizeClassName}`,
        `paragraph-slice-text--${data.type}`,
      ]"
      :style="`max-width: ${data.maxWidth}`"
      v-html="data.text"
    />
    <div>{{ textSizeClassName }}</div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useTextSize } from '@/components/strapi/common/useText'
import useWindowSize from '@/components/strapi/common/windowSize'

export default defineComponent({
  name: 'ParagraphSlice',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    useWindowSize()
    const { textSizeClassName } = useTextSize(props.data.textSizes) // props.props - очень плохо. не нравится. нужно переименовать

    return {
      textSizeClassName,
    }
  },

})
</script>

<style lang="scss" scoped>
.text-slice {
  word-break: break-word;

  &--white-theme {
    color: $text-color--black-lighter;
  }

  &--black-theme {
    color: $text-color--white;
  }
}

/deep/ h1,
/deep/ h2,
/deep/ h3 {
  @include font('Inter', 60px, 700);
  line-height: 60px;
  letter-spacing: -0.013em;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
}

/deep/ p {
  @include font('Inter', 24px, 600);
  line-height: 35px;
  letter-spacing: -0.013em;
  @media screen and (max-width: 1024px) {
    font-size: 21px;
    line-height: 30px;
  }
}

/deep/ li {
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.013em;
}

/deep/ .fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

/deep/ .fade-enter,
.fade-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

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
    &--16-px {
      @include font('Inter', 16px, 400);
      line-height: 24px;
    }

    &--21-px {
      @include font('Inter', 21px, 400);
      line-height: 30px;
    }

    &--24-px {
      @include font('Inter', 24px, 400);
      line-height: 35px;
    }

    &--28-px {
      @include font('Inter', 28px, 400);
      line-height: 40px;
    }

    &--32-px {
      @include font('Inter', 32px, 400);
      line-height: 40px;
    }

    &--40-px {
      @include font('Inter', 40px, 600);
      line-height: 48px;
    }

    &--60-px {
      @include font('Inter', 60px, 600);
      line-height: 70px;
    }

    // Types
    &--list {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      &::before {
        content: '•';
        display: inline-block;
        color: inherit;
        margin-right: 8px;
        margin-left: 8px;
      }
    }
  }
}
</style>
