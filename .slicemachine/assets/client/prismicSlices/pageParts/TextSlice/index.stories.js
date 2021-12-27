import MyComponent from '../../../../../../client/prismicSlices/pageParts/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TextSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"animation":"fade-up-right","colorTheme":"white","maxWidth":"1028px","text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies."},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _Title = () => ({
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
      mock: {"variation":"title","name":"Title","slice_type":"text_slice","items":[],"primary":{"animation":"fade-down-left","colorTheme":"white","position":"center","title":"Featured projects","maxWidth":"1028px","tag":"h5","size-xl":"80-px","size-lg":"40-px","size-md":"33-px","size-sm":"16-px","size-xs":"60-px"},"id":"_Title"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Title.storyName = 'Title'

export const _TitleText = () => ({
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
      mock: {"variation":"titleText","name":"Title + Text","slice_type":"text_slice","items":[],"primary":{"animation":"zoom-in-left","colorTheme":"white","title":"Featured projects","text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.","maxWidth":"1028px"},"id":"_TitleText"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleText.storyName = 'Title + Text'

export const _TitleTextButton = () => ({
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
      mock: {"variation":"titleTextButton","name":"Title + Text + Button","slice_type":"text_slice","items":[],"primary":{"animation":"zoom-in-up","colorTheme":"white","title":"Featured projects","text":"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.","buttonText":"Get presentation","buttonLink":{"link_type":"Web","url":"https://maddevs.co/delivery-models.pdf"},"maxWidth":"1028px"},"id":"_TitleTextButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TitleTextButton.storyName = 'Title + Text + Button'

export const _Paragraph = () => ({
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
      mock: {"variation":"paragraph","name":"Paragraph","slice_type":"text_slice","items":[],"primary":{"animation":"fade-left","colorTheme":"black","type":"default","position":"center","text":"unleash frictionless convergence","maxWidth":"orchestrate integrated mindshare","size-xl":"40-px","size-lg":"24-px","size-md":"21-px","size-sm":"16-px","size-xs":"32-px"},"id":"_Paragraph"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Paragraph.storyName = 'Paragraph'

export const _FlexibleParagraph = () => ({
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
      mock: {"variation":"flexibleParagraph","name":"FlexibleParagraph","slice_type":"text_slice","items":[],"primary":{"animation":"zoom-in-left","colorTheme":"black","type":"default","tag":"h6","position":"center","text":"reintermediate open-source applications","textAlign":"center","fontWeight":400,"maxWidth":"extend dot-com portals","size-xl":"24-px","size-lg":"60-px","size-md":"32-px","size-sm":"16-px","size-xs":"16-px","fontFamily":"Poppins"},"id":"_FlexibleParagraph"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FlexibleParagraph.storyName = 'FlexibleParagraph'
