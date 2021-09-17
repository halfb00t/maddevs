import { render } from '@testing-library/vue'
import Banner from '@/components/OpenSource/Banner.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Banner component', () => {
  it('should render correctly', () => {
    const { container } = render(Banner, {
      mocks,
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})
