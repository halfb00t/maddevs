import MyComponent from '../../../../../../client/prismicSlices/pageParts/StartScreen';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/StartScreen'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"start_screen","items":[],"primary":{"background":"black","gradientColor":"black","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://d6xkme6dcvajw.cloudfront.net/images/OpenSource/png/programmer@2x.png?w=900&h=500&fit=crop"},"imageOpacity":1,"title":"Mad Devs Engineering Your Growth","subtitle":"Without empty words, here at Mad Devs we partner with projects where our teams thrive. Innovating solutions, carrying ownership, delivering sustainable value and celebrating successes — make a happy workplace, where things get done. "},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _StartScreenImageRightAndButton = () => ({
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
      mock: {"variation":"startScreenImageRightAndButton","name":"StartScreenImageRightAndButton","slice_type":"start_screen","items":[],"primary":{"background":"white","gradientColor":"white","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"rightImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"imageOpacity":382,"title":[{"type":"heading1","text":"Enhance innovative applications","spans":[]}],"subtitle":[{"type":"paragraph","text":"Ullamco adipisicing irure voluptate. Ad elit ex deserunt.","spans":[]}],"btnText":"e-enable scalable architectures","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"modal":"order-project"},"id":"_StartScreenImageRightAndButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StartScreenImageRightAndButton.storyName = 'StartScreenImageRightAndButton'
