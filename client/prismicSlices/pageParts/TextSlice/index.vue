<template>
  <section
    class="text-slice"
    :class="colorThemeClass"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div class="container">
      <transition name="fade">
        <LazyHydrate when-visible>
          <SimpleText
            v-if="slice.variation === 'default-slice'"
            v-bind="slice.primary"
            data-testid="text-slice-default"
            :data-aos="slice.primary.animation"
          />
          <Title
            v-else-if="slice.variation === 'title'"
            v-bind="slice.primary"
            :size="size"
            data-testid="text-slice-title"
            :data-aos="slice.primary.animation"
          />
          <TitleText
            v-else-if="slice.variation === 'titleText'"
            v-bind="slice.primary"
            data-testid="text-slice-titleText"
            :data-aos="slice.primary.animation"
          />
          <TitleTextButton
            v-else-if="slice.variation === 'titleTextButton'"
            v-bind="slice.primary"
            data-testid="text-slice-titleTextButton"
            :data-aos="slice.primary.animation"
          />
          <Paragraph
            v-else-if="slice.variation === 'paragraph'"
            v-bind="slice.primary"
            :size="size"
            data-testid="text-slice-paragraph"
            :data-aos="slice.primary.animation"
          />
          <FlexibleParagraph
            v-else-if="slice.variation === 'flexibleParagraph'"
            v-bind="slice.primary"
            :size="size"
            data-testid="text-slice-flexibleParagraph"
            :data-aos="slice.primary.animation"
          />
        </LazyHydrate>
      </transition>
    </div>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import setSliceBackground from '@/helpers/setSliceBackground'

export default {
  name: 'TextSlice',
  components: {
    LazyHydrate,
    Title: () => import('./variations/Title'),
    SimpleText: () => import('./variations/SimpleText'),
    TitleText: () => import('./variations/TitleText'),
    TitleTextButton: () => import('./variations/TitleTextButton'),
    Paragraph: () => import('./variations/Paragraph'),
    FlexibleParagraph: () => import('./variations/FlexibleParagraph'),
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
      size: 'size-md',
      sliceBackground: setSliceBackground(this.slice?.primary?.colorTheme),
      colorThemeClass: (this.slice?.primary?.colorTheme === 'black') ? 'text-slice--black-theme' : 'text-slice--white-theme',
    }
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      if (window.innerWidth <= 768) {
        this.size = this.slice.primary['size-xs']
        || this.slice.primary['size-sm']
        || this.slice.primary['size-md']
        || this.slice.primary['size-lg']
        || this.slice.primary['size-xl']
      } if (window.innerWidth > 768 && window.innerWidth <= 1024) {
        this.size = this.slice.primary['size-sm']
        || this.slice.primary['size-md']
        || this.slice.primary['size-lg']
        || this.slice.primary['size-xl']
      } if (window.innerWidth > 1024 && window.innerWidth <= 1200) {
        this.size = this.slice.primary['size-md']
        || this.slice.primary['size-lg']
        || this.slice.primary['size-xl']
      } if (window.innerWidth > 1200 && window.innerWidth <= 1440) {
        this.size = this.slice.primary['size-lg']
        || this.slice.primary['size-xl']
      } if (window.innerWidth > 1440) {
        this.size = this.slice.primary['size-xl']
      }
    },
  },
}
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
</style>
