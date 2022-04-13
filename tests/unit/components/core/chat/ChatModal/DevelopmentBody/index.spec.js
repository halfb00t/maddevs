import { shallowMount } from '@vue/test-utils'
import Development from '@/components/core/chat/ChatModal/DevelopmentBody'
import createLeadMixin from '@/mixins/createLeadMixin'

const props = {
  isCompany: true,
  isPartnership: false,
}
const stubs = ['BaseForm', 'FormSuccess']
const mocks = {
  $recaptcha: jest.fn(),
}

describe('Development component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Development, {
      propsData: props,
      stubs,
      mixins: [createLeadMixin(763813, 'Chat Form')],
      mocks,
    })

    console.log(wrapper.vm.$options)

    expect(wrapper).toMatchSnapshot()
  })
})
