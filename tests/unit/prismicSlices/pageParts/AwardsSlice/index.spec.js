import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import AwardsSlice from '@/prismicSlices/pageParts/AwardsSlice'

const directives = {
  'lazy-load': () => {},
}

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
  awards: [
    {
      image: {
        dimensions: {
          width: 200,
          height: 200,
        },
        alt: 'alt text',
        copyright: null,
        url: 'https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop',
      },
    },
    {
      image: {
        dimensions: {
          width: 200,
          height: 200,
        },
        alt: 'alt text',
        copyright: null,
        url: 'https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop',
      },
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.awards],
  },
})

describe('AwardsSlice slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(AwardsSlice, {
      directives,
      props: getProps(apiData),
    })

    expect(screen.getAllByTestId('award-card-test')).toHaveLength(2)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(AwardsSlice, {
      directives,
      props: getProps({
        ...apiData,
        awards: [],
      }),
    })

    expect(screen.queryByTestId('award-card-test')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it('should be fade-up', () => {
      render(AwardsSlice, {
        directives,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('awards-container-test').getAttribute('data-aos')).toBe('fade-up')
    })

    it('should be null', () => {
      render(AwardsSlice, {
        directives,
        props: getProps({
          awards: [],
        }),
      })

      expect(screen.getByTestId('awards-container-test').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white}`, () => {
      const wrapper = shallowMount(AwardsSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey}`, () => {
      const wrapper = shallowMount(AwardsSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black}`, () => {
      const wrapper = shallowMount(AwardsSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(AwardsSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
})
