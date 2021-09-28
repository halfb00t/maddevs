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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"single_image","items":[],"primary":{"title":"deliver impactful interfaces","text":"streamline frictionless ROI","subtitle":"recontextualize value-added web services","image":{"dimensions":{"width":1240,"height":607},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1240&h=607&fit=crop"},"animation":"fade-up-left"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
