import MyComponent from '../../../../../../client/prismicSlices/pageParts/PressCenter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/PressCenter'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"press_center","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"title":"maximize out-of-the-box portals","description":"monetize virtual convergence","link":{"link_type":"Web","url":"http://google.com"},"date":"2013-03-17","linkLabel":"benchmark frictionless models","linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"title":"enhance strategic synergies","description":"morph synergistic functionalities","link":{"link_type":"Web","url":"http://twitter.com"},"date":"2018-09-23","linkLabel":"deploy world-class e-services","linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}}],"primary":{"title":"deploy dot-com architectures","description":"revolutionize seamless initiatives","date":"2014-12-22","link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":"deliver mission-critical users","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
