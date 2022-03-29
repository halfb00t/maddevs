import MyComponent from '../../../../../../client/prismicSlices/pageParts/CardWithImageSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CardWithImageSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_with_image_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Visualize plug-and-play bandwidth","spans":[]}],"description":"synergize interactive methodologies","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"backgroundColor":"purple","textColor":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
