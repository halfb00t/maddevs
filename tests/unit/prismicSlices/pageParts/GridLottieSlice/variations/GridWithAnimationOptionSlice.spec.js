import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import GridWithAnimationOptionSlice from '@/prismicSlices/pageParts/GridLottieSlice/variations/GridWithAnimationOptionSlice'

jest.mock('uuid')

const mocks = {
  $prismic: {
    asHtml: jest.fn(),
  },

  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['LottieMad']

const props = {
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

describe('GridLottieSlice', () => {
  describe('GridLottieSlice with items', () => {
    it('should render correctly with data', () => {
      const { container } = render(GridWithAnimationOptionSlice, {
        propsData: props,
        stubs,
        mocks,
      })
      expect(screen.getByText('First item title')).not.toBeNull()
      expect(screen.getByText('second item title')).not.toBeNull()
      expect(screen.getByText('third item title')).not.toBeNull()
      expect(screen.getAllByTestId('grid-lottie-animation-item')).toHaveLength(3)
      expect(container).toMatchSnapshot()
    })
  })
  describe('GridLottieSlice without items', () => {
    it('should render correctly without items', () => {
      const wrapper = shallowMount(GridWithAnimationOptionSlice, {
        stubs,
        mocks,
      })

      expect(wrapper.vm.$options.props.items.default.call()).toEqual([])
      expect(wrapper.vm.renderCardContent(props.items[0].content)).toEqual(props.items[0].content)
    })
  })
})
