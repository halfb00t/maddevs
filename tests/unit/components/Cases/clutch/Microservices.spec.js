import { render } from '@testing-library/vue'
import Microservices from '@/components/Cases/clutch/Microservices'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Microservices component', () => {
  it('should render correctly', () => {
    const { container } = render(Microservices, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
