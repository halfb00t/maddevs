import MyComponent from '../../../../../../client/prismicSlices/pageParts/TitleSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TitleSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"title_slice","items":[],"primary":{"colorTheme":"white","title":"integrate virtual applications","tag":"h3","maxWidth":"incentivize seamless bandwidth","size":"md","position":"center","animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
