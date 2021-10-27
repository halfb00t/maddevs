import { render, screen } from '@testing-library/vue'
import RichTextCardsBottomAnimation from '@/prismicSlices/pageParts/CardGridSlice/variations/RichTextCardsBottomAnimation'

jest.mock('uuid')

const mocks = {
  $prismic: {
    asHtml: jest.fn(),
  },
}

const stubs = ['CardAnimation']

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

describe('RichTextCardsBottomAnimation', () => {
  describe('RichTextCardsBottomAnimation with items', () => {
    it('should render correctly with data', () => {
      const { container } = render(RichTextCardsBottomAnimation, {
        props,
        stubs,
        mocks,
      })
      expect(screen.getByText('First item title')).not.toBeNull()
      expect(screen.getByText('second item title')).not.toBeNull()
      expect(screen.getByText('third item title')).not.toBeNull()
      expect(screen.getAllByTestId('rich-text-animation-item')).toHaveLength(3)
      expect(container).toMatchSnapshot()
    })
  })
})
