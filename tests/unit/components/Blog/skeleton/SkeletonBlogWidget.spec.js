import { render } from '@testing-library/vue'
import SkeletonBlogWidget from '@/components/Blog/skeletons/SkeletonBlogWidget'

describe('skeleton blog widget component', () => {
  it('should render correctly', () => {
    const { container } = render(SkeletonBlogWidget)

    expect(container).toMatchSnapshot()
  })
})
