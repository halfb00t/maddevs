import { render, screen } from '@testing-library/vue'
import ParallaxImage from '@/components/Cases/godee/ParallaxImage.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('ParallaxImage component', () => {
  it('should render correctly', () => {
    const { container } = render(ParallaxImage, {
      mocks,
      directives: {
        parallax: {
          inserted: () => {},
        },
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render url image', () => {
    render(ParallaxImage, {
      mocks,
      directives: {
        parallax: {
          inserted: () => {},
        },
      },
    })

    expect(screen.getByTestId('test-case_parallax-image').style.background).toBe(`url(${mocks.$getMediaFromS3()})`)
  })
})
