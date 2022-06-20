import MyComponent from '../../../../../../client/prismicSlices/pageParts/EbookPageCardsSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/EbookPageCardsSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"ebook_page_cards_slice","items":[{"data":{"link_type":"Web","url":"https://prismic.io"}},{"data":{"link_type":"Web","url":"https://prismic.io"}},{"data":{"link_type":"Web","url":"https://slicemachine.dev"}},{"data":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Synergize leading-edge blockchains","spans":[]}],"animation":"fade-left","btnText":"aggregate turn-key e-tailers","btnLink":{"link_type":"Web","url":"http://twitter.com"},"containerSize":"1026"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
