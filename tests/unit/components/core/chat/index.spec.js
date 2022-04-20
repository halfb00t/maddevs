import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import Chat from '@/components/core/chat'
import 'regenerator-runtime'

const stubs = ['ChatIcon', 'ChatModal']
const mockToggleMethod = jest.spyOn(Chat.methods, 'toggleModal')

describe('Chat component', () => {
  it('should render correctly', () => {
    const { container } = render(Chat, { stubs })
    expect(container).toMatchSnapshot()
  })

  it('should toggle the isVisible option by click the button', async () => {
    await shallowMount(Chat, { stubs }).find('button').trigger('click')
    expect(mockToggleMethod).toHaveBeenCalledTimes(1)
  })

  it('isVisible is false by default', () => {
    const wrapper = shallowMount(Chat, { stubs })
    expect(wrapper.vm.isVisible).toBe(false)
  })

  it('Escape sets isVisible to false', () => {
    const wrapper = shallowMount(Chat, {
      stubs,
    })

    const event = {
      key: 'Escape',
    }

    wrapper.vm.isVisible = true
    wrapper.vm.onKeydown(event)

    expect(wrapper.vm.isVisible).toBe(false)
  })
})
