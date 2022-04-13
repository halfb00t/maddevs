import { shallowMount } from '@vue/test-utils'
import ChatIcon from '@/components/core/chat/ChatIcon'

const stubs = ['MessageIcon', 'CloseIcon']
const props = {
  isVisible: false,
}

describe('ChatIcon', () => {
  it('should render correctly', () => {
    const { container } = shallowMount(ChatIcon, {
      stubs,
      propsData: props,
    })

    expect(container).toMatchSnapshot()
  })
})
