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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"single_image","items":[],"primary":{"title":"grow global architectures","text":"unleash bleeding-edge platforms","subtitle":"brand bleeding-edge methodologies","image":{"dimensions":{"width":1240,"height":607},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=1240&h=607&fit=crop"},"animation":"zoom-in-right"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _SingleImageTwo = () => ({
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
      mock: {"variation":"singleImageTwo","name":"SingleImageTwo","slice_type":"single_image","items":[],"primary":{"title":"monetize plug-and-play e-business","text":"utilize real-time communities","subtitle":"engineer compelling e-business","image":{"dimensions":{"width":1240,"height":607},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1240&h=607&fit=crop"},"animation":"zoom-in-right","testField":true},"id":"_SingleImageTwo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_SingleImageTwo.storyName = 'SingleImageTwo'
