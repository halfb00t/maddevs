import { mount } from '@vue/test-utils'
import PrivacyPage from '@/pages/approach/privacy'

describe('privacy page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PrivacyPage)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
})
