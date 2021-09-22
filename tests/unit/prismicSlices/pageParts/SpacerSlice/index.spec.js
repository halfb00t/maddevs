import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import SpacerSlice from '@/prismicSlices/pageParts/SpacerSlice'

const resizeWindow = width => {
  global.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

const apiData = {
  fallback: '100px',
  xl: '90px',
  lg: '80px',
  md: '70px',
  sm: '60px',
}

const getProps = params => ({
  slice: {
    primary: {
      height: params?.fallback,
      'height-xl': params?.xl,
      'height-lg': params?.lg,
      'height-md': params?.md,
      'height-sm': params?.sm,
    },
  },
})

describe('Spacer slice', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SpacerSlice, {
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

  it('if window.innerWidth is less than 375px, the height is 60px', async () => {
    resizeWindow(375)
    expect(wrapper.vm.height).toBe('60px')
  })

  it('if window.innerWidth is more than 375px and less than 768px, the height is 70px', async () => {
    resizeWindow(576)
    expect(wrapper.vm.height).toBe('70px')
  })

  it('if window.innerWidth is more than 768px and less than 1024px, the height is 80px', async () => {
    resizeWindow(992)
    expect(wrapper.vm.height).toBe('80px')
  })

  it('if window.innerWidth is more than 1024px and less than 1440px, the height is 90px', async () => {
    resizeWindow(1366)
    expect(wrapper.vm.height).toBe('90px')
  })

  describe('Check fallback logic', () => {
    it('if window.innerWidth is less than 375px and height-sm is empty, the height is 70px from height-md', async () => {
      resizeWindow(375)
      wrapper = shallowMount(SpacerSlice, {
        propsData: getProps({ ...apiData, sm: '' }),
      })
      expect(wrapper.vm.height).toBe('70px')
    })

    it('if window.innerWidth is less than 375px and height-md is empty, the height is 80px from height-lg', async () => {
      resizeWindow(375)
      wrapper = shallowMount(SpacerSlice, {
        propsData: getProps({ ...apiData, sm: '', md: '' }),
      })
      expect(wrapper.vm.height).toBe('80px')
    })

    it('if window.innerWidth is less than 375px and height-lg is empty, the height is 90px from height-xl', async () => {
      resizeWindow(375)
      wrapper = shallowMount(SpacerSlice, {
        propsData: getProps({
          ...apiData,
          sm: '',
          md: '',
          lg: '',
        }),
      })
      expect(wrapper.vm.height).toBe('90px')
    })

    it('if window.innerWidth is less than 375px and height-xl is empty, the height is 100px from height', async () => {
      resizeWindow(375)
      wrapper = shallowMount(SpacerSlice, {
        propsData: getProps({
          ...apiData,
          sm: '',
          md: '',
          lg: '',
          xl: '',
        }),
      })
      expect(wrapper.vm.height).toBe('100px')
    })
  })
})
