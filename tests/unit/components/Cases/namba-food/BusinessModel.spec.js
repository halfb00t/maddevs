import { render, screen } from '@testing-library/vue'
import BusinessModel from '@/components/Cases/nambafood/BusinessModel.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['ListTechnologiesItem', 'Picture']

describe('BusinessModel component', () => {
  it('should render correctly', () => {
    const { container } = render(BusinessModel, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(BusinessModel, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/^[M]ulti-directional business model/i).className).toBeTruthy()
  })
})
