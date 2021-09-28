import MyComponent from '../../../../../../client/prismicSlices/pageParts/CardGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CardGridSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"target value-added solutions","description":"streamline turn-key systems","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"architect frictionless initiatives","description":"orchestrate interactive e-tailers","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"productize back-end vortals","description":"synthesize customized infrastructures","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _CardGridWithIcon = () => ({
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"title":"deploy compelling supply-chains","description":"engineer end-to-end systems"},{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"title":"incentivize customized e-services","description":"incubate cross-platform ROI"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"title":"leverage web-enabled users","description":"repurpose synergistic niches"},{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"title":"synergize enterprise functionalities","description":"deploy proactive action-items"}],"primary":{"displayButtons":false,"background":"white","colorTheme":"white","animation":"zoom-in-right"},"id":"_CardGridWithIcon"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithIcon.storyName = 'Card Grid With Icon'

export const _RichTextCards = () => ({
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#56edb5","title":"streamline one-to-one platforms","content":[{"type":"paragraph","text":"Amet ad nulla commodo. Cillum non irure laboris occaecat ut occaecat incididunt reprehenderit ad. Minim labore cupidatat labore ullamco ipsum veniam ex.","spans":[]}],"alignText":"center"},{"fullWidth":false,"background":"#a6fdab","title":"productize customized relationships","content":[{"type":"paragraph","text":"Cillum qui amet id tempor nostrud. Laborum commodo amet commodo consequat consectetur amet id ipsum ea dolore aliquip exercitation minim. Voluptate enim tempor cillum nostrud ipsum magna cupidatat enim.","spans":[]}],"alignText":"center"},{"fullWidth":true,"background":"#5c1a36","title":"visualize front-end mindshare","content":[{"type":"paragraph","text":"Commodo labore pariatur incididunt enim do sit ut ipsum quis minim nulla.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#faf95d","title":"iterate next-generation supply-chains","content":[{"type":"paragraph","text":"Ipsum irure sint laborum duis non ea nisi ad veniam tempor ea aute ipsum non.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#4096fc","title":"innovate user-centric e-tailers","content":[{"type":"paragraph","text":"Cillum occaecat ea mollit proident. Minim ex laborum aute incididunt eiusmod duis. Fugiat dolor occaecat exercitation Lorem veniam ad in voluptate sint sit cupidatat culpa culpa.","spans":[]}],"alignText":"center"}],"primary":{"animation":"fade-left"},"id":"_RichTextCards"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCards.storyName = 'RichTextCards'

export const _RichTextCardsAnimation = () => ({
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#988d27","title":"streamline open-source deliverables","content":[{"type":"paragraph","text":"Velit pariatur laboris cillum culpa non ut fugiat enim cupidatat cupidatat. Ipsum officia commodo id. Commodo officia incididunt labore duis id consectetur sunt veniam aute et ullamco.","spans":[]}],"alignText":"left","lottie-animations":"design-animation","width":"transform vertical platforms","height":"maximize magnetic e-business"},{"fullWidth":true,"background":"#7387fc","title":"aggregate cross-media action-items","content":[{"type":"paragraph","text":"Qui mollit eu eu aliquip consectetur occaecat culpa culpa sit voluptate voluptate. In non laborum ipsum sint tempor consectetur ut consequat elit reprehenderit nulla. Qui reprehenderit elit nostrud ea fugiat Lorem excepteur dolor.","spans":[]}],"alignText":"center","lottie-animations":"testing-stage","width":"benchmark rich architectures","height":"repurpose holistic markets"},{"fullWidth":true,"background":"#b0c51d","title":"scale magnetic initiatives","content":[{"type":"paragraph","text":"Proident aliquip adipisicing enim occaecat ullamco ipsum labore.","spans":[]}],"alignText":"center","lottie-animations":"stack-selection","width":"revolutionize seamless portals","height":"synthesize visionary paradigms"},{"fullWidth":false,"background":"#69adf","title":"scale e-business architectures","content":[{"type":"paragraph","text":"Reprehenderit eu anim amet aute do veniam ex. Anim tempor amet officia.","spans":[]}],"alignText":"left","lottie-animations":"active-development","width":"empower transparent users","height":"brand B2B solutions"},{"fullWidth":false,"background":"#897246","title":"benchmark impactful methodologies","content":[{"type":"paragraph","text":"Ipsum laborum occaecat esse excepteur laboris pariatur amet enim cupidatat quis.","spans":[]}],"alignText":"center","lottie-animations":"active-development","width":"integrate revolutionary metrics","height":"incubate rich e-tailers"}],"primary":{"animation":"none"},"id":"_RichTextCardsAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsAnimation.storyName = 'RichTextCardsAnimation'

export const _RichTextCardsBottomAnimation = () => ({
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
      mock: {"variation":"richTextCardsBottomAnimation","name":"RichTextCardsBottomAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#29f4ef","title":"syndicate open-source metrics","content":[{"type":"paragraph","text":"Ex proident in ut ex.","spans":[]}],"alignText":"left","lottie-animations":"-"},{"fullWidth":true,"background":"#ce38dc","title":"extend cross-platform e-tailers","content":[{"type":"paragraph","text":"Duis enim non irure laboris reprehenderit. Nisi fugiat est velit voluptate sint mollit. Duis consectetur anim irure exercitation velit cupidatat exercitation ea laborum laboris.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation"},{"fullWidth":true,"background":"#36ac0f","title":"incubate global channels","content":[{"type":"paragraph","text":"Ad excepteur velit est sint eu elit occaecat dolor culpa cupidatat culpa nisi voluptate elit ut. Mollit consequat pariatur nisi proident cillum nulla. Ullamco labore enim reprehenderit magna nisi minim officia.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation"}],"primary":{"animation":"zoom-in-right"},"id":"_RichTextCardsBottomAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsBottomAnimation.storyName = 'RichTextCardsBottomAnimation'
