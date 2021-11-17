import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Nambataxi from '@/pages/clients/case-studies/namba-taxi'
import formBaseProps from '../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const DESCRIPTION = 'Transportation Industry Case Study: How to develop software for taxi services from scratch? Read Namba Taxi\'s story of creating a taxi app to revolutionise the way people move around in a modern city.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs Case Study: Namba Taxi - Leading Taxi Service in Bishkek',
  'og:url': 'https://maddevs.io/clients/case-studies/namba-taxi/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: Namba Taxi - Leading Taxi Service in Bishkek',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/namba-taxi.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Namba Taxi - Leading Taxi Service in Bishkek',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/namba-taxi.png',
  'twitter:url': 'https://maddevs.io/clients/case-studies/namba-taxi/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Namba Taxi - Leading Taxi Service in Bishkek", "description": "Transportation Industry Case Study: How to develop software for taxi services from scratch? Read Namba Taxi\'s story of creating a taxi app to revolutionise the way people move around in a modern city.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  image: 'https://maddevs.io/blog.png',
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/namba-taxi',
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

describe('Nambataxi _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(Nambataxi, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Nambataxi, {
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
