import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Lido from '@/pages/case-studies/lido'
import formBaseProps from '../../__mocks__/formBaseProps'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const DESCRIPTION = 'Blockchain Technology Case Study: How to secure staking for the Defi platform? Read how Mad Devs helped Lido to improve their product and simplify and secure staking for users\' digital assets.'

const META_DATA = {
  description: DESCRIPTION,
  title: 'Mad Devs Case Study: Lido - the Leading DeFi Staking Platform',
  'og:url': 'https://maddevs.io/case-studies/lido/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs Case Study: Lido - the Leading DeFi Staking Platform',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/lido-meta-banner.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs Case Study: Lido - the Leading DeFi Staking Platform',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/lido-meta-banner.png',
  'twitter:url': 'https://maddevs.io/case-studies/lido/',
  metaTitle: '',
  url: '',
  jsonLd: '{"@context": "https://schema.org", "@type": "WebPage", "name": "Mad Devs Case Study: Lido - the Leading DeFi Staking Platform", "description": "Blockchain Technology Case Study: How to secure staking for the Defi platform? Read how Mad Devs helped Lido to improve their product and simplify and secure staking for users\' digital assets.", "publisher": {"@type": "ProfilePage", "name": "Mad Devs Group Limited"}}',
  image: 'https://maddevs.io/md-blog.png',
}

const mocks = {
  ...formBaseProps,
  $nuxt: {
    $route: {
      push: jest.fn(),
      path: '/lido',
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

describe('Lido _uid component', () => {
  global.$nuxt = {
    $route: {
      name: null,
    },
  }

  it('should render correctly', () => {
    const { container } = render(Lido, {
      localVue,
      store,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Lido, {
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
