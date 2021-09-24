import MyComponent from '../../../../../../client/prismicSlices/pageParts/VideoSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/VideoSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_slice","items":[],"primary":{"animation":"zoom-in-left","title":"productize virtual infrastructures","subtitle":"envisioneer interactive web services","width":"big","video":"monetize distributed e-business","poster":"embrace cross-media convergence","link":"deliver impactful platforms","folder":"engineer back-end web-readiness","file":"streamline user-centric communities","logoWidth":"redefine B2C systems","logoHeight":"engage world-class experiences","alt":"architect synergistic bandwidth","colorTheme":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
