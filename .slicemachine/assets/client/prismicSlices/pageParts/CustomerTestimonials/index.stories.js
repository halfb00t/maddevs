import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomerTestimonials';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomerTestimonials'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customer_testimonials","items":[],"primary":{"animation":"none","title":"Customer Testimonials"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TestimonialsSecondVariation = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"testimonialsSecondVariation","name":"testimonialsSecondVariation","slice_type":"customer_testimonials","items":[],"primary":{"animation":"fade-up-right","title":"transition holistic eyeballs"},"id":"_TestimonialsSecondVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TestimonialsSecondVariation.storyName = 'testimonialsSecondVariation'
