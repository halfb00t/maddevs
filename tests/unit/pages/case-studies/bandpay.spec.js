import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Bandpay from '@/pages/case-studies/bandpay'
import formBaseProps from '../../__mocks__/formBaseProps'

const localVue = createLocalVue()
localVue.use(Vuex)

const DESCRIPTION = 'FinTech Case Study: Why freelancers don\'t receive payment on time, and how to avoid it? Read Bandpay\'s stories of creating a milestone-based platform to manage the payments process for freelancers.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs Case Study: Bandpay - Payment Management Solution for Freelancers and Small Businesses',
  'og:url': 'https://maddevs.io/case-studies/bandpay/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: Bandpay - Payment Management Solution for Freelancers and Small Businesses',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/bandpay-meta-banner.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Bandpay - Payment Management Solution for Freelancers and Small Businesses',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/bandpay-meta-banner.png',
  'twitter:url': 'https://maddevs.io/case-studies/bandpay/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Bandpay - Payment Management Solution for Freelancers and Small Businesses", "description": "FinTech Case Study: Why freelancers don\'t receive payment on time, and how to avoid it? Read Bandpay\'s stories of creating a milestone-based platform to manage the payments process for freelancers.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  image: 'https://maddevs.io/blog.png',
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/bandpay',
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

describe('Bandpay _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(Bandpay, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Bandpay, {
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
