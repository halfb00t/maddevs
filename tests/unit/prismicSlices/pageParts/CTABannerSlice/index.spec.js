import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import CtaBannerSlice from '@/prismicSlices/pageParts/CtaBannerSlice'

const props = {
  slice: {},
}

describe('CtaBannerSlice component', () => {
  let wrapper
  let mockShow

  beforeEach(() => {
    mockShow = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(CtaBannerSlice, {
      props,
    })
    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalContactMe is undefined, "show" method in ref modalContactMe not call', () => {
    wrapper = shallowMount(CtaBannerSlice, {
      props,
    })
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalContactMe exist, "show" method in ref modalContactMe call', () => {
    wrapper = shallowMount(CtaBannerSlice, {
      stubs: {
        ModalContactMe: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
      props,
    })
    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})
