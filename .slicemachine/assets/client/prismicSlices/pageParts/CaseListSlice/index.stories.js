import MyComponent from '../../../../../../client/prismicSlices/pageParts/CaseListSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CaseListSlice'
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
        "slice_type": "case_list_slice",
        "items": [{
          "title": "grow e-business bandwidth",
          "subtitle": "syndicate B2C action-items",
          "description": "benchmark granular relationships",
          "width": "big",
          "video": "/videos/veeqo-banner.mp4#t=1",
          "poster": "/images/Cases/veeqo/svg/veeqo-banner-bg.svg",
          "link": "/case-studies/veeqo/",
          "folder": "veeqo",
          "file": "veeqo-logotype",
          "logoWidth": "105",
          "logoHeight": "23",
          "alt": "transition extensible methodologies"
        },
          {
            "title": "grow e-business bandwidth",
            "subtitle": "syndicate B2C action-items",
            "description": "benchmark granular relationships",
            "width": "small",
            "video": "/videos/veeqo-banner.mp4#t=1",
            "poster": "/images/Cases/veeqo/svg/veeqo-banner-bg.svg",
            "link": "/case-studies/veeqo/",
            "folder": "veeqo",
            "file": "veeqo-logotype",
            "logoWidth": "105",
            "logoHeight": "23",
            "alt": "transition extensible methodologies"
          },
          {
            "title": "grow e-business bandwidth",
            "subtitle": "syndicate B2C action-items",
            "description": "benchmark granular relationships",
            "width": "full",
            "video": "/videos/veeqo-banner.mp4#t=1",
            "poster": "/images/Cases/veeqo/svg/veeqo-banner-bg.svg",
            "link": "/case-studies/veeqo/",
            "folder": "veeqo",
            "file": "veeqo-logotype",
            "logoWidth": "105",
            "logoHeight": "23",
            "alt": "transition extensible methodologies"
          }],
        "primary": {"animation": "fade-left", "background": "white"},
        "id": "_DefaultSlice"
      }
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
