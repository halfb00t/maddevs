import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'

import FooterNavbarColumn from '@/components/core/Footer/FooterNavbarColumn'
import { footerNavigation } from './footerNavigationFixture'

jest.mock('~/helpers/generatorUid')

const stubs = ['FooterNavbarMenu']

const props = {
  menus: footerNavigation.company.menus,
  name: footerNavigation.company.name,
}
describe('FooterNavbarColumn', () => {
  it('should correct render footer navbar column', () => {
    const { container } = render(FooterNavbarColumn, {
      stubs,
      props,
    })
    expect(container)
      .toMatchSnapshot()
  })
  it('should correct render footer navbar column without data', () => {
    const wrapper = shallowMount(FooterNavbarColumn, {
      stubs,
      propsData: props,
    })
    expect(wrapper.vm.$options.props.menus.default.call())
      .toEqual([])
  })
})
