import { render } from '@testing-library/vue'
import Requirements from '@/components/Cases/nambataxi/Requirements'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture', 'CardTechSolution', 'TextQuote']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
  prlx: () => {},
}

describe('Requirements component', () => {
  it('should render correctly', () => {
    const { container } = render(Requirements, {
      stubs,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
