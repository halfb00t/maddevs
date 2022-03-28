import MyComponent from '../../../../../../client/prismicSlices/pageParts/TextList';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TextList'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_list","items":[{"listText":"utilize cross-platform e-markets"},{"listText":"syndicate back-end synergies"},{"listText":"cultivate cutting-edge networks"}],"primary":{"title":"leverage visionary paradigms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumnsList = () => ({
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
      mock: {"variation":"twoColumnsList","name":"Two Columns List","slice_type":"text_list","items":[{"listText":"evolve customized models"},{"listText":"reinvent innovative architectures"},{"listText":"envisioneer sticky portals"},{"listText":"grow synergistic e-tailers"}],"primary":{"title":"integrate e-business solutions"},"id":"_TwoColumnsList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumnsList.storyName = 'Two Columns List'
