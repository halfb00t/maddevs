<template>
  <section class="technologies">
    <div class="container">
      <FourBigCards
        v-if="slice.variation === 'default-slice'"
        :data-aos="animation || 'fade-up'"
        :big-cards="bigCards"
        :little-cards="littleCards"
      />
      <ThreeBigCards
        v-if="slice.variation === 'threeBigCards'"
        :data-aos="animation || 'fade-up'"
        :big-cards="bigCards"
        :little-cards="littleCards"
      />
      <TwoBigCards
        v-if="slice.variation === 'twoBigCards'"
        :data-aos="animation || 'fade-up'"
        :big-cards="bigCards"
        :little-cards="littleCards"
      />
      <OneBigCards
        v-if="slice.variation === 'oneBigCard'"
        :data-aos="animation || 'fade-up'"
        :big-cards="bigCards"
        :little-cards="littleCards"
      />
    </div>
  </section>
</template>

<script>
import FourBigCards from '@/prismicSlices/pageParts/TechAndToolsNewSlice/variations/FourBigCards'
import ThreeBigCards from '@/prismicSlices/pageParts/TechAndToolsNewSlice/variations/ThreeBigCards'
import TwoBigCards from '@/prismicSlices/pageParts/TechAndToolsNewSlice/variations/TwoBigCards'
import OneBigCards from '@/prismicSlices/pageParts/TechAndToolsNewSlice/variations/OneBigCards'

export default {
  name: 'TechAndToolsNewSlice',

  components: {
    FourBigCards,
    ThreeBigCards,
    TwoBigCards,
    OneBigCards,
  },

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
      animation: this.slice?.primary?.animation,
      bigCards: this.slice?.items.filter(card => card.isBig === true),
      littleCards: this.slice?.items.filter(card => card.isBig === false),
    }
  },
}
</script>

<style lang="scss" scoped>
.technologies {
  position: relative;
  background: $bgcolor--black;
  color: $text-color--white-primary;
}
</style>
