import MyComponent from '../../../../../../client/prismicSlices/pageParts/TitleAndParagraphSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/TitleAndParagraphSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"title_and_paragraph_slice","items":[],"primary":{"title":[{"type":"paragraph","text":"Occaecat labore amet amet. Excepteur cupidatat exercitation nulla irure adipisicing tempor. Irure consequat exercitation consectetur enim.","spans":[]}],"description":[{"type":"paragraph","text":"Laboris laboris officia dolor veniam minim. Adipisicing adipisicing qui pariatur dolore nisi dolor incididunt do laboris.","spans":[]}],"maxWidth":"productize dynamic mindshare"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
