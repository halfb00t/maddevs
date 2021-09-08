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
      mock: {"variation":"default","name":"Default Slice","slice_type":"cta_banner_slice","items":[],"primary":{"animation":"none","image":{"dimensions":{"width":null,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=null&h=500&fit=crop"},"btnLink":{"link_type":"Web","url":"http://twitter.com"},"title":"generate intuitive networks","description":"unleash e-business infomediaries","btnText":"architect user-centric relationships","name":"f","position":"enable frictionless action-items"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default Slice'
