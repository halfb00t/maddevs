import { render } from '@testing-library/vue'
import HowPekloToolWorks from '@/components/Cases/peklo/HowPekloToolWorks'

const directives = {
  'lazy-load': () => {},
}

describe('HowPekloToolWorks component', () => {
  it('should render correctly', () => {
    const { container } = render(HowPekloToolWorks, {
      mocks: {
        $getMediaFromS3: () => 's3 image url',
      },
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
