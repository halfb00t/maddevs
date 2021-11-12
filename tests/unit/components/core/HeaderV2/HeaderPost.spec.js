import { render, screen } from '@testing-library/vue'

import HeaderPost from '@/components/core/HeaderV2/HeaderPost'

const mocks = {
  $prismic: {
    asText: name => name,
  },
  $route: () => 'blog',
}

const stubs = ['HeaderSection', 'PostAuthor', 'NuxtLink', 'PostTag']

const props = {
  postType: 'post',

  uid: '1',

  title: 'test',

  date: '01.01.01',

  featuredImage: {
    alt: null,
    copyright: null,
    dimensions: {
      height: 100,
      width: 100,
    },
    url:
      'https://images.prismic.io/superpupertest/255624bf-6a97-48ff-a3b6-337434ba4d33_2_orMuDx-7_VWwpnRL1Q1rxw.jpeg?auto=compress,format',
  },

  tags: [],

  postAuthor: {
    name: 'John Smith',
  },
}

describe('HeaderPost component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderPost, {
      stubs, props, mocks,
    })
    expect(screen.getAllByText('test')).not.toBeNull()
    expect(screen.getByTestId('post-link').getAttribute('to')).toBe('/insights/blog/1/')
    expect(container).toMatchSnapshot()
  })
})
