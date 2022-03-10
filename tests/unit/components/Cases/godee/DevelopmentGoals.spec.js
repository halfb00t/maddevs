import { render, screen } from '@testing-library/vue'
import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'

const directives = {
  'lazy-load': () => {},
  'mad-parallax': () => {},
}

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('DevelopmentGoals component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals, {
      directives,
      mocks,
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })
})
