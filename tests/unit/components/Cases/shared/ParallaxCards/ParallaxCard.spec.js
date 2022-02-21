import { render, screen } from '@testing-library/vue'
import ParallaxCard from '@/components/Cases/shared/ParallaxCards/ParallaxCard'

const directives = {
  'lazy-load': () => {
  },
}

const props = {
  title: 'test',
  descriptions: 'test description',
  icon: 'test-icon',
  folder: 'test-folder',
  alt: 'test-icon',
  width: 50,
  height: 50,
}

describe('ParallaxCard component', () => {
  it('should render correctly', () => {
    const { container } = render(ParallaxCard, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    expect(screen.getByText(props.descriptions))
      .not
      .toBeNull()
    expect(container)
      .toMatchSnapshot()
  })
})
