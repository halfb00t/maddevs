import { shallowMount } from '@vue/test-utils'
import ChatModal from '@/components/core/chat/ChatModal'
import 'regenerator-runtime'

const stubs = ['MainBody', 'Development', 'Simplebar', 'HeaderLogo', 'MessageIcon']

describe('ChatModal component', () => {
  it('should render correctly', () => {
    const { container } = shallowMount(ChatModal, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly call the emit method by click on the button', async () => {
    const callObject = {
      showMainBody: true,
      showDevelopmentBody: false,
      isCompany: false,
      isShowMessage: false,
      isPartnership: false,
      $emit: jest.fn(),
    }

    const wrapper = shallowMount(ChatModal, { stubs })
    wrapper.vm.$options.methods.onClose.call(callObject)

    expect(callObject.$emit).toHaveBeenCalledTimes(1)
  })

  it('should correctly call the onClose method by click on the button', async () => {
    const mockOnClose = jest.spyOn(ChatModal.methods, 'onClose').mockImplementation()
    const wrapper = shallowMount(ChatModal, { stubs })

    const btn = wrapper.find('button')
    btn.trigger('click')

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('should correctly render the modal by depending on id', () => {
    const wrapper = shallowMount(ChatModal, { stubs })

    wrapper.vm.changeModal(0)

    expect(wrapper.vm.showMainBody).toBe(false)
    expect(wrapper.vm.showDevelopmentBody).toBe(true)
    expect(wrapper.vm.isCompany).toBe(true)
    expect(wrapper.vm.isPartnership).toBe(false)

    wrapper.vm.changeModal(1)

    expect(wrapper.vm.showMainBody).toBe(false)
    expect(wrapper.vm.showDevelopmentBody).toBe(true)
    expect(wrapper.vm.isCompany).toBe(false)
    expect(wrapper.vm.isPartnership).toBe(true)

    wrapper.vm.changeModal(2)

    expect(wrapper.vm.showMainBody).toBe(true)
    expect(wrapper.vm.isShowMessage).toBe(true)
    expect(wrapper.vm.showDevelopmentBody).toBe(false)
    expect(wrapper.vm.isCompany).toBe(false)
    expect(wrapper.vm.isPartnership).toBe(false)
  })
})
