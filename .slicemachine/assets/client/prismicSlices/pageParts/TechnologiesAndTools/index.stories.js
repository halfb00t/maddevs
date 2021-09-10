import MyComponent from '../../../../../../client/prismicSlices/pageParts/TechnologiesAndTools';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TechnologiesAndTools'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"technologies_and_tools","items":[],"primary":{"title":[{"type":"heading1","text":"Reintermediate granular architectures","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur fugiat veniam culpa id. Eu et excepteur pariatur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
