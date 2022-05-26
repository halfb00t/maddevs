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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"build_and_risks_slice","items":[],"primary":{"animation":"fade-up-right","outerBgColor":"red","BackgroundColor":"red","title":[{"type":"heading2","text":"Incentivize robust communities","spans":[]}],"titleColor":"#dea3a3","description":[{"type":"paragraph","text":"Nulla velit eiusmod amet pariatur ullamco culpa cupidatat laboris duis minim cillum id adipisicing aliqua laboris. Eu ipsum deserunt dolore eu ipsum fugiat dolor. Tempor ut magna magna magna incididunt in fugiat excepteur occaecat labore irure enim tempor aliqua esse.","spans":[]}],"buttonText":"engage leading-edge networks","buttonLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"buttonBgColor":"red"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
