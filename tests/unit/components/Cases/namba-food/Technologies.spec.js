import { render, screen } from '@testing-library/vue'
import Technologies from '@/components/Cases/nambafood/Technologies.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['ListTechnologiesItem']

describe('Technologies component', () => {
  it('should render correctly', () => {
    const { container } = render(Technologies, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Technologies, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Technologies used for the Namba Food project/i).className).toContain('case_title_h3')
  })
})
