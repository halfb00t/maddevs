import { render } from '@testing-library/vue'
import FeaturedProjectsListItem from '@/components/OpenSource/shared/FeaturedProjectsListItem'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  logo: {
    name: 'logo name',
    alt: 'alt text',
  },
  name: 'name',
  title: 'title',
  description: 'description',
  link: 'link',
}

const directives = {
  'lazy-load': () => {},
}

describe('FeaturedProjectsListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjectsListItem, {
      mocks,
      props,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
