import MyComponent from '../../../../../../client/prismicSlices/pageParts/SingleImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/SingleImage'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"single_image","items":[],"primary":{"title":"benchmark user-centric architectures","text":"generate e-business interfaces","subtitle":"transition virtual platforms","image":{"dimensions":{"width":1240,"height":607},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=1240&h=607&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
