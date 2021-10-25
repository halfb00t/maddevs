import MyComponent from '../../../../../../client/prismicSlices/pageParts/SpacerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/SpacerSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"spacer_slice","items":[],"primary":{"background":"white","height":"reintermediate efficient applications","height-xl":"transform web-enabled applications","height-lg":"transform magnetic networks","height-md":"unleash magnetic architectures","height-sm":"monetize holistic architectures"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
