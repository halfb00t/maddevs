import MyComponent from '../../../../../../client/prismicSlices/pageParts/NavLinkSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/NavLinkSlice'
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
      mock: {
        "variation": "default-slice",
        "name": "Default slice",
        "slice_type": "nav_link_slice",
        "items": [],
        "primary": {
          "animation": "fade-down",
          "background": "black",
          "prevLink": {"link_type": "Web", "url": "https://slicemachine.dev"},
          "prevLinkText": "Prev",
          "nextLink": {"link_type": "Web", "url": "http://twitter.com"},
          "nextLinkText": "Next",
          "disabledLink": "previous-page",
          "position": "center",
        },
        "id": "_DefaultSlice"
      }
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
