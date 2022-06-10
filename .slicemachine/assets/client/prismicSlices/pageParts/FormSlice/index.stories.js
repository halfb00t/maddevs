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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"form_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Extend cross-platform supply-chains","spans":[]}],"containerSize":"1026","animation":"zoom-in-right","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"bookPath":"target granular schemas","bookName":"matrix robust platforms","sendPulseTemplateId":1759},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
