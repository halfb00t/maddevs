import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import TeamCards from '@/prismicSlices/pageParts/TeamCards'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

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

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

jest.mock('~/helpers/generatorUid')

describe('TeamCards slice', () => {
  it('should render correctly', () => {
    const { container } = render(TeamCards, {
      propsData: getProps({
        ...apiData,
        background: 'white',
      }),
      localVue,
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
      localVue,
    })
    const img = screen.getAllByTestId('item-img')[0]
    expect(img.getAttribute('src')).toEqual('https://google.com/')
  })
})
