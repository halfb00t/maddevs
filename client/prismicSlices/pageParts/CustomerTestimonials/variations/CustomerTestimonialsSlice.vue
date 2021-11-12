<template>
  <CustomerTestimonials
    :title="title"
    :aos="animation"
  />
</template>

<script>
import CustomerTestimonials from '@/components/About/CustomerTestimonials'

export default {
  name: 'CustomerTestimonialsSlice',
  components: {
    CustomerTestimonials,
  },

  props: {
    title: {
      type: String,
      default: 'Customer Testimonials',
    },

    animation: {
      type: String,
      default: null,
    },
  },
}
</script>
