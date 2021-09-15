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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"technologies_and_tools","items":[],"primary":{"animation":"fade-down","title":"iterate next-generation e-markets"},"id":"_DefaultSlice"}
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
      mock: {"variation":"toolsGrid","name":"Tools grid","slice_type":"technologies_and_tools","items":[{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=26&h=26&fit=crop"},"text":"repurpose holistic models"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=26&h=26&fit=crop"},"text":"evolve cross-platform eyeballs"}],"primary":{"animation":"none"},"id":"_ToolsGrid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ToolsGrid.storyName = 'Tools grid'
