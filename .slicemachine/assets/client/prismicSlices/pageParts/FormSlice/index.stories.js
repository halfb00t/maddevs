import MyComponent from '../../../../../../client/prismicSlices/pageParts/FormSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/FormSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"form_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Architect magnetic e-tailers","spans":[]}],"containerSize":"1026","animation":"fade-up","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"ebookPath":"evolve dot-com interfaces","ebookName":"visualize cross-platform infrastructures","sendPulseTemplateId":7822},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
