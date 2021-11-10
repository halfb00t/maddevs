import MyComponent from '../../../../../../client/prismicSlices/pageParts/CtaBannerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CtaBannerSlice'
}


export const _Default = () => ({
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
      mock: {"variation":"default","name":"Default Slice","slice_type":"cta_banner_slice","items":[],"primary":{"animation":"none","image":{"dimensions":{"width":null,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=null&h=500&fit=crop"},"title":"evolve enterprise interfaces","description":"transition synergistic bandwidth","btnText":"revolutionize scalable partnerships","name":"f","position":"generate cutting-edge relationships","btnLink":{"link_type":"Web","url":"http://twitter.com"},"modal":"contact-me"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default Slice'
