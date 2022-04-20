import MyComponent from '../../../../../../client/prismicSlices/pageParts/EbooksWithFilterSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/EbooksWithFilterSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"ebooks_with_filter_slice","items":[{"category":"engineer cross-platform e-markets"},{"category":"incentivize holistic solutions"},{"category":"incentivize impactful schemas"},{"category":"drive ubiquitous architectures"},{"category":"maximize proactive mindshare"},{"category":"reinvent innovative markets"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
