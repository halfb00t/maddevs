import MyComponent from '../../../../../../client/prismicSlices/pageParts/ButtonSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/ButtonSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"button_slice","items":[],"primary":{"fullWidth":false,"animation":"none","background":"black","alignment":"left","text":"Default red button","link":{"link_type":"Web","url":"https://prismic.io"},"maxWidth":"grow leading-edge portals"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _OutlinedButton = () => ({
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
      mock: {"variation":"outlinedButton","name":"Outlined Button","slice_type":"button_slice","items":[],"primary":{"fullWidth":true,"animation":"none","background":"black","color":"black","alignment":"left","text":"Outlined button","link":{"link_type":"Web","url":"http://twitter.com"},"maxWidth":"empower e-business markets"},"id":"_OutlinedButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_OutlinedButton.storyName = 'Outlined Button'

export const _LinkButton = () => ({
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
      mock: {"variation":"linkButton","name":"Link Button","slice_type":"button_slice","items":[],"primary":{"fullWidth":false,"animation":"none","background":"black","color":"red","alignment":"right","text":"Link button","link":{"link_type":"Web","url":"http://google.com"},"maxWidth":"revolutionize user-centric vortals"},"id":"_LinkButton"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LinkButton.storyName = 'Link Button'
