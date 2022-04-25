import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CityCam from '@/pages/case-studies/citycam'
import formBaseProps from '../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const DESCRIPTION = 'IoT Case Study: How to monitor traffic in real-time? Read CityCam\'s story of real-time traffic monitoring, which makes transportation safer and faster.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs Case Study: Real-Time Traffic Monitoring System for Cities',
  'og:url': 'https://maddevs.io/case-studies/citycam/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: Real-Time Traffic Monitoring System for Cities',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/citycam.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Real-Time Traffic Monitoring System for Cities',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/citycam.png',
  'twitter:url': 'https://maddevs.io/case-studies/citycam/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Real-Time Traffic Monitoring System for Cities", "description": "IoT Case Study: How to monitor traffic in real-time? Read CityCam\'s story of real-time traffic monitoring, which makes transportation safer and faster.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  image: 'https://maddevs.io/md-blog.png',
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/citycam',
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

describe('CityCam _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(CityCam, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(CityCam, {
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
