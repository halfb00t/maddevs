import { render } from '@testing-library/vue'
import Benefits from '@/components/Cases/nambataxi/Benefits'

const stubs = ['Picture', 'CardTechSolution']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Benefits component', () => {
  it('should render correctly', () => {
    const { container } = render(Benefits, {
      stubs,
      mocks,
      directives: {
        prlx: () => {},
        'lazy-load': () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})
