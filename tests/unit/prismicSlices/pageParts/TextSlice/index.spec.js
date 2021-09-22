import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import TextSlice from '@/prismicSlices/pageParts/TextSlice'

const resizeWindow = width => {
  global.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

const apiData = {
  xl: '90px',
  lg: '80px',
  md: '70px',
  sm: '60px',
  xs: '50px',
}

const getProps = params => ({
  slice: {
    primary: {
      'size-xl': params?.xl,
      'size-lg': params?.lg,
      'size-md': params?.md,
      'size-sm': params?.sm,
      'size-xs': params?.xs,
    },
  },
})

describe('Spacer slice', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TextSlice, {
      propsData: getProps(apiData),
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('if window.innerWidth is less than 768px, the size is 50px', async () => {
    resizeWindow(768)
    expect(wrapper.vm.size).toBe('50px')
  })

  it('if window.innerWidth is less than 1024px and more than 768px, the size is 60px', async () => {
    resizeWindow(1024)
    expect(wrapper.vm.size).toBe('60px')
  })

  it('if window.innerWidth is less than 1200px and more than 1024px, the size is 70px', async () => {
    resizeWindow(1200)
    expect(wrapper.vm.size).toBe('70px')
  })

  it('if window.innerWidth is less than 1440px and more than 1200px, the size is 80px', async () => {
    resizeWindow(1366)
    expect(wrapper.vm.size).toBe('80px')
  })

  it('if window.innerWidth is more than 1440px, the size is 90px', async () => {
    resizeWindow(1441)
    expect(wrapper.vm.size).toBe('90px')
  })

  describe('Check fallback logic', () => {
    it('if window.innerWidth is less than 768px and size-xs is empty, the size is 60px from size-sm', async () => {
      resizeWindow(768)
      wrapper = shallowMount(TextSlice, {
        propsData: getProps({ ...apiData, xs: '' }),
      })
      expect(wrapper.vm.size).toBe('60px')
    })

    it('if window.innerWidth is less than 768px and size-xs & size-sm & size-md is empty, the size is 60px from size-lg', async () => {
      resizeWindow(768)
      wrapper = shallowMount(TextSlice, {
        propsData: getProps({
          ...apiData,
          xs: '',
          sm: '',
          md: '',
        }),
      })
      expect(wrapper.vm.size).toBe('80px')
    })
  })
})
