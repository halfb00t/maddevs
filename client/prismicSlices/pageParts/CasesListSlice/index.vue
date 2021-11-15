<template>
  <section :style="{ backgroundColor: sliceBackground }">
    <div
      class="container"
      :data-aos="animation"
      data-testid="test-case-container"
    >
      <div class="case-list-slice">
        <CasesListItem
          v-for="(item, i) of caseList"
          :key="`case-list-slice_item_${i}`"
          :video-file-name="item.video"
          :logo="item.logo"
          :subtitle="item.subtitle"
          :title="item.title"
          :desc="item.desc"
          :width="item.width"
          :link="item.link"
          :poster-link="item.poster"
          :item="item"
          data-testid="test-case-card"
        />
      </div>
    </div>
  </section>
</template>
<script>

import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'
import CasesListItem from '@/components/Cases/CasesListItem'
import { casesList } from '@/data/casesList'

export default {
  name: 'CaseListSlice',
  components: { CasesListItem },
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
      items: this.slice.items,
      animation: this.slice.primary.animation,
      casesList,
    }
  },

  computed: {
    sliceBackground() {
      if (this.slice?.primary?.background === 'white') return '#ffffff'
      if (this.slice?.primary?.background === 'grey') return '#f5f7f9'
      if (this.slice?.primary?.background === 'black') return '#111213'
      return null
    },

    caseList() {
      return this.items.map(item => ({ ...this.casesList.find(({ id }) => id === item.caseId), width: item.width }))
    },

  },

  mounted() {
    this.$nextTick(() => {
      if (window.innerWidth <= 992) {
        this.autoplay()
      }
    })
  },

  methods: {
    autoplay() {
      const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) {
          if (target) target.pause()
        } else {
          this.MixinPlayVideo(target)
        }
      })

      const elements = Array.from(document.querySelectorAll('.cases-list_item-video'))

      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(observerCallback, {
          threshold: 0.5,
        })
        elements.forEach(element => this.observer.observe(element))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.case-list-slice {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 30px;
  z-index: 1;

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 375px) {
    gap: 8px;
  }
}

</style>
