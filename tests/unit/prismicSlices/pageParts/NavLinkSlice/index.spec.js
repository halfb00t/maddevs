import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import NavLinkSlice from '@/prismicSlices/pageParts/NavLinkSlice'

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  animation: 'fade-down',
  background: 'black',
  prevLink: { link_type: 'Web', url: 'https://slicemachine.dev' },
  prevLinkText: 'Prev',
  nextLink: { link_type: 'Web', url: 'http://twitter.com' },
  nextLinkText: 'Next',
  disabledLink: 'previous-page',
  position: 'center',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

describe('NavLinkSlice slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(NavLinkSlice, {
      props: getProps(apiData),
    })
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it(`should be '${apiData.animation}'`, () => {
      render(NavLinkSlice, {
        props: getProps(apiData),
      })

      expect(screen.getByTestId('nav-link__container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null', () => {
      render(NavLinkSlice, {
        props: getProps({ }),
      })

      expect(screen.getByTestId('nav-link__container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white}`, () => {
      const wrapper = shallowMount(NavLinkSlice, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey}`, () => {
      const wrapper = shallowMount(NavLinkSlice, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black}`, () => {
      const wrapper = shallowMount(NavLinkSlice, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(NavLinkSlice, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})
