import { render, screen } from '@testing-library/vue'
import CouriersApplication from '@/components/Cases/nambafood/CouriersApplication.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('CouriersApplication component', () => {
  it('should render correctly', () => {
    const { container } = render(CouriersApplication, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(CouriersApplication, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Android application for couriers/i).className).toBeTruthy()
  })
})
