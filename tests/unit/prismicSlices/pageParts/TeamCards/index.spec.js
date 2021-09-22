import { render, screen } from '@testing-library/vue'
import TeamCards from '@/prismicSlices/pageParts/TeamCards'

const props = {
  slice: {
    primary: {
      animation: 'fade-up',
    },
    items: [
      {
        name: 'Uncle Bob',
        image: {
          url: 'https://google.com/',
          alt: 'Alt text',
        },
        position: 'Senior',
        linkedin: {
          url: 'https://linkedin.com/bob/',
        },
      },
      {
        name: 'Alice',
        image: {
          url: 'https://yandex.ru/',
          alt: 'Text Alt',
        },
        position: 'Team Lead',
        linkedin: {
          url: 'https://linkedin.com/alice/',
        },
      },
    ],
  },
}

describe('TeamCards slice', () => {
  it('should render correctly', () => {
    const { container } = render(TeamCards, {
      props,
    })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with data', () => {
    render(TeamCards, {
      props,
    })

    expect(screen.queryAllByText('Uncle Bob')).not.toBeNull()
    expect(screen.queryAllByText('Alice')).not.toBeNull()
  })
})
