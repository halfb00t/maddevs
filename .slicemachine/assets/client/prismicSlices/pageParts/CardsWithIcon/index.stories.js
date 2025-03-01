import MyComponent from '../../../../../../client/prismicSlices/pageParts/CardsWithIcon';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CardsWithIcon'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"cards_with_icon","items":[{"iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Deliver strategic deliverables","spans":[]}],"description":"grow front-end schemas"},{"iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Seize best-of-breed e-commerce","spans":[]}],"description":"brand sexy markets"},{"iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Extend viral web-readiness","spans":[]}],"description":"integrate dynamic blockchains"},{"iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Transform interactive niches","spans":[]}],"description":"extend ubiquitous networks"},{"iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Aggregate next-generation vortals","spans":[]}],"description":"innovate customized portals"}],"primary":{"animation":"zoom-in","containerSize":"1240"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
