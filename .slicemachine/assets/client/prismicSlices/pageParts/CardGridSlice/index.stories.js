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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"integrate magnetic applications","description":"synergize efficient markets","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"brand world-class channels","description":"evolve rich architectures","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"deploy efficient e-tailers","description":"envisioneer impactful metrics","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"title":"strategize killer initiatives","description":"morph clicks-and-mortar synergies"},{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"title":"embrace rich models","description":"incubate 24/365 blockchains"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"title":"transition extensible niches","description":"cultivate integrated partnerships"},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"title":"drive granular synergies","description":"scale innovative experiences"}],"primary":{"displayButtons":true,"background":"black","colorTheme":"black","animation":"zoom-in-right"},"id":"_CardGridWithIcon"}
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#b71c","title":"brand wireless technologies","content":[{"type":"paragraph","text":"Ut consectetur pariatur esse occaecat pariatur cillum Lorem labore pariatur sit et incididunt laboris ad eu. Nostrud ad aliqua incididunt id.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#bcf4d4","title":"incentivize distributed eyeballs","content":[{"type":"paragraph","text":"Non duis excepteur non est irure consectetur esse enim esse.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#bb28a3","title":"maximize best-of-breed deliverables","content":[{"type":"paragraph","text":"Officia ipsum anim elit cupidatat dolore occaecat voluptate et id excepteur consectetur labore ad occaecat. Cupidatat dolor irure cillum duis.","spans":[]}],"alignText":"center"},{"fullWidth":true,"background":"#74d0d4","title":"aggregate world-class web-readiness","content":[{"type":"paragraph","text":"Aliqua in duis ex occaecat cillum officia incididunt sunt nulla sint duis reprehenderit fugiat elit.","spans":[]}],"alignText":"left"}],"primary":{"animation":"zoom-in-up"},"id":"_RichTextCards"}
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#d6977d","title":"visualize viral systems","content":[{"type":"paragraph","text":"Nisi pariatur mollit deserunt excepteur sunt cupidatat incididunt in commodo sit exercitation ad voluptate officia officia. Non proident nostrud dolore consequat magna officia.","spans":[]}],"alignText":"left","lottie-animations":"active-development","width":"unleash integrated channels","height":"enable cutting-edge action-items"},{"fullWidth":false,"background":"#45838c","title":"matrix B2C users","content":[{"type":"paragraph","text":"Exercitation duis in adipisicing dolore voluptate labore eiusmod deserunt eu aute minim fugiat officia. Lorem ipsum voluptate nostrud exercitation officia culpa exercitation qui ea nulla nostrud sint amet.","spans":[]}],"alignText":"left","lottie-animations":"active-development","width":"engage vertical metrics","height":"implement granular architectures"},{"fullWidth":false,"background":"#54b015","title":"architect vertical paradigms","content":[{"type":"paragraph","text":"Est est Lorem quis sit ipsum. Consequat nulla eu ullamco mollit elit eu aliqua ea ex do culpa duis in.","spans":[]}],"alignText":"left","lottie-animations":"stack-selection","width":"aggregate web-enabled synergies","height":"empower ubiquitous metrics"}],"primary":{"animation":"fade-left"},"id":"_RichTextCardsAnimation"}
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
      mock: {"variation":"richTextCardsBottomAnimation","name":"RichTextCardsBottomAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#d94fb7","title":"transition cross-platform initiatives","content":[{"type":"paragraph","text":"Mollit cupidatat eu magna incididunt consequat adipisicing dolore labore non id ut.","spans":[]}],"alignText":"center","lottie-animations":"devops-audit","width":"syndicate innovative initiatives","height":"whiteboard vertical paradigms"},{"fullWidth":true,"background":"#1ea396","title":"expedite rich blockchains","content":[{"type":"paragraph","text":"Cillum exercitation excepteur labore eiusmod amet sit qui incididunt veniam nostrud duis Lorem Lorem.","spans":[]}],"alignText":"left","lottie-animations":"qa-page2","width":"maximize 24/7 applications","height":"seize back-end applications"},{"fullWidth":false,"background":"#bbe284","title":"facilitate web-enabled partnerships","content":[{"type":"paragraph","text":"Elit proident laboris dolor non occaecat anim incididunt. Fugiat ea cupidatat anim. Exercitation ut cillum laborum adipisicing non nulla minim eu ea et ad.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation","width":"aggregate magnetic markets","height":"synthesize ubiquitous niches"}],"primary":{"animation":"fade-up-left"},"id":"_RichTextCardsBottomAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsBottomAnimation.storyName = 'RichTextCardsBottomAnimation'
