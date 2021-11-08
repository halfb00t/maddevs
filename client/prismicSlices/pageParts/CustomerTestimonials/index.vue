<template>
  <section
    class="customer-testimonials-main"
  >
    <CustomerTestimonialsSlice
      v-if="slice.variation === 'default-slice'"
      :title="title"
      :data-aos="animation"
      data-testid="first-variation"
    />
    <Testimonials
      v-else-if="slice.variation === 'testimonialsSecondVariation'"
      :title="title"
      :data-aos="animation"
      data-testid="second-variation"
    />
  </section>
</template>

<script>
import CustomerTestimonialsSlice from './variations/CustomerTestimonialsSlice'
import Testimonials from './variations/Testimonials'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CustomerTestimonials',

  components: {
    CustomerTestimonialsSlice,
    Testimonials,
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
