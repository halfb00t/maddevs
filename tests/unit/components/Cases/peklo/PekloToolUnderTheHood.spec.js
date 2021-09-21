import { render } from '@testing-library/vue'
import PekloToolUnderTheHood from '@/components/Cases/peklo/PekloToolUnderTheHood'

const directives = {
  'lazy-load': () => {},
}

describe('PekloToolUnderTheHood component', () => {
  it('should render correctly', () => {
    const { container } = render(PekloToolUnderTheHood, {
      mocks: {
        $getMediaFromS3: () => 's3 image url',
      },
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
