import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Clutch from '@/pages/case-studies/clutch'
import formBaseProps from '../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const DESCRIPTION = 'B2B Service Review Platform Case Study: How to adapt the B2B platform to increasing numbers of users? Read Clutch\'s story about implementing cutting-edge technology solutions to the platform\'s growth.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs Case Study: Clutch - the leading B2B ratings and reviews platform',
  'og:url': 'https://maddevs.io/case-studies/clutch/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: Clutch - the leading B2B ratings and reviews platform',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/clutch.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Clutch - the leading B2B ratings and reviews platform',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/clutch.png',
  'twitter:url': 'https://maddevs.io/case-studies/clutch/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Clutch - the leading B2B ratings and reviews platform", "description": "B2B Service Review Platform Case Study: How to adapt the B2B platform to increasing numbers of users? Read Clutch\'s story about implementing cutting-edge technology solutions to the platform\'s growth.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  image: 'https://maddevs.io/md-blog.png',
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/clutch',
    },
  },
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: jest.fn(),
  },
}

const stubs = ['NuxtLink', 'Main']

const directives = {
  'lazy-load': () => {},
}

const actions = {
  setHeaderTransparentArea: () => {},
  setHeaderTransparent: () => {},
}

const getters = {
  homePageContent: () => ({ description: DESCRIPTION }),
}

const store = new Vuex.Store({
  actions,
  getters,
})

describe('Clutch _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(Clutch, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Clutch, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    const actual = wrapper.vm.$options.head.call(wrapper.vm)

    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })
})
