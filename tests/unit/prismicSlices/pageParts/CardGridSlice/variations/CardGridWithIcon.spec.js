import { render, screen } from '@testing-library/vue'
import CardGridWithIcon from '@/prismicSlices/pageParts/CardGridSlice/variations/CardGridWithIcon'

const props = {
  colorTheme: 'black',
  items: [
    {
      title: 'First item title',
      description: 'First item description',
      icon: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'First item image alt',
        dimensions: {
          width: '200',
          height: '300',
        },
      },
      link: {
        url: 'https://maddevs.io/',
      },
    },
    {
      title: 'second item title',
      description: 'second item description',
      icon: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'second item image alt',
        dimensions: {
          width: '200',
          height: '300',
        },
      },
      link: {
        url: 'https://maddevs.io/',
      },
    },
    {
      title: 'third item title',
      description: 'third item description',
      icon: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'third item image alt',
        dimensions: {
          width: '200',
          height: '300',
        },
      },
      link: {
        url: 'https://maddevs.io/',
      },
    },
  ],
}

describe('CardGridSlice - CardGridWithIcon variation', () => {
  it('should render correctly with data', () => {
    const { container } = render(CardGridWithIcon, {
      props,
    })
    expect(screen.getByText('First item title')).not.toBeNull()
    expect(screen.getByText('second item title')).not.toBeNull()
    expect(screen.getByText('third item title')).not.toBeNull()
    expect(screen.getAllByTestId('card-grid-with-icon-item')).toHaveLength(props.items.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(CardGridWithIcon, {
      props: {
        items: [],
      },
    })
    expect(container).toMatchSnapshot()
  })
})
