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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"grid_lottie_slice","items":[{"fullWidth":false,"background":"#da9a4a","title":"e-enable value-added channels","content":[{"type":"paragraph","text":"Enim ex dolor fugiat elit et quis esse. Dolore cillum sint minim ut mollit eu do ex quis laborum nisi dolore excepteur culpa pariatur. Quis anim dolore sit.","spans":[]}],"alignText":"left","lottie-animation":"devops-audit","lottie-position":"top","width":"generate cross-platform niches","height":"extend one-to-one metrics"},{"fullWidth":false,"background":"#974db9","title":"implement real-time systems","content":[{"type":"paragraph","text":"Amet sint proident ad Lorem enim.","spans":[]}],"alignText":"left","lottie-animation":"devops-audit","lottie-position":"top","width":"recontextualize visionary methodologies","height":"synthesize collaborative relationships"},{"fullWidth":false,"background":"#e3694c","title":"visualize ubiquitous mindshare","content":[{"type":"paragraph","text":"Nulla quis non cillum adipisicing id commodo qui Lorem ad velit. Minim tempor ad deserunt elit officia ex laborum velit est dolore aliqua esse et ipsum enim. Consequat quis pariatur culpa quis incididunt ut dolore sint anim magna.","spans":[]}],"alignText":"center","lottie-animation":"devops-audit","lottie-position":"top","width":"incentivize e-business schemas","height":"aggregate sexy infomediaries"},{"fullWidth":true,"background":"#6c8033","title":"reintermediate B2C mindshare","content":[{"type":"paragraph","text":"Mollit nulla et et reprehenderit non ex minim. Exercitation eu est Lorem aliqua adipisicing incididunt cillum minim.","spans":[]}],"alignText":"left","lottie-animation":"devops-audit","lottie-position":"top","width":"scale bricks-and-clicks architectures","height":"seize collaborative deliverables"},{"fullWidth":true,"background":"#5054c7","title":"synergize visionary relationships","content":[{"type":"paragraph","text":"Do est ex labore aliquip magna anim laborum. Ea aliquip excepteur tempor non proident dolor aute occaecat.","spans":[]}],"alignText":"left","lottie-animation":"devops-audit","lottie-position":"top","width":"harness out-of-the-box schemas","height":"deploy distributed mindshare"},{"fullWidth":true,"background":"#a9916d","title":"drive proactive convergence","content":[{"type":"paragraph","text":"Ullamco enim ullamco reprehenderit culpa commodo excepteur culpa. Quis commodo ullamco aliquip elit excepteur qui duis exercitation ad ad sit consequat.","spans":[]}],"alignText":"center","lottie-animation":"devops-audit","lottie-position":"bottom","width":"synergize compelling models","height":"facilitate killer platforms"}],"primary":{"animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
