import { render } from '@testing-library/vue'
import FeaturedProjects from '@/components/OpenSource/FeaturedProjects'

const stubs = ['TitleDesc', 'FeaturedProjectsList']

jest.mock('~/helpers/generatorUid')

describe('FeaturedProjects component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjects, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
