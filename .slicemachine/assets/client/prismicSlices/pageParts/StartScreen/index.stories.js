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
      mock: {"variation":"startScreenImageRightAndButton","name":"StartScreenImageRightAndButton","slice_type":"start_screen","items":[],"primary":{"background":"grey","gradientColor":"white","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"rightImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"imageOpacity":8234,"title":[{"type":"heading1","text":"Harness 24/7 content","spans":[]}],"subtitle":[{"type":"paragraph","text":"Ea laboris veniam aute sint esse laborum eu ex.","spans":[]}],"btnText":"maximize global e-business","btnLink":{"link_type":"Web","url":"http://twitter.com"},"modal":"download-pdf","ebookPath":"disintermediate open-source architectures","ebookName":"revolutionize web-enabled channels","ebookImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"sendPulseTemplateId":8274},"id":"_StartScreenImageRightAndButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StartScreenImageRightAndButton.storyName = 'StartScreenImageRightAndButton'
