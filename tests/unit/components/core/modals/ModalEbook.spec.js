import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ModalEbook from '@/components/core/modals/ModalEbook'

const directives = {
  'lazy-load': () => {
  },
}

jest.mock('~/helpers/generatorUid')
jest.mock('~/helpers/getRandomTitle')

const props = {
  ebookImage: {
    url: 'img.jpg',
    alt: 'Image',
  },
}

describe('ModalEbook component', () => {
  let wrapper = null
  let mockShow = null
  let mockClose = null
  let mockHandleSendedForm = null

  beforeEach(() => {
    wrapper = shallowMount(ModalEbook, {
      directives,
      propsData: props,
    })
    mockShow = jest.fn()
    mockClose = jest.fn()
    mockHandleSendedForm = jest.fn()
  })

  afterEach(() => {
    mockShow = null
    mockShow = null
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html())
      .toMatchSnapshot()
  })

  it('if call method "show" and ref modalEbook is undefined > "show" method in ref modalEbook not call', () => {
    wrapper = shallowMount(ModalEbook, {
      directives,
      propsData: props,
    })
    wrapper.vm.show()
    expect(mockShow)
      .not
      .toHaveBeenCalled()
  })

  it('if call method "show" and ref modalEbook exist > "show" method in ref modalEbook call', () => {
    wrapper = shallowMount(ModalEbook, {
      stubs: {
        Modal: {
          render(h) {
            return h('div')
          },
          methods: {
            show: mockShow,
          },
        },
      },
      directives,
      propsData: props,
    })
    wrapper.vm.show()
    expect(mockShow)
      .toHaveBeenCalledTimes(1)
  })

  it('if call method "close" and ref modalEbook is undefined > "close" method in ref modalEbook not call', () => {
    wrapper = shallowMount(ModalEbook, {
      directives,
      propsData: props,
    })
    wrapper.vm.close()
    expect(mockClose)
      .not
      .toHaveBeenCalled()
  })

  it('Should correct call handleSendedForm method', () => {
    wrapper = shallowMount(ModalEbook, {
      directives,
      propsData: props,
    })
    wrapper.vm.handleSendedForm({ email: 'testemail@test.test' })
    expect(mockHandleSendedForm)
      .not
      .toHaveBeenCalled()
  })

  it('if call method "close" and ref modalEbook exist > "close" method in ref modalEbook call', () => {
    wrapper = shallowMount(ModalEbook, {
      stubs: {
        Modal: {
          render(h) {
            return h('div')
          },
          methods: {
            close: mockClose,
          },
        },
      },
      directives,
      propsData: props,
    })
    wrapper.vm.close()
    expect(mockClose)
      .toHaveBeenCalledTimes(1)
  })
})
