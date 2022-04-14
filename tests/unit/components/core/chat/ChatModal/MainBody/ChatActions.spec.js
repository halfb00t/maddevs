import { shallowMount } from '@vue/test-utils'
import ChatActions from '@/components/core/chat/ChatModal/MainBody/ChatActions'

describe('ChatAcrions component', () => {
  it('should render correctly', () => {
    const { container } = shallowMount(ChatActions)

    expect(container).toMatchSnapshot()
  })

  it('should call the emit correctly when one of the buttons was clicked', () => {
    const callObject = {
      id: 1,
      $parent: {
        $emit: jest.fn(),
      },
    }

    const wrapper = shallowMount(ChatActions)
    wrapper.vm.$options.methods.changeModal.call(callObject)

    expect(callObject.$parent.$emit).toHaveBeenCalledTimes(1)
  })
})
