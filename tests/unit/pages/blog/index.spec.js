import { render } from '@testing-library/vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Blog from '@/pages/blog/'

const DESCRIPTION = 'test description'

const localVue = createLocalVue()
localVue.use(Vuex)

const META_DATA = {
  description: DESCRIPTION,
  'og:url': 'https://maddevs.io/blog/',
  'og:type': 'website',
  'og:site_name': 'Custom Software Development Company',
  'og:title': 'Mad Devs: Software & Mobile App Development Company | Blog',
  'og:description': DESCRIPTION,
  'og:image': 'https://maddevs.io/blog.png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'twitter:card': 'summary_large_image',
  'twitter:text:title': 'Mad Devs: Software & Mobile App Development Company | Blog',
  'twitter:description': DESCRIPTION,
  'twitter:image:src': 'https://maddevs.io/blog.png',
  'twitter:url': 'https://maddevs.io/blog/',
}

const stubs = ['Main']

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

describe('Blog index component', () => {
  it('should render correctly', () => {
    const { container } = render(Blog, {
      localVue,
      store,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work head method', () => {
    const wrapper = shallowMount(Blog, {
      localVue,
      store,
      stubs,
    })

    const actual = wrapper.vm.$options.head.call({
      homePageContent: {
        description: DESCRIPTION,
      },
    })

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    actual.meta.forEach(meta => {
      expect(META_DATA[meta.name] || META_DATA[meta.property]).toBe(meta.content)
    })
  })

  it('should correct work head method if haven\'t description', () => {
    const wrapper = shallowMount(Blog, {
      localVue,
      store,
      stubs,
    })

    const actual = wrapper.vm.$options.head.call({
      homePageContent: {
        description: null,
      },
    })

    expect(actual.meta).toHaveLength(Object.keys(META_DATA).length)
    expect(actual.meta.find(meta => meta.name === 'description').content).toBe('')
  })
})
