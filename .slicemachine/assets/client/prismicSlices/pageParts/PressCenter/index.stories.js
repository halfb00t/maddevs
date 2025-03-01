import MyComponent from '../../../../../../client/prismicSlices/pageParts/PressCenter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/PressCenter'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"press_center","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"title":"brand compelling portals","description":"recontextualize cutting-edge infomediaries","link":{"link_type":"Web","url":"https://slicemachine.dev"},"date":"2020-10-09","linkLabel":"enable efficient functionalities","linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"title":"exploit bleeding-edge initiatives","description":"matrix turn-key content","link":{"link_type":"Web","url":"http://google.com"},"date":"2018-05-14","linkLabel":"extend proactive methodologies","linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"title":"monetize holistic initiatives","description":"deploy enterprise deliverables","link":{"link_type":"Web","url":"http://twitter.com"},"date":"2016-10-05","linkLabel":"engineer transparent niches","linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}}],"primary":{"animation":"fade-up-left","title":"reintermediate transparent technologies","description":"streamline sexy bandwidth","date":"2020-01-18","link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"revolutionize customized portals","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"linkedCompanyLogo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
