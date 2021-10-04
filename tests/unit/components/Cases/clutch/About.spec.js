import { render } from '@testing-library/vue'
import About from '@/components/Cases/clutch/About'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
