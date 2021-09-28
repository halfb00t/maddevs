import MyComponent from '../../../../../../client/prismicSlices/pageParts/TechnologiesAndTools';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TechnologiesAndTools'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"technologies_and_tools","items":[],"primary":{"animation":"fade-right","title":"cultivate seamless platforms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _ToolsGrid = () => ({
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
      mock: {"variation":"toolsGrid","name":"Tools Grid","slice_type":"technologies_and_tools","items":[{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=26&h=26&fit=crop"},"text":"maximize B2C web-readiness"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=26&h=26&fit=crop"},"text":"benchmark synergistic mindshare"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=26&h=26&fit=crop"},"text":"mesh holistic bandwidth"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=26&h=26&fit=crop"},"text":"scale integrated web-readiness"}],"primary":{"animation":"fade-down-left"},"id":"_ToolsGrid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ToolsGrid.storyName = 'Tools Grid'
