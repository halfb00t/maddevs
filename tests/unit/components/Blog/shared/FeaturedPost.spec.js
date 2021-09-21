import { render } from '@testing-library/vue'
import FeaturedPost from '@/components/Blog/shared/FeaturedPost'
import blogPost from '../../../__mocks__/blogPost'

const directives = {
  'lazy-load': () => {},
}

describe('featured post component', () => {
  it('is a Vue instance', () => {
    const { container } = render(FeaturedPost, {
      propsData: {
        post: blogPost,
        author: {
          image: {},
          name: '',
          position: '',
        },
      },
      stubs: ['NuxtLink'],
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
