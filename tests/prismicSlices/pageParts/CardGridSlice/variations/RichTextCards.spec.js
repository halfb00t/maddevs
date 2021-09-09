import { render, screen } from '@testing-library/vue'
import RichTextCards from '@/prismicSlices/pageParts/CardGridSlice/variations/RichTextCards'

const mocks = {
  $prismic: {
    asHtml: jest.fn(),
  },
}

const props = {
  colorTheme: 'black',
  items: [
    {
      title: 'First item title',
      content: '<p>First item content</p>',
      background: '#FFF',
    },
    {
      title: 'second item title',
      content: '<p>second item content</p>',
      background: '#FFF',
    },
    {
      title: 'third item title',
      content: '<p>third item content</p>',
      background: '#000',
    },
  ],
}

describe('Card grid slices RichTextCards component', () => {
  it('should render correctly with data', () => {
    const { container } = render(RichTextCards, {
      props,
      mocks,
    })
    expect(screen.getByText('First item title')).not.toBeNull()
    expect(screen.getByText('second item title')).not.toBeNull()
    expect(screen.getByText('third item title')).not.toBeNull()
    expect(screen.getAllByTestId('rich-text-card-item')).toHaveLength(props.items.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(RichTextCards, {
      props: {
        items: [],
      },
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
