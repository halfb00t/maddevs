import { render } from '@testing-library/vue'
import PowerSupply from '@/components/Cases/citycam/PowerSupply'

const stubs = ['Lottie']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('PowerSupply component', () => {
  it('should render correctly', () => {
    const { container } = render(PowerSupply, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
