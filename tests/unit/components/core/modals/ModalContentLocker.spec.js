import 'regenerator-runtime'
import {
  render,
} from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import ModalContentLocker from '@/components/core/modals/ModalContentLocker'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

jest.mock('~/helpers/generatorUid')

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('ModalContentLocker component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should correctly render', () => {
    const { container } = render(ModalContentLocker, { localVue })

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalContactMe is undefined > "show" method in ref modalContactMe not call', () => {
    wrapper = shallowMount(ModalContentLocker, { localVue })
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
      localVue,
    })
    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })

  it('if call method "close" and ref modalContactMe is undefined > "close" method in ref modalContactMe not call', () => {
    wrapper = shallowMount(ModalContentLocker, { localVue })
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
      localVue,
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
      localVue,
      propsData: {
        ebook: {
          primary: {
            sendPulseTemplateId: 123,
          },
        },
      },
    })
    wrapper.vm.handleSendedForm({ email: 'test@email.com' })
    expect(wrapper).toMatchSnapshot()
  })
})
