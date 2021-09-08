import MyComponent from '../../../../../../client/prismicSlices/pageParts/KeyMetricsSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/KeyMetricsSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"key_metrics_slice","items":[{"title":"incubate ubiquitous users","subtitle":"grow customized markets"},{"title":"redefine customized deliverables","subtitle":"engineer 24/365 relationships"},{"title":"leverage frictionless platforms","subtitle":"synthesize global partnerships"}],"primary":{"animation":"none","background":"white"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _SecondVariation = () => ({
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
      mock: {"variation":"secondVariation","name":"Second variation","slice_type":"key_metrics_slice","items":[{"title":"transition magnetic partnerships","subtitle":"envisioneer distributed eyeballs"},{"title":"enhance clicks-and-mortar vortals","subtitle":"empower viral architectures"},{"title":"iterate collaborative e-markets","subtitle":"mesh world-class relationships"},{"title":"e-enable collaborative e-markets","subtitle":"integrate front-end relationships"},{"title":"engage value-added metrics","subtitle":"recontextualize out-of-the-box initiatives"}],"primary":{"background":"black","colorTheme":"white"},"id":"_SecondVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_SecondVariation.storyName = 'Second variation'

export const _ThirdVariation = () => ({
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
      mock: {"variation":"thirdVariation","name":"Third variation","slice_type":"key_metrics_slice","items":[{"title":"expedite mission-critical convergence","subtitle":"exploit revolutionary metrics"},{"title":"grow customized niches","subtitle":"exploit bricks-and-clicks solutions"}],"primary":{"background":"white","colorTheme":"white"},"id":"_ThirdVariation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ThirdVariation.storyName = 'Third variation'
