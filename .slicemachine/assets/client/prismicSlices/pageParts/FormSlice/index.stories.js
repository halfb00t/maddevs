import MyComponent from '../../../../../../client/prismicSlices/pageParts/FormSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/FormSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"form_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Incubate next-generation architectures","spans":[]}],"containerSize":"1026","animation":"zoom-in","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"bookPath":"extend dot-com methodologies","bookName":"engineer best-of-breed interfaces"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
