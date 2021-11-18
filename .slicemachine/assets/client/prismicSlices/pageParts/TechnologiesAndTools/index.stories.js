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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"technologies_and_tools","items":[],"primary":{"animation":"fade-left","background":"grey","title":"seize frictionless schemas"},"id":"_DefaultSlice"}
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
      mock: {"variation":"toolsGrid","name":"Tools Grid","slice_type":"technologies_and_tools","items":[{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=26&h=26&fit=crop"},"text":"optimize value-added mindshare"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=26&h=26&fit=crop"},"text":"enhance dot-com niches"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=26&h=26&fit=crop"},"text":"expedite cutting-edge e-business"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=26&h=26&fit=crop"},"text":"implement cross-media relationships"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=26&h=26&fit=crop"},"text":"expedite granular methodologies"}],"primary":{"animation":"fade-left","background":"black"},"id":"_ToolsGrid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ToolsGrid.storyName = 'Tools Grid'

export const _ExistingToolsGrid = () => ({
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
      mock: {"variation":"existingToolsGrid","name":"ExistingToolsGrid","slice_type":"technologies_and_tools","items":[],"primary":{"animation":"fade-down","background":"black","selectedTools":"frontend"},"id":"_ExistingToolsGrid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ExistingToolsGrid.storyName = 'ExistingToolsGrid'
