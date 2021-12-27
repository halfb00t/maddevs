import MyComponent from '../../../../../../client/prismicSlices/blogPostParts/Quote';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/blogPostParts/Quote'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote","items":[],"primary":{"quotationDesign":"brackets","quote":[{"type":"paragraph","text":"Deserunt nostrud et sint officia est quis elit mollit consectetur cillum. Aliquip incididunt aute Lorem laborum et eu nisi aute ea commodo excepteur incididunt pariatur. Adipisicing excepteur duis consectetur deserunt Lorem tempor.","spans":[]}],"Nameoftheauthor":[{"type":"paragraph","text":"Incididunt est laborum voluptate do deserunt labore est. Commodo ullamco dolore nisi. Ex consequat velit nisi culpa adipisicing dolor culpa reprehenderit consequat.","spans":[]}],"portraitAuthor":{"dimensions":{"width":700,"height":700},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=700&h=700&fit=crop","mobile":{"dimensions":{"width":50,"height":50},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=50&h=50&fit=crop"}}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
