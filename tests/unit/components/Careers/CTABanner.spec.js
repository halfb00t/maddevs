import { render } from '@testing-library/vue'
import CTABanner from '@/components/Careers/CTABanner'

const stubs = ['UIBanner', 'UIButton']

const mocks = {
  $getMediaFromS3: () => 'img.png',
  $t: () => 'translated',
}

const directives = {
  'lazy-load': () => {},
}

describe('CTABanner component', () => {
  it('should render correctly', () => {
    const { container } = render(CTABanner, {
      stubs,
      mocks,
      computed: {
        image: () => 'image.png',
      },
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
