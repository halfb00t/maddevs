import MyComponent from '../../../../../../client/prismicSlices/pageParts/BenefitSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/BenefitSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"benefit_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Utilize frictionless solutions","spans":[]}],"description":[{"type":"paragraph","text":"Ex anim commodo amet ad cupidatat est fugiat voluptate velit do elit.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
