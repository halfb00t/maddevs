import { shallowMount } from '@vue/test-utils'
import HeaderMobileContacts from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileContacts'

const directives = {
  'lazy-load': () => {},
}

jest.mock('~/helpers/generatorUid')

describe('HeaderMobileContacts component', () => {
  it('should render correctly', () => {
    const { container } = shallowMount(HeaderMobileContacts, {
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
