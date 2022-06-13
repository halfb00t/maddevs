import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomersSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomersSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customers_slice","items":[],"primary":{"animation":"zoom-in-down","background":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
