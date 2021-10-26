<template>
  <section
    class="text-slice"
    :class="colorThemeClass"
    :style="{ backgroundColor: sliceBackground }"
  >
    <div class="container">
      <transition name="fade">
        <SimpleText
          v-if="slice.variation === 'default-slice'"
          v-bind="slice.primary"
          :data-aos="slice.primary.animation"
        />
        <Title
          v-else-if="slice.variation === 'title'"
          v-bind="slice.primary"
          :size="size"
          :data-aos="slice.primary.animation"
        />
        <TitleText
          v-else-if="slice.variation === 'titleText'"
          v-bind="slice.primary"
          :data-aos="slice.primary.animation"
        />
        <TitleTextButton
          v-else-if="slice.variation === 'titleTextButton'"
          v-bind="slice.primary"
          :data-aos="slice.primary.animation"
        />
        <Paragraph
          v-else-if="slice.variation === 'paragraph'"
          v-bind="slice.primary"
          :size="size"
          :data-aos="slice.primary.animation"
        />
      </transition>
    </div>
  </section>
</template>

<script>
import Title from './variations/Title'
import SimpleText from './variations/SimpleText'
import TitleText from './variations/TitleText'
import TitleTextButton from './variations/TitleTextButton'
import Paragraph from './variations/Paragraph'

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'TextSlice',
  components: {
    Title,
    SimpleText,
    TitleText,
    TitleTextButton,
    Paragraph,
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
    }
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'black') return 'text-slice--black-theme'
      return 'text-slice--white-theme'
    },

    sliceBackground() {
      if (this.slice?.primary?.colorTheme === 'white') return '#ffffff'
      if (this.slice?.primary?.colorTheme === 'silver') return '#f5f7f9'
      if (this.slice?.primary?.colorTheme === 'black') return '#111213'
      return null
    },
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
  @include font('Inter', 80px, 700);
  line-height: 67px;
  letter-spacing: -0.013em;
  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
}

/deep/ p {
  @include font('Inter', 32px, 400);
  line-height: 44px;
  letter-spacing: -0.013em;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 35px;
  }
  @media screen and (max-width: 768px) {
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
