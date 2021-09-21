import 'regenerator-runtime'
import {
  render,
} from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalContentLocker from '@/components/core/modals/ModalContentLocker'

describe('ModalContentLocker component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should correctly render', () => {
    const { container } = render(ModalContentLocker)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalContactMe is undefined > "show" method in ref modalContactMe not call', () => {
    wrapper = shallowMount(ModalContentLocker)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalContactMe exist > "show" method in ref modalContactMe call', () => {
    wrapper = shallowMount(ModalContentLocker, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
    })
    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })

  it('if call method "close" and ref modalContactMe is undefined > "close" method in ref modalContactMe not call', () => {
    wrapper = shallowMount(ModalContentLocker)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref modalContactMe exist > "close" method in ref modalContactMe call', () => {
    wrapper = shallowMount(ModalContentLocker, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            close: mockClose,
          },
        },
      },
    })
    wrapper.vm.close()
    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('should correctly called handle sended form', () => {
    wrapper = shallowMount(ModalContentLocker, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            close: mockClose,
          },
        },
      },
    })
    wrapper.vm.handleSendedForm({ email: 'test@email.com' })
    expect(wrapper).toMatchSnapshot()
  })
})
