import MyComponent from '../../../../../../client/prismicSlices/pageParts/AccordionSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/AccordionSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"accordion_slice","items":[{"question":"brand cutting-edge relationships","answer":[{"type":"paragraph","text":"Dolor proident dolor amet.","spans":[]}]},{"question":"strategize front-end eyeballs","answer":[{"type":"paragraph","text":"Ipsum ad ut excepteur adipisicing adipisicing sint mollit est fugiat. Mollit culpa Lorem sint aute commodo ut labore cillum qui exercitation laboris Lorem qui quis aliquip.","spans":[]}]},{"question":"brand magnetic ROI","answer":[{"type":"paragraph","text":"Velit deserunt ullamco officia reprehenderit incididunt dolor adipisicing do anim ipsum eu in irure est aute. Cupidatat eu voluptate reprehenderit deserunt eiusmod duis occaecat ut excepteur veniam proident dolore occaecat Lorem reprehenderit.","spans":[]}]},{"question":"matrix impactful web services","answer":[{"type":"paragraph","text":"Lorem laborum cillum pariatur velit mollit.","spans":[]}]}],"primary":{"mainTitle":[{"type":"heading1","text":"Maximize mission-critical paradigms","spans":[]}],"containerSize":"1026"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
