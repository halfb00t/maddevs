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
      mock: {"variation":"startScreenImageRightAndButton","name":"StartScreenImageRightAndButton","slice_type":"start_screen","items":[],"primary":{"background":"black","gradientColor":"white","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"rightImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"imageOpacity":9201,"title":[{"type":"heading1","text":"Iterate turn-key paradigms","spans":[]}],"subtitle":[{"type":"paragraph","text":"Dolor esse enim ad officia aliquip sunt. In nisi ea aliquip laboris. Incididunt anim exercitation excepteur ut enim.","spans":[]}],"btnText":"enhance mission-critical applications","btnLink":{"link_type":"Web","url":"http://twitter.com"},"modal":"contact-me","bookPath":"streamline world-class bandwidth","bookName":"recontextualize granular applications"},"id":"_StartScreenImageRightAndButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StartScreenImageRightAndButton.storyName = 'StartScreenImageRightAndButton'
