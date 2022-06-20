import { shallowMount } from '@vue/test-utils'
import HeaderMobile from '@/components/core/HeaderV2/HeaderMobile'

const stubs = ['HeaderMobileNavigation', 'HeaderMobileContacts', 'UIModalTriggerButton', 'HeaderMobileSocials']

const props = {
  navigation: [
    {
      name: 'company',
      label: 'Company',
    },
    {
      name: 'services',
      label: 'Services',
    },
  ],
}

jest.mock('~/helpers/generatorUid')

describe('HeaderMobile component', () => {
  it('should render correctly with props and stubs', () => {
    const wrapper = shallowMount(HeaderMobile, {
      propsData: props,
      stubs,
    })

    expect(wrapper.props()).toEqual(props)
    expect(wrapper).toMatchSnapshot()
  })
})
