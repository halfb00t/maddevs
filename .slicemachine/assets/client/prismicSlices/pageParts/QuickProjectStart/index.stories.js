import MyComponent from '../../../../../../client/prismicSlices/pageParts/QuickProjectStart';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/QuickProjectStart'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quick_project_start","items":[],"primary":{"title":[{"type":"heading1","text":"Iterate intuitive web services","spans":[]}],"description":[{"type":"paragraph","text":"Commodo enim esse dolore Lorem mollit nulla ad reprehenderit enim ullamco amet. Minim anim ut consectetur veniam irure dolor ea magna nisi occaecat do ut ea mollit. Nostrud non tempor et non.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
