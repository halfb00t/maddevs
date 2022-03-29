import { render } from '@testing-library/vue'
import CustomerUniversityNavigation from '@/components/Blog/Post/CustomerUniversityNavigation'

const stubs = ['NuxtLink', 'SkeletonBlogWidget', 'PostCard', 'NextPreviewButtons']
const mocks = {
  getNextPosts: jest.fn(),
  getPrevPosts: jest.fn(),
  calcOffsetWidth: jest.fn(),
  getPrismicData: jest.fn(),
}
const clusterPosts = [
  {
    chapter_name: [
      {
        spans: [],
        text: 'Chapter 1',
        type: 'heading1',
      },
    ],
    cu_post: {
      id: 'YAGi7REAACMAgV8d',
      isBroken: false,
      lang: 'en-us',
      link_type: 'Document',
      slug: 'adadadad',
      tags: [],
      type: 'customer_university',
      uid: 'cu-test',
    },
  },
  {
    chapter_name: [
      {
        spans: [],
        text: 'Chapter 2',
        type: 'heading1',
      },
    ],
    cu_post: {
      id: 'YAGi7REAACMAgV8d',
      isBroken: false,
      lang: 'en-us',
      link_type: 'Document',
      slug: 'adadadadaa',
      tags: [],
      type: 'customer_university',
      uid: 'cu-test-2',
    },
  },
]
const props = {
  clusterPosts,
  cluster: {
    items: clusterPosts,
    primary: {
      cluster_name: [{ text: 'Custom software development pricing strategies' }],
    },
  },
}

describe('Customer university navigation', () => {
  it('is a Vue instance', () => {
    const { container } = render(CustomerUniversityNavigation, {
      stubs,
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('is a Vue instance with equal id', () => {
    const { container } = render(CustomerUniversityNavigation, {
      stubs,
      props,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
