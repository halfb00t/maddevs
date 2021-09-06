import MyComponent from '../../../../../../client/prismicSlices/pageParts/WeCreateProjectsFor';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/WeCreateProjectsFor'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"we_create_projects_for","items":[],"primary":{"title":[{"type":"heading1","text":"E-enable global experiences","spans":[]}],"description":[{"type":"paragraph","text":"Officia sint occaecat id.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
