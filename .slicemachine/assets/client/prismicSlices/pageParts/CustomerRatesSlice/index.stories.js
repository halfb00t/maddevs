import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomerRatesSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomerRatesSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customer_rates_slice","items":[{"title":"expedite world-class content","subtitle":"grow turn-key content"},{"title":"embrace efficient paradigms","subtitle":"drive distributed e-tailers"},{"title":"synthesize robust e-business","subtitle":"deliver turn-key methodologies"}],"primary":{"animation":"1"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
