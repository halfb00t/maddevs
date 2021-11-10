import { mount } from '@vue/test-utils'
import HeaderMobileSocials from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileSocials'

const directives = {
  'lazy-load': () => { },
}

describe('HeaderMobileSocials component', () => {
  it('should render correctly', () => {
    const wrapper = mount(HeaderMobileSocials, {
      directives,
    })

    expect(wrapper.is(HeaderMobileSocials)).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  it('the ul tag should include classname', () => {
    const wrapper = mount(HeaderMobileSocials, {
      directives,
    })

    const ul = wrapper.find('ul')
    expect(ul.classes()).toContain('header-mobile-socials')
  })
})
