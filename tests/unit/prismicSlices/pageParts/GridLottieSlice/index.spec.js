import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import GridLottieSlice from '@/prismicSlices/pageParts/GridLottieSlice'

const mocks = {
  $prismic: {
    asHtml: jest.fn(),
  },
}

const stubs = ['Lottie']

const backgrounds = {
  white: '#ffffff',
  black: '#111213',
  grey: '#f5f7f9',
}

const apiData = {
  background: 'black',
  animation: 'fade-up',
  items: [
    {
      title: 'First item title',
      content: '<p>First item content</p>',
      background: '#FFFFFF',
      'lottie-animation': 'devops-audit',
      lottiePosition: 'top',
    },
    {
      title: 'second item title',
      content: '<p>second item content</p>',
      background: '#FFFFFF',
      'lottie-animation': 'devops-audit',
      lottiePosition: 'top',
    },
    {
      title: 'third item title',
      content: '<p>third item content</p>',
      background: '#000000',
      animationData: 'test',
      'lottie-animation': 'devops-audit',
      lottiePosition: 'bottom',
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.items],
  },
})

describe('GridLottieSlice', () => {
  describe('sliceBackground computed method', () => {
    it('should return white hex', () => {
      const wrapper = shallowMount(GridLottieSlice, {
        propsData: getProps({
          ...apiData,
          background: 'white',
        }),
        stubs,
        mocks,
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.white)
    })

    it('should return grey hex', () => {
      const wrapper = shallowMount(GridLottieSlice, {
        propsData: getProps({
          ...apiData,
          background: 'grey',
        }),
        stubs,
        mocks,
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.grey)
    })

    it('should return black hex', () => {
      const wrapper = shallowMount(GridLottieSlice, {
        propsData: getProps({
          ...apiData,
          background: 'black',
        }),
        stubs,
        mocks,
      })

      expect(wrapper.vm.sliceBackground).toBe(backgrounds.black)
    })

    it('should return null', () => {
      const wrapper = shallowMount(GridLottieSlice, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
        stubs,
        mocks,
      })

      expect(wrapper.vm.sliceBackground).toBeNull()
    })
  })
  describe('GridLottieSlice with items', () => {
    it('should render correctly with data', () => {
      const { container } = render(GridLottieSlice, {
        propsData: getProps({
          ...apiData,
          background: 'unknown',
        }),
        stubs,
        mocks,
      })
      expect(screen.getByText('First item title')).not.toBeNull()
      expect(screen.getByText('second item title')).not.toBeNull()
      expect(screen.getByText('third item title')).not.toBeNull()
      expect(screen.getAllByTestId('grid-lottie-animation-item')).toHaveLength(apiData.items.length)
      expect(container).toMatchSnapshot()
    })
  })
})
