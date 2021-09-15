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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"technologies_and_tools","items":[],"primary":{"animation":"zoom-in-up","title":"streamline rich models"},"id":"_DefaultSlice"}
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
      mock: {"variation":"toolsGrid","name":"Tools grid","slice_type":"technologies_and_tools","items":[],"primary":{"image":{"dimensions":{"width":26,"height":26},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=26&h=26&fit=crop"},"text":"monetize robust vortals"},"id":"_ToolsGrid"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ToolsGrid.storyName = 'Tools grid'
