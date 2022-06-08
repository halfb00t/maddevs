import { render } from '@testing-library/vue'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Footer from '@/components/core/Footer/Footer'
import FooterNavbar from '@/components/core/Footer/FooterNavbar'
import { footerNavigation } from './footerNavigationFixture'

Object.defineProperty(global.document, 'querySelector', {
  value: jest.fn(() => document.createElement('div')),
})

jest.mock('~/helpers/generatorUid')

const localVue = createLocalVue()
localVue.use(Vuex)

const recipeMock = jest.fn()
recipeMock.mockReturnValue('footerMainNavigation')

const store = new Vuex.Store({
  getters: {
    footerMainNavigation: () => footerNavigation,
  },
  actions: {
    getFooterContent: () => jest.fn(),
  },
})

describe('Footer component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should correct render footer', () => {
    const stubs = ['FooterNavbar', 'FooterContacts', 'FooterStaticNavigations']

    const { container } = render(Footer, {
      store,
      stubs,
      localVue,
    })
    expect(container)
      .toMatchSnapshot()
  })
  it('should correct change company column', async () => {
    const stubs = ['FooterContacts', 'FooterStaticNavigations', 'FooterNavbarMenu', 'NuxtLink']
    const spy = jest.spyOn(Footer.methods, 'onChangeColumn')
    const parent = mount(Footer, {
      store,
      stubs,
      localVue,
    })

    await parent.findComponent(FooterNavbar)
      .find('.footer-nav-column--company')
      .trigger('mouseenter')
    expect(spy)
      .toHaveBeenCalledTimes(1)
  })
  it('should correct change services column', async () => {
    const stubs = ['FooterContacts', 'FooterStaticNavigations', 'FooterNavbarMenu', 'NuxtLink']
    const spy = jest.spyOn(Footer.methods, 'onChangeColumn')
    const parent = mount(Footer, {
      store,
      stubs,
      localVue,
    })

    await parent.findComponent(FooterNavbar)
      .find('.footer-nav-column--services')
      .trigger('mouseenter')
    expect(spy)
      .toHaveBeenCalledTimes(1)
  })
  it('should correct change industries column', async () => {
    const stubs = ['FooterContacts', 'FooterStaticNavigations', 'FooterNavbarMenu', 'NuxtLink']
    const spy = jest.spyOn(Footer.methods, 'onChangeColumn')
    const parent = mount(Footer, {
      store,
      stubs,
      localVue,
    })

    await parent.findComponent(FooterNavbar)
      .find('.footer-nav-column--industries')
      .trigger('mouseenter')
    expect(spy)
      .toHaveBeenCalledTimes(1)
  })
  it('should correct run getActiveIconByColumnName without column name', async () => {
    const stubs = ['FooterContacts', 'FooterStaticNavigations', 'FooterNavbarMenu', 'NuxtLink']
    const parent = shallowMount(Footer, {
      store,
      stubs,
      localVue,
    })
    expect(parent.vm.$options.methods.getActiveIconByColumnName.call())
      .toEqual('')
  })
  it('should correct run onChangeColumn without columnName', async () => {
    const stubs = ['FooterContacts', 'FooterStaticNavigations', 'FooterNavbarMenu', 'NuxtLink']
    const spy = jest.spyOn(Footer.methods, 'onChangeColumn')
    const parent = mount(Footer, {
      store,
      stubs,
      localVue,
    })

    await parent.findComponent(FooterNavbar)
      .find('.footer-navbar')
      .trigger('mouseleave')
    expect(spy)
      .toHaveBeenCalledTimes(1)
  })
})
