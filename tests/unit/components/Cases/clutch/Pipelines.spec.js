import { render } from '@testing-library/vue'
import Pipelines from '@/components/Cases/clutch/Pipelines'

const stubs = ['LottieMad', 'Picture']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Pipelines component', () => {
  it('should render correctly', () => {
    const { container } = render(Pipelines, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
