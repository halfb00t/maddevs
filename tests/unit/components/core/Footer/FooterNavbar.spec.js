import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FooterNavbar from '@/components/core/Footer/FooterNavbar'
import { footerNavigation } from './footerNavigationFixture'

const localVue = createLocalVue()
localVue.use(Vuex)
const recipeMock = jest.fn()
recipeMock.mockReturnValue('footerMainNavigation')

jest.mock('~/helpers/generatorUid')

const mocks = {
  $nuxt: {
    $emit: jest.fn(),
  },
  $router: { push: jest.fn() },
}

const props = {
  navigations: [
    [
      {
        name: 'company',
        label: 'Company',
      },
    ],
    [
      {
        name: 'services',
        label: 'Services',
      },
    ],
    [
      {
        name: 'industries',
        label: 'Industries',
      },
      {
        name: 'clients',
        label: 'Clients',
      },
      {
        name: 'insights',
        label: 'Insights',
      },
    ],
  ],
}
const stubs = [
  'NuxtLink',
]

const store = new Vuex.Store({
  getters: {
    footerMainNavigation: () => footerNavigation,
  },
})

describe('FooterNavbar component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FooterNavbar, {
      propsData: props,
      localVue,
      store,
      stubs,
      mocks,
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should correct render footer navbar', () => {
    const { container } = render(FooterNavbar, {
      propsData: props,
      localVue,
      store,
      stubs,
    })
    expect(container)
      .toMatchSnapshot()
  })
  it('should correct render without navigation', () => {
    expect(wrapper.vm.$options.props.navigations.default.call())
      .toEqual([])
  })

  it('should correct emmit event changed-active-column from company', async () => {
    await wrapper.find('.footer-nav-column--company')
      .trigger('mouseenter')
    expect(wrapper.emitted('changed-active-column'))
      .toHaveLength(1)
  })

  it('should correct emmit event changed-active-column from services', async () => {
    await wrapper.find('.footer-nav-column--services')
      .trigger('mouseenter')
    expect(wrapper.emitted('changed-active-column'))
      .toHaveLength(1)
  })

  it('should correct emmit event changed-active-column from industries', async () => {
    await wrapper.find('.footer-nav-column--industries')
      .trigger('mouseenter')
    expect(wrapper.emitted('changed-active-column'))
      .toHaveLength(1)
  })

  it('should correct redirect to oth page', async () => {
    wrapper.vm.goTo('services')
    expect(mocks.$router.push)
      .toHaveBeenCalledTimes(1)
  })

  it('should not redirect to oth page', async () => {
    wrapper.vm.goTo('nonamepage')
    expect(mocks.$router.push)
      .toHaveBeenCalledTimes(0)
  })
})
