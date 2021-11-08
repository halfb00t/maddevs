import { shallowMount } from '@vue/test-utils'
import HeaderMobileNavigation from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileNavigation'

const stubs = ['HeaderMobileSection']
const props = ['Company', 'Services', 'Clients', 'Insights']

describe('HeaderMobileNavigation component', () => {
  it('should render correctly with props data', () => {
    const wrapper = shallowMount(HeaderMobileNavigation, {
      propsData: {
        navigation: props,
      },
      stubs,
    })

    expect(wrapper).toMatchSnapshot()
  })
})
