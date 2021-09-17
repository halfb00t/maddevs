import { render, screen } from '@testing-library/vue'
import Mvp from '@/components/Cases/godee/Mvp.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['NuxtLink', 'CardGoDeeFeature']

describe('Mvp component', () => {
  it('should render correctly', () => {
    const { container } = render(Mvp, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(Mvp, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Minimum viable product MVP/i).className).toContain('case_title_h3')
  })
})
