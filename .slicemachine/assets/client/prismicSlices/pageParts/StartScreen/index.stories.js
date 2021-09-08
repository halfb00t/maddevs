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
