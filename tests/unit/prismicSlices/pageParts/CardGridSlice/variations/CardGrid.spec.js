import { render, screen } from '@testing-library/vue'
import CardGrid from '@/prismicSlices/pageParts/CardGridSlice/variations/CardGrid'

const props = {
  colorTheme: 'black',
  items: [
    {
      title: 'First item title',
      description: 'First item description',
      image: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'First item image alt',
        dimensions: {
          width: '100%',
          height: '100%',
        },
      },
      btnLink: {
        url: 'maddevs.io',
      },
    },
    {
      title: 'second item title',
      description: 'second item description',
      image: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'second item image alt',
        dimensions: {
          width: '100%',
          height: '100%',
        },
      },
      btnLink: {
        url: 'maddevs.io',
      },
    },
    {
      title: 'third item title',
      description: 'third item description',
      image: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'third item image alt',
        dimensions: {
          width: '100%',
          height: '100%',
        },
      },
      btnLink: {
        url: 'maddevs.io',
      },
    },
  ],
}

describe('CardGridSlice - CardGrid variation', () => {
  it('should render correctly with data', () => {
    const { container } = render(CardGrid, {
      props,
    })
    expect(screen.getByText('First item title')).not.toBeNull()
    expect(screen.getByText('second item title')).not.toBeNull()
    expect(screen.getByText('third item title')).not.toBeNull()
    expect(screen.getAllByTestId('card-grid-item')).toHaveLength(props.items.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(CardGrid, {
      props: {
        items: [],
      },
    })
    expect(container).toMatchSnapshot()
  })
})
