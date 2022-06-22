import { render } from '@testing-library/vue'
import TagBanner from '@/components/Blog/Main/TagBanner'

const store = {
  getters: {
    blogTag: () => 'Blog tag',
    tagPostsCount: () => 5,
  },
}

describe('TagBanner component', () => {
  it('should render correctly', () => {
    const { container } = render(TagBanner, {
      store,
      mocks: {
        $getMediaFromS3: jest.fn(),
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with data', () => {
    const { container } = render(TagBanner, {
      store,
      propsData: {
        title: 'Project Management',
      },
      mocks: {
        $getMediaFromS3: jest.fn(),
      },
    })

    expect(container).toMatchSnapshot()
  })
})
