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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"matrix customized methodologies","description":"grow user-centric solutions","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"matrix visionary experiences","description":"integrate open-source networks","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"facilitate granular metrics","description":"target seamless e-services","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"matrix ubiquitous schemas","description":"synthesize end-to-end partnerships","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"fullWidth":true}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"title":"streamline web-enabled systems","description":"incentivize frictionless deliverables"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"title":"reintermediate web-enabled supply-chains","description":"repurpose frictionless paradigms"},{"link":{"link_type":"Web","url":"https://prismic.io"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"title":"synergize killer bandwidth","description":"reinvent visionary eyeballs"}],"primary":{"displayButtons":false,"background":"black","colorTheme":"black","animation":"fade-up"},"id":"_CardGridWithIcon"}
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#fc6cf6","title":"synergize one-to-one metrics","content":[{"type":"paragraph","text":"Sint reprehenderit voluptate eu veniam velit cupidatat qui elit sint officia sint aliqua ullamco ut aliqua. Nulla eu non proident sunt do labore voluptate ex ipsum dolore magna tempor. Qui non ea sint sit aute eiusmod duis elit ipsum adipisicing laboris.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#97c475","title":"target revolutionary convergence","content":[{"type":"paragraph","text":"Nostrud sunt aute culpa esse. Adipisicing velit laborum aliqua ipsum sit aliqua id ad do fugiat ullamco anim. Laborum velit est sit officia labore est.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#eeceec","title":"optimize best-of-breed communities","content":[{"type":"paragraph","text":"Cupidatat elit voluptate ullamco veniam. Cupidatat magna cillum ut dolor id incididunt laborum nisi ex consequat magna laboris. Consectetur minim nulla labore.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#4cc949","title":"evolve integrated deliverables","content":[{"type":"paragraph","text":"Proident id reprehenderit quis non ullamco ut ipsum ut fugiat irure fugiat.","spans":[]}],"alignText":"left"}],"primary":{"animation":"fade-right"},"id":"_RichTextCards"}
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#f00deb","title":"embrace sticky systems","content":[{"type":"paragraph","text":"Minim cupidatat tempor officia fugiat adipisicing et. Consectetur eu Lorem mollit.","spans":[]}],"alignText":"center","lottie-animations":"research-animate"},{"fullWidth":true,"background":"#50735b","title":"morph real-time infrastructures","content":[{"type":"paragraph","text":"Fugiat veniam do tempor dolor. In aute tempor aliquip cupidatat laborum non irure excepteur.","spans":[]}],"alignText":"left","lottie-animations":"research-animate"},{"fullWidth":false,"background":"#bdc773","title":"recontextualize intuitive communities","content":[{"type":"paragraph","text":"Nisi nisi magna quis ad cillum incididunt.","spans":[]}],"alignText":"left","lottie-animations":"stack-selection"}],"primary":{"animation":"zoom-in"},"id":"_RichTextCardsAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsAnimation.storyName = 'RichTextCardsAnimation'
