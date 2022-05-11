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

jest.mock('~/helpers/generatorUid')

describe('FeaturedProjectsListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjectsListItem, {
      mocks,
      props,
      directives,
    })
    expect(container).toMatchSnapshot()
  })
  it('should render correctly without data', () => {
    const { container } = render(FeaturedProjectsListItem, {
      mocks,
      directives,
    })
    expect(container).toMatchSnapshot()
  })
})
