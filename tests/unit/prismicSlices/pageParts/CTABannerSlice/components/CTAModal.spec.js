import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import CTAModal from '@/prismicSlices/pageParts/CtaBannerSlice/components/CTAModal'

const props = {
  variant: 'contact-me',
  location: '/',
}

const stubs = ['ModalContactMe', 'ModalOrderProjectFromUs']

describe('CTAModal component', () => {
  it('should correclty render component', () => {
    const { container } = render(CTAModal, {
      propsData: props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly import dynamic imports', async () => {
    const wrapper = shallowMount(CTAModal, {
      propsData: props,
    })

    const ModalContactMe = await wrapper.vm.$options.components.ModalContactMe.call()
    const ModalOrderProjectFromUs = await wrapper.vm.$options.components.ModalOrderProjectFromUs.call()

    expect(ModalContactMe.default).toBeUndefined()
    expect(ModalOrderProjectFromUs.default.name).toBe('ModalOrderProjectFromUs')
  })

  it('should correctly show method call', () => {
    const wrapper = shallowMount(CTAModal, {
      propsData: props,
      stubs,
    })
    const showMock = jest.spyOn(wrapper.vm, 'show')
    wrapper.vm.$refs.modalVariantRef = { show: jest.fn() }
    wrapper.vm.show()
    expect(showMock).toHaveBeenCalledTimes(1)
  })

  it('should correctly return undefined when show not called', () => {
    const wrapper = shallowMount(CTAModal, {
      propsData: props,
    })

    delete wrapper.vm.$refs.modalVariantRef
    wrapper.vm.show()
    expect(wrapper.vm.$refs.modalVariantRef).toBeUndefined()
  })
})
