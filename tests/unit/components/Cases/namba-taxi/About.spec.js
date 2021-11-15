import { render } from '@testing-library/vue'
import About from '@/components/Cases/nambataxi/About'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture', 'StatisticCard']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
