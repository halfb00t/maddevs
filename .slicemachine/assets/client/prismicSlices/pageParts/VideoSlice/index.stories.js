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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"video_slice","items":[],"primary":{"animation":"none","title":"incentivize clicks-and-mortar web services","subtitle":"visualize world-class eyeballs","width":"middle","video":"aggregate revolutionary methodologies","poster":"monetize dynamic networks","link":"envisioneer revolutionary channels","folder":"deploy rich channels","file":"leverage front-end systems","logoWidth":"utilize transparent communities","logoHeight":"incentivize plug-and-play e-tailers","alt":"synthesize proactive web-readiness"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
