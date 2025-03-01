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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"aggregate extensible eyeballs","titleWeight":"normal","description":"scale turn-key eyeballs","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"fullWidth":true,"paddingBottom":true},{"title":"embrace transparent synergies","titleWeight":"bold","description":"syndicate magnetic relationships","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"fullWidth":false,"paddingBottom":true}],"primary":{"background":"black","animation":"none"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"title":"embrace visionary experiences","description":"scale web-enabled architectures"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"title":"incentivize e-business partnerships","description":"streamline B2C solutions"},{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"title":"visualize vertical vortals","description":"benchmark efficient models"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"title":"expedite e-business eyeballs","description":"scale out-of-the-box niches"}],"primary":{"displayButtons":false,"background":"black","colorTheme":"white","animation":"fade-up-left"},"id":"_CardGridWithIcon"}
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#b3a047","title":"repurpose web-enabled e-markets","content":[{"type":"paragraph","text":"Exercitation nostrud voluptate eiusmod fugiat cupidatat veniam et dolore mollit sit tempor consequat quis nostrud. Officia anim anim laborum. Quis id enim eu veniam eu consectetur reprehenderit deserunt tempor qui aliquip.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#2d2f2d","title":"mesh proactive vortals","content":[{"type":"paragraph","text":"In id voluptate dolor Lorem culpa ea.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#eb1b1b","title":"aggregate global architectures","content":[{"type":"paragraph","text":"Consectetur id ex minim nulla labore voluptate nostrud elit sunt ullamco. Proident proident laborum elit do sunt non ea deserunt. Est nostrud cillum est magna et enim aliquip consectetur adipisicing.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#11f611","title":"disintermediate 24/365 relationships","content":[{"type":"paragraph","text":"Reprehenderit ea voluptate voluptate quis nostrud commodo.","spans":[]}],"alignText":"center"},{"fullWidth":true,"background":"#be9b80","title":"architect 24/7 e-tailers","content":[{"type":"paragraph","text":"Officia esse magna deserunt culpa minim occaecat aliquip incididunt mollit velit consectetur sit duis ex in.","spans":[]}],"alignText":"center"}],"primary":{"animation":"zoom-in-left"},"id":"_RichTextCards"}
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#011c62","title":"generate scalable interfaces","content":[{"type":"paragraph","text":"Ad do aliquip elit nostrud in proident nostrud eiusmod aute. Magna et elit id quis adipisicing. Ex tempor culpa sint commodo amet mollit nisi officia aliquip cupidatat et.","spans":[]}],"alignText":"left","lottie-animations":"cloud-migration","width":"visualize seamless action-items","height":"enhance collaborative networks"},{"fullWidth":true,"background":"#8f2694","title":"syndicate 24/365 experiences","content":[{"type":"paragraph","text":"Dolore anim voluptate minim excepteur. Consectetur labore excepteur cillum mollit aliquip consequat. Et fugiat exercitation laborum nostrud enim ex cillum.","spans":[]}],"alignText":"left","lottie-animations":"cloud-migration","width":"enhance bricks-and-clicks applications","height":"enable revolutionary e-tailers"}],"primary":{"animation":"fade-up-left"},"id":"_RichTextCardsAnimation"}
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
      mock: {"variation":"richTextCardsBottomAnimation","name":"RichTextCardsBottomAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#9ddff5","title":"e-enable B2B action-items","content":[{"type":"paragraph","text":"Aliquip ut voluptate excepteur nulla minim laborum laboris non ut officia elit commodo excepteur et voluptate.","spans":[]}],"alignText":"left","lottie-animations":"devops-audit","width":"embrace sexy applications","height":"revolutionize front-end applications"},{"fullWidth":true,"background":"#5a5180","title":"matrix efficient action-items","content":[{"type":"paragraph","text":"Proident duis nostrud esse id quis anim velit non Lorem ipsum veniam ipsum labore. Culpa do labore deserunt in nulla fugiat do et minim esse commodo pariatur exercitation ex. Eiusmod eu in officia esse qui cillum tempor ea ullamco minim velit consequat dolor cillum.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation","width":"enhance compelling networks","height":"synthesize intuitive paradigms"},{"fullWidth":true,"background":"#3ad5bb","title":"matrix vertical users","content":[{"type":"paragraph","text":"Excepteur dolore duis minim non laboris. Veniam consequat adipisicing reprehenderit proident nostrud non est sunt proident non adipisicing. In in mollit eu non dolore consectetur.","spans":[]}],"alignText":"left","lottie-animations":"devops-audit","width":"whiteboard mission-critical solutions","height":"synthesize compelling e-tailers"},{"fullWidth":false,"background":"#ef8e51","title":"revolutionize granular experiences","content":[{"type":"paragraph","text":"Culpa ea id proident excepteur quis consequat reprehenderit officia id sit minim sit irure. Commodo do ad ea ullamco culpa velit.","spans":[]}],"alignText":"left","lottie-animations":"qa-page2","width":"syndicate mission-critical methodologies","height":"matrix B2B metrics"}],"primary":{"animation":"zoom-in-left"},"id":"_RichTextCardsBottomAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsBottomAnimation.storyName = 'RichTextCardsBottomAnimation'
