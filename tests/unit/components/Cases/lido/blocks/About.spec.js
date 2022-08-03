import { render } from '@testing-library/vue'
import About from '../../../../../../client/components/Cases/lido/blocks/About'
import '../../../../__mocks__/intersectionObserverMock'

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
