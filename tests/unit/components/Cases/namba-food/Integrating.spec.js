import { render, screen } from '@testing-library/vue'
import Integrating from '@/components/Cases/nambafood/Integrating.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['TextQuote']

describe('Integrating component', () => {
  it('should render correctly', () => {
    const { container } = render(Integrating, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Integrating, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Flexible catalogue management/i).className).toContain('case_title_h3')
  })
})
