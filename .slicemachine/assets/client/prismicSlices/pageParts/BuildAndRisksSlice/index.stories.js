import MyComponent from '../../../../../../client/prismicSlices/pageParts/BuildAndRisksSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/BuildAndRisksSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"build_and_risks_slice","items":[],"primary":{"animation":"fade-right","outerBgColor":"silver","backgroundColor":"blue","title":[{"type":"heading2","text":"Grow viral web-readiness","spans":[]}],"titleColor":"#c40026","description":[{"type":"paragraph","text":"Nostrud dolore veniam qui. Minim enim duis sit deserunt officia proident velit excepteur mollit id ex.","spans":[]}],"buttonText":"whiteboard clicks-and-mortar bandwidth","buttonLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"buttonBgColor":"red"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
