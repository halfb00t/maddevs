import { render } from '@testing-library/vue'
import ChallengesAndSolutions from '@/components/Cases/citycam/ChallengesAndSolutions'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Lottie', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('ChallengesAndSolutions component', () => {
  it('should render correctly', () => {
    const { container } = render(ChallengesAndSolutions, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
