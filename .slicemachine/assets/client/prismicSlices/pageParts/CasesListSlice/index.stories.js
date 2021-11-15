import MyComponent from '../../../../../../client/prismicSlices/pageParts/CasesListSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CasesListSlice'
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
      mock: {
        "variation": "default-slice",
        "name": "Default slice",
        "slice_type": "cases_list_slice",
        "items": [
          {"width": "full", "caseId": "citycam"},
          {"width": "big", "caseId": "veeqo"},
          {"width": "small", "caseId": "nambafood"},
          {"width": "full", "caseId": "itc"}],
        "primary": {"animation": "none", "background": "white"},
        "id": "_DefaultSlice"
      }
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
