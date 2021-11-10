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

  it('if call method "showModal" and ref CTAModalRef is undefined, "show" method in ref CTAModalRef not call', () => {
    wrapper = shallowMount(CtaBannerSlice, {
      props,
    })
    wrapper.vm.showModal()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "showModal" and ref CTAModalRef exist, "show" method in ref CTAModalRef call', () => {
    wrapper = shallowMount(CtaBannerSlice, {
      stubs: {
        CTAModal: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
      props,
    })
    wrapper.vm.showModal()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})
