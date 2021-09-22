import { render, screen } from '@testing-library/vue'
import NationwideSuccess from '@/components/Cases/nambafood/NationwideSuccess.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['NuxtLink', 'CardDeliveryServiceNambafood', 'Picture']

describe('NationwideSuccess component', () => {
  it('should render correctly', () => {
    const { container } = render(NationwideSuccess, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(NationwideSuccess, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Nationwide success and day-to-day improvements/i).className).toContain('case_title_h2')
  })
})
