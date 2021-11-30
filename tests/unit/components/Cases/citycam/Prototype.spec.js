import { render } from '@testing-library/vue'
import Prototype from '@/components/Cases/citycam/Prototype'

const stubs = ['LottieMad']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Prototype component', () => {
  it('should render correctly', () => {
    const { container } = render(Prototype, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
