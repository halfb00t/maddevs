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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"build_and_risks_slice","items":[],"primary":{"animation":"fade-up","outerBgColor":"black","backgroundColor":"white","textColor":"black","title":[{"type":"heading2","text":"Deploy e-business architectures","spans":[]}],"description":[{"type":"paragraph","text":"Id Lorem consequat Lorem pariatur occaecat enim.","spans":[]}],"buttonText":"unleash end-to-end e-services","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"buttonBgColor":"black","buttonTextColor":"grey","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
