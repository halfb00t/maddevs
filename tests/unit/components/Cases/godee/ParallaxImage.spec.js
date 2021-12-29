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
        'lazy-load': () => {},
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
        'lazy-load': () => {},
      },
    })

    expect(screen.getByTestId('test-case_parallax-image').getAttribute('data-src')).toBe(`${mocks.$getMediaFromS3()}`)
  })
})
