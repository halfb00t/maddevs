import MyComponent from '../../../../../../client/prismicSlices/pageParts/PostsSectionSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/PostsSectionSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"posts_section_slice","items":[{"theme":"light","data":{"link_type":"Web","url":"http://twitter.com"}},{"theme":"light","data":{"link_type":"Web","url":"https://slicemachine.dev"}},{"theme":"light","data":{"link_type":"Web","url":"http://google.com"}},{"theme":"dark","data":{"link_type":"Web","url":"https://slicemachine.dev"}},{"theme":"light","data":{"link_type":"Web","url":"http://google.com"}}],"primary":{"animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
