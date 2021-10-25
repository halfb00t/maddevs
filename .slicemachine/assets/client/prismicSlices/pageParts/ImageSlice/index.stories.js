import MyComponent from '../../../../../../client/prismicSlices/pageParts/ImageSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ImageSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_slice","items":[],"primary":{"image":{"dimensions":{"width":1240,"height":607},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1240&h=607&fit=crop"},"colorTheme":"grey","animation":"fade-down-left"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
