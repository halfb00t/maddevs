import { render } from '@testing-library/vue'
import HRContactCard from '@/components/Careers/shared/HRContactCard'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $t: () => 'translated',
}

const directives = {
  'lazy-load': () => {},
}

describe('HRContactCard', () => {
  it('is a Vue instance', () => {
    const { container } = render(HRContactCard, {
      mocks,
      directives,
    })
    expect(container).toMatchSnapshot()
  })
})
