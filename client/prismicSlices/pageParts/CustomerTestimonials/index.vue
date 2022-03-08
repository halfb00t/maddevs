<template>
  <section
    class="customer-testimonials-main"
  >
    <LazyHydrate
      v-if="slice.variation === 'default-slice'"
      when-visible
    >
      <CustomerTestimonialsSlice
        :title="title"
        :data-aos="animation"
        data-testid="first-variation"
      />
    </LazyHydrate>
    <LazyHydrate
      v-else-if="slice.variation === 'testimonialsSecondVariation'"
      when-visible
    >
      <Testimonials
        :title="title"
        :data-aos="animation"
        data-testid="second-variation"
      />
    </LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CustomerTestimonials',

  components: {
    LazyHydrate,
    CustomerTestimonialsSlice: () => import('./variations/CustomerTestimonialsSlice'),
    Testimonials: () => import('./variations/Testimonials'),
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
      animation: this.slice?.primary?.animation,
      title: this.slice?.primary?.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.customer-testimonials-main {
  background-color: #f5f7f9;
}
</style>
