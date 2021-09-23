import { render } from '@testing-library/vue'
import TechChallenges from '@/components/Cases/clutch/TechChallenges'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture']

describe('TechChallenges component', () => {
  it('should render correctly', () => {
    const { container } = render(TechChallenges, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
