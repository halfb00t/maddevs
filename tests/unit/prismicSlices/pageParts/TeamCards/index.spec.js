import { render, screen } from '@testing-library/vue'
import TeamCards from '@/prismicSlices/pageParts/TeamCards'

const apiData = {
  animation: 'fade-up',
  items: [
    {
      isHover: true,
      hoverImage: {
        url: 'https://yandex.ru/',
        alt: 'Text Alt',
      },
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
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.items],
  },
})

describe('TeamCards slice', () => {
  it('should render correctly', () => {
    const { container } = render(TeamCards, {
      propsData: getProps({
        ...apiData,
        background: 'white',
      }),
    })
    expect(screen.queryAllByText('Uncle Bob')).not.toBeNull()
    expect(screen.queryAllByText('Alice')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with data', async () => {
    render(TeamCards, {
      propsData: getProps({
        ...apiData,
        background: 'white',
      }),
    })
    const img = screen.getAllByTestId('item-img')[0]
    expect(img.getAttribute('src')).toEqual('https://google.com/')
  })
})
