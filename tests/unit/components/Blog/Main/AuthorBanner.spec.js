import { render } from '@testing-library/vue'
import AuthorBanner from '@/components/Blog/Main/AuthorBanner'

const mocks = {
  $prismic: {
    asText: () => 'img.png',
  },
}

const store = {
  getters: {
    blogAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
        header: {
          url: '',
          alt: '',
          dimensions: {},
        },
      },
    }),
  },
}

const directives = {
  'lazy-load': () => {},
}

describe('AuthorBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(AuthorBanner, {
      mocks,
      store,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
