import { render } from '@testing-library/vue'
import DataProcessed from '@/components/Cases/clutch/DataProcessed'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['LottieMad', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('DataProcessed component', () => {
  it('should render correctly', () => {
    const { container } = render(DataProcessed, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
