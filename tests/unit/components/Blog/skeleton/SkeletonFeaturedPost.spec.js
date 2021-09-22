import { render } from '@testing-library/vue'
import SkeletonFeaturedPost from '@/components/Blog/skeletons/SkeletonFeaturedPost'

describe('skeleton post widget component', () => {
  it('should render correctly', () => {
    const { container } = render(SkeletonFeaturedPost)

    expect(container).toMatchSnapshot()
  })
})
