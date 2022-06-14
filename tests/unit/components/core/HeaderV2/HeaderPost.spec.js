import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'

import HeaderPost from '@/components/core/HeaderV2/HeaderPost'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $prismic: {
    asText: name => name[0].text,
  },
  $route: () => 'blog',
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

const stubs = ['HeaderSection', 'PostAuthor', 'NuxtLink', 'PostTag']

const props = {
  postType: 'post',

  uid: '1',

  title: [{ text: 'test', type: 'heading4' }],

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
      stubs, props, mocks, localVue,
    })
    expect(screen.getAllByText('test')).not.toBeNull()
    expect(screen.getByTestId('post-link').getAttribute('to')).toBe('/blog/1/')
    expect(container).toMatchSnapshot()
  })
})
