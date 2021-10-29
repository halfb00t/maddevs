import { shallowMount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import BenefitSlice from '@/prismicSlices/pageParts/BenefitSlice'

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
  text: 'Title',
  tag: 'h2',
  benefits: [
    {
      image: {
        dimensions: {
          width: 45,
          height: 45,
        },
        alt: 'Placeholder image',
        copyright: null,
        url: 'https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop',
      },
      description: 'deploy magnetic mindshare',
    },
    {
      image: {
        dimensions: {
          width: 45,
          height: 45,
        },
        alt: 'Placeholder image',
        copyright: null,
        url: 'https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop',
      },
      description: 'deploy magnetic mindshare 2',
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.benefits],
  },
})

describe('BenefitSlice slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(BenefitSlice, {
      directives,
      props: getProps(apiData),
    })

    expect(screen.getAllByTestId('benefit-test')).toHaveLength(2)
    expect(screen.getByText('Title')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  describe('data-aos animation attribute', () => {
    it('should be fade-up', () => {
      render(BenefitSlice, {
        directives,
        props: getProps(apiData),
      })

      expect(screen.getByTestId('benefit-animation-test').getAttribute('data-aos')).toBe('fade-up')
    })

    it('should be null', () => {
      render(BenefitSlice, {
        directives,
        props: getProps({ benefits: [] }),
      })

      expect(screen.getByTestId('benefit-animation-test').getAttribute('data-aos')).toBeNull()
    })
  })

  describe('sliceBackground computed method', () => {
    it(`should return ${backgrounds.white}`, () => {
      const wrapper = shallowMount(BenefitSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it(`should return ${backgrounds.grey}`, () => {
      const wrapper = shallowMount(BenefitSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it(`should return ${backgrounds.black}`, () => {
      const wrapper = shallowMount(BenefitSlice, {
        directives,
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(BenefitSlice, {
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
