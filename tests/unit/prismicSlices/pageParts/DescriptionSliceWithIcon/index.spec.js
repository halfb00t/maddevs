import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import DescriptionSliceWithIcon from '@/prismicSlices/pageParts/DescriptionSliceWithIcon'

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
  colorTheme: 'white',
  animation: 'fade-up',
  title: 'Title',
  steps: [
    {
      image: {
        dimensions: {
          width: 900,
          height: 500,
        },
        alt: 'Placeholder image',
        copyright: null,
        url: 'https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop',
      },
      title: 'transition web-enabled platforms',
      content: 'deploy magnetic mindshare',
    },
    {
      image: {
        dimensions: {
          width: 900,
          height: 500,
        },
        alt: 'Placeholder image',
        copyright: null,
        url: 'https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop',
      },
      title: 'transition world-class initiatives',
      content: 'recontextualize enterprise deliverables',
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.steps],
  },
})

describe('DescriptionSliceWithIcon slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(DescriptionSliceWithIcon, {
      directives,
      props: getProps(apiData),
    })

    expect(screen.getAllByTestId('description')).toHaveLength(apiData.steps.length)
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it(`should be '${apiData.animation}'`, () => {
      render(DescriptionSliceWithIcon, {
        directives,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('description-slice__container').getAttribute('data-aos')).toBe(apiData.animation)
    })

    it('should be null', () => {
      render(DescriptionSliceWithIcon, {
        directives,
        props: getProps({ steps: [] }),
      })

      expect(screen.getByTestId('description-slice__container').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white}`, () => {
      const wrapper = shallowMount(DescriptionSliceWithIcon, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey}`, () => {
      const wrapper = shallowMount(DescriptionSliceWithIcon, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black}`, () => {
      const wrapper = shallowMount(DescriptionSliceWithIcon, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(DescriptionSliceWithIcon, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })

  describe('colorTheme computed method', () => {
    it('should return \'black\'', () => {
      const wrapper = shallowMount(DescriptionSliceWithIcon, {
        directives,
        propsData: getProps({
          ...apiData,
          colorTheme: 'black',
        }),
      })

      expect(wrapper.vm.colorTheme).toBe('black')
    })

    it('should return \'white\'', () => {
      const wrapper = shallowMount(DescriptionSliceWithIcon, {
        directives,
        propsData: getProps({
          ...apiData,
          colorTheme: null,
        }),
      })

      expect(wrapper.vm.colorTheme).toBe('white')
    })
  })
})
