import { render } from '@testing-library/vue'
import BeforeAfterImage from '@/components/shared/UIBeforeAfterImage'

describe('UIBeforeAfterImage component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(BeforeAfterImage, {
      stubs: ['NuxtLink', 'PrismicImage'],
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
