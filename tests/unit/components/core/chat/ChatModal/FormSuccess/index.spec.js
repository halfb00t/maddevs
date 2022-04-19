import { shallowMount } from '@vue/test-utils'
import FormSuccess from '@/components/core/chat/ChatModal/FormSuccess'

const text = 'Thanks for your request!'

describe('FormSuccess component', () => {
  it('should render correctly', () => {
    const { container } = shallowMount(FormSuccess)

    expect(container).toMatchSnapshot()
  })

  it('should to contain a text', () => {
    const wrapper = shallowMount(FormSuccess)

    expect(wrapper.html()).toContain(text)
  })
})
