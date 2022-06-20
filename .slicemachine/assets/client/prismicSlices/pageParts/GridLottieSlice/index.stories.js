import MyComponent from '../../../../../../client/prismicSlices/pageParts/GridLottieSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/GridLottieSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"grid_lottie_slice","items":[{"fullWidth":false,"background":"#baecf1","title":"envisioneer synergistic blockchains","content":[{"type":"paragraph","text":"Amet anim consequat esse irure excepteur aute amet amet laborum ea tempor. Sint sit sunt labore.","spans":[]}],"alignText":"left","lottie-animation":"seize transparent e-services","lottiePosition":"top","width":"whiteboard B2B infrastructures","height":"envisioneer innovative applications"},{"fullWidth":true,"background":"#26bede","title":"maximize plug-and-play infrastructures","content":[{"type":"paragraph","text":"Qui occaecat anim cupidatat occaecat consequat commodo dolor sit voluptate. Aute in non elit deserunt fugiat id exercitation qui eu ex deserunt dolor aute Lorem incididunt.","spans":[]}],"alignText":"left","lottie-animation":"benchmark one-to-one convergence","lottiePosition":"top","width":"monetize integrated vortals","height":"harness sexy web-readiness"},{"fullWidth":true,"background":"#3c8b48","title":"reinvent efficient schemas","content":[{"type":"paragraph","text":"Elit incididunt deserunt cillum eu fugiat et consectetur deserunt sint enim est est sunt labore.","spans":[]}],"alignText":"left","lottie-animation":"enhance transparent action-items","lottiePosition":"top","width":"deploy cross-platform convergence","height":"optimize mission-critical e-commerce"},{"fullWidth":true,"background":"#0e4994","title":"drive web-enabled e-commerce","content":[{"type":"paragraph","text":"Amet minim est commodo adipisicing cupidatat nulla esse dolor.","spans":[]}],"alignText":"center","lottie-animation":"incentivize enterprise infrastructures","lottiePosition":"top","width":"incubate world-class ROI","height":"disintermediate transparent supply-chains"}],"primary":{"animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _GridLottieLink = () => ({
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
      mock: {"variation":"gridLottieLink","name":"GridLottieLink","slice_type":"grid_lottie_slice","items":[{"link":{"link_type":"Web","url":"https://prismic.io"},"fullWidth":true,"background":"#3f53b0","content":[{"type":"paragraph","text":"Commodo velit ad pariatur enim aliqua deserunt non incididunt id in. Excepteur sunt fugiat ipsum in anim pariatur laboris. Ut consequat nisi aute qui fugiat nulla tempor culpa minim ex eiusmod.","spans":[]}],"alignText":"left","lottie-animation":"reintermediate viral schemas","lottie-S3-path":"unleash virtual metrics","lottieHeight":"iterate interactive communities","lottiePosition":"top","width":"synthesize leading-edge relationships","height":"seize efficient functionalities"},{"link":{"link_type":"Web","url":"http://twitter.com"},"fullWidth":false,"background":"#c08b54","content":[{"type":"paragraph","text":"Ad in tempor eu in aliquip exercitation mollit esse aute incididunt ullamco aliquip enim elit. Est fugiat commodo occaecat. Dolor commodo proident elit elit anim mollit.","spans":[]}],"alignText":"center","lottie-animation":"benchmark value-added methodologies","lottie-S3-path":"implement enterprise functionalities","lottieHeight":"benchmark compelling initiatives","lottiePosition":"top","width":"drive intuitive infrastructures","height":"drive virtual initiatives"}],"primary":{"animation":"zoom-in"},"id":"_GridLottieLink"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_GridLottieLink.storyName = 'GridLottieLink'

export const _GridWithAnimationOptionSlice = () => ({
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
      mock: {"variation":"gridWithAnimationOptionSlice","name":"GridWithAnimationOptionSlice","slice_type":"grid_lottie_slice","items":[{"fullWidth":false,"background":"#1a2e22","title":"transition wireless niches","content":[{"type":"paragraph","text":"Qui eu adipisicing ad eu excepteur dolore. Velit magna anim est sunt cillum nisi consectetur aliqua ad ea esse ex. Tempor velit proident eu aliquip esse.","spans":[]}],"alignText":"left","lottieAnimation":"utilize sticky e-services","lottieHeight":"aggregate enterprise networks","lottiePosition":"bottom","width":"expedite synergistic technologies","height":"enhance turn-key paradigms"},{"fullWidth":false,"background":"#4156c8","title":"repurpose frictionless e-services","content":[{"type":"paragraph","text":"Dolor elit cillum duis sint irure.","spans":[]}],"alignText":"left","lottieAnimation":"enhance viral e-tailers","lottieHeight":"repurpose synergistic platforms","lottiePosition":"top","width":"synergize user-centric infrastructures","height":"deliver B2C mindshare"},{"fullWidth":true,"background":"#69638e","title":"embrace frictionless initiatives","content":[{"type":"paragraph","text":"Cupidatat est magna ex voluptate Lorem.","spans":[]}],"alignText":"center","lottieAnimation":"exploit innovative channels","lottieHeight":"innovate extensible content","lottiePosition":"top","width":"synthesize value-added markets","height":"benchmark global mindshare"}],"primary":{"animation":"fade-up"},"id":"_GridWithAnimationOptionSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_GridWithAnimationOptionSlice.storyName = 'GridWithAnimationOptionSlice'
