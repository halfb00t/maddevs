import { render } from '@testing-library/vue'
import FeaturedProjectsList from '@/components/OpenSource/shared/FeaturedProjectsList'

const stubs = ['FeaturedProjectsListItem']

jest.mock('~/helpers/generatorUid')

describe('FeaturedProjectsList component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjectsList, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
