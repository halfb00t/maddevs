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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"technologies_and_tools","items":[],"primary":{"animation":"none","title":"monetize scalable web services"},"id":"_DefaultSlice"}
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
      mock: {"variation":"toolsGrid","name":"Tools grid","slice_type":"technologies_and_tools","items":[{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=26&h=26&fit=crop"},"text":"monetize mission-critical channels"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=26&h=26&fit=crop"},"text":"architect enterprise platforms"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=26&h=26&fit=crop"},"text":"grow dynamic models"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=26&h=26&fit=crop"},"text":"orchestrate B2C web-readiness"},{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=26&h=26&fit=crop"},"text":"strategize sexy ROI"}],"primary":{},"id":"_ToolsGrid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ToolsGrid.storyName = 'Tools grid'
