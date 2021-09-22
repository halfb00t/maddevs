import { render } from '@testing-library/vue'
import Banner from '@/components/DeliveryModels/Banner.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('Banner component', () => {
  it('should render correctly', () => {
    const { container } = render(Banner, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
