import { render, fireEvent, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import { contactsClickEvent } from '@/analytics/events'
import FooterNavbarMenu from '@/components/core/Footer/FooterNavbarMenu'
import { footerNavigation } from './footerNavigationFixture'

jest.mock('~/helpers/generatorUid')

const contactsClick = jest.spyOn(contactsClickEvent, 'send')
  .mockImplementation(() => {
  })

const stubs = ['NuxtLink']

const props = {
  menuName: footerNavigation.company.menus[0].name,
  menuRoutes: footerNavigation.company.menus[0].routes,
}
describe('FooterNavbarColumn', () => {
  it('should correct render footer navbar menu', () => {
    const { container } = render(FooterNavbarMenu, {
      stubs,
      props,
    })
    expect(container)
      .toMatchSnapshot()
  })
  it('should correct render menuRoutes without data', () => {
    const wrapper = shallowMount(FooterNavbarMenu, {
      stubs,
      propsData: props,
    })
    expect(wrapper.vm.$options.props.menuRoutes.default.call())
      .toEqual([])
  })
  it('should correct render menuName without data', () => {
    const wrapper = shallowMount(FooterNavbarMenu, {
      stubs,
      propsData: props,
    })
    expect(wrapper.vm.$options.props.menuName.default)
      .toEqual('')
  })
  it('should correct send event from contact-us to analytic', async () => {
    render(FooterNavbarMenu, {
      propsData: props,
      stubs: {
        NuxtLink: { template: '<a href="https://maddevs.io/contact-us/"></a>' },
      },
    })
    const link = screen.getAllByTestId('menu-item-internal-link')
    await fireEvent.click(link[3])
    expect(contactsClick)
      .toHaveBeenCalledTimes(1)
  })
  it('should correct send event from blog to analytic', async () => {
    render(FooterNavbarMenu, {
      propsData: props,
      stubs: {
        NuxtLink: { template: '<a href="https://maddevs.io/blog/"></a>' },
      },
    })
    const link = screen.getAllByTestId('menu-item-internal-link')
    await fireEvent.click(link[3])
    expect(contactsClick)
      .toHaveBeenCalledTimes(1)
  })
})
