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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_list","items":[{"listText":"architect impactful users"},{"listText":"visualize e-business users"},{"listText":"reintermediate front-end convergence"},{"listText":"optimize end-to-end architectures"},{"listText":"enable web-enabled infrastructures"}],"primary":{"title":"benchmark cross-media experiences"},"id":"_DefaultSlice"}
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
      mock: {"variation":"twoColumnsList","name":"Two Columns List","slice_type":"text_list","items":[{"listText":"optimize distributed portals"},{"listText":"generate cutting-edge networks"},{"listText":"transform holistic functionalities"},{"listText":"extend bleeding-edge web-readiness"}],"primary":{"listItemsBackground":"#e54e22","title":"reintermediate frictionless portals"},"id":"_TwoColumnsList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumnsList.storyName = 'Two Columns List'
