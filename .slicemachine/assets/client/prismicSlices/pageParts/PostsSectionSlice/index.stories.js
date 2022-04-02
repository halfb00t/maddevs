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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"posts_section_slice","items":[{"theme":"light","data":{"link_type":"Web","url":"http://google.com"}},{"theme":"dark","data":{"link_type":"Web","url":"https://prismic.io"}},{"theme":"light","data":{"link_type":"Web","url":"http://twitter.com"}},{"theme":"light","data":{"link_type":"Web","url":"https://prismic.io"}},{"theme":"dark","data":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _EbookPostsSectionSlice = () => ({
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
      mock: {"variation":"ebookPostsSectionSlice","name":"EbookPostsSectionSlice","slice_type":"posts_section_slice","items":[{"theme":"light","data":{"link_type":"Web","url":"https://slicemachine.dev"}},{"theme":"light","data":{"link_type":"Web","url":"https://slicemachine.dev"}},{"theme":"light","data":{"link_type":"Web","url":"https://prismic.io"}},{"theme":"light","data":{"link_type":"Web","url":"https://slicemachine.dev"}},{"theme":"light","data":{"link_type":"Web","url":"http://google.com"}}],"primary":{"animation":"fade-up","title":[{"type":"heading1","text":"Brand sticky functionalities","spans":[]}]},"id":"_EbookPostsSectionSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_EbookPostsSectionSlice.storyName = 'EbookPostsSectionSlice'
