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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"architect 24/365 functionalities","description":"harness extensible architectures","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"disintermediate strategic platforms","description":"enable mission-critical technologies","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"title":"target web-enabled mindshare","description":"embrace intuitive experiences"},{"link":{"link_type":"Web","url":"https://prismic.io"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"title":"innovate extensible solutions","description":"matrix rich eyeballs"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"title":"expedite holistic action-items","description":"harness frictionless deliverables"}],"primary":{"displayButtons":false,"background":"black","colorTheme":"white","animation":"fade-up"},"id":"_CardGridWithIcon"}
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#4fc539","title":"harness transparent supply-chains","content":[{"type":"paragraph","text":"Cupidatat ut dolore laborum quis do ullamco consequat sint amet dolore.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#440f4d","title":"synthesize synergistic markets","content":[{"type":"paragraph","text":"Lorem ullamco consequat consequat nulla nisi.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#1250a7","title":"streamline sticky architectures","content":[{"type":"paragraph","text":"Tempor laboris aliqua exercitation nulla occaecat aliquip esse. Sunt labore non eu irure anim qui.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#a99799","title":"transform e-business paradigms","content":[{"type":"paragraph","text":"Ut cupidatat laborum Lorem Lorem quis occaecat. Eiusmod aute esse fugiat culpa nostrud pariatur minim reprehenderit nulla mollit quis consequat cupidatat.","spans":[]}],"alignText":"left"}],"primary":{"animation":"zoom-in-right"},"id":"_RichTextCards"}
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#27fd55","title":"brand seamless platforms","content":[{"type":"paragraph","text":"Et dolore ad elit ullamco ad veniam.","spans":[]}]},{"fullWidth":false,"background":"#c8259b","title":"reintermediate rich niches","content":[{"type":"paragraph","text":"Duis adipisicing ipsum aute sunt mollit irure proident. Exercitation reprehenderit excepteur et nisi reprehenderit Lorem non do dolore tempor sunt.","spans":[]}]}],"primary":{"animation":"zoom-in-left"},"id":"_RichTextCardsAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsAnimation.storyName = 'RichTextCardsAnimation'
