import MyComponent from '../../../../../../client/prismicSlices/pageParts/DescriptionSliceWithIcon';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/DescriptionSliceWithIcon'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"description_slice_with_icon","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"title":"visualize visionary platforms","content":"One size does not fit all, and there are no two exactly the same projects. Our approach and tech stack vary depending on project sizes, industries, scales, and many other aspects. We choose carefully every tool to work with and collaboration ways both with you and among team members to deliver a top-quality product.iterate clicks-and-mortar convergence"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"title":"embrace cutting-edge ROI","content":"One size does not fit all, and there are no two exactly the same projects. Our approach and tech stack vary depending on project sizes, industries, scales, and many other aspects. We choose carefully every tool to work with and collaboration ways both with you and among team members to deliver a top-quality product."}],"primary":{"animation":"fade-up-left","background":"white","colorTheme":"white","maxWidth":"816px"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
