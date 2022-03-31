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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"start_screen","items":[],"primary":{"background":"black","gradientColor":"white","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://d6xkme6dcvajw.cloudfront.net/images/OpenSource/png/programmer@2x.png?w=900&h=500&fit=crop"},"imageOpacity":1,"title":"Mad Devs Engineering Your Growth","subtitle":"Without empty words, here at Mad Devs we partner with projects where our teams thrive. Innovating solutions, carrying ownership, delivering sustainable value and celebrating successes — make a happy workplace, where things get done. "},"id":"_DefaultSlice"}
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
      mock: {"variation":"startScreenImageRightAndButton","name":"StartScreenImageRightAndButton","slice_type":"start_screen","items":[],"primary":{"background":"white","gradientColor":"black","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"rightImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"imageOpacity":8032,"title":[{"type":"heading1","text":"Synergize end-to-end web services","spans":[]}],"subtitle":[{"type":"paragraph","text":"Anim irure do ea tempor consectetur elit. Veniam aliqua laborum tempor cupidatat deserunt nostrud voluptate cillum qui. Veniam cillum eu laborum ad in do culpa laboris velit commodo fugiat id ipsum irure id.","spans":[]}],"btnText":"enhance cross-platform deliverables","btnLink":{"link_type":"Web","url":"https://prismic.io"},"modal":"download-pdf","bookPath":"extend bricks-and-clicks vortals"},"id":"_StartScreenImageRightAndButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StartScreenImageRightAndButton.storyName = 'StartScreenImageRightAndButton'
