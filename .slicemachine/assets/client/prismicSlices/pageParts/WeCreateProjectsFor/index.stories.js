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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"we_create_projects_for","items":[],"primary":{"background":"black","animation":"fade-up-right"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _WeCreateProjectsForWithMap = () => ({
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
      mock: {"variation":"weCreateProjectsForWithMap","name":"WeCreateProjectsForWithMap","slice_type":"we_create_projects_for","items":[],"primary":{"background":"black","animation":"zoom-in-up"},"id":"_WeCreateProjectsForWithMap"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_WeCreateProjectsForWithMap.storyName = 'WeCreateProjectsForWithMap'
