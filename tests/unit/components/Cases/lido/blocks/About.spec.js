import { render } from '@testing-library/vue'
import About from '../../../../../../client/components/Cases/lido/blocks/About'

const mocks = {
  $getMediaFromS3: jest.fn(),
}

describe('Lido About component', () => {
  it('should correctly render component', () => {
    const { container } = render(About, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
