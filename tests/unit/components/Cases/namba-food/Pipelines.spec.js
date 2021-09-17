import { render, screen } from '@testing-library/vue'
import Pipelines from '@/components/Cases/nambafood/Pipelines.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['Picture']

describe('Pipelines component', () => {
  it('should render correctly', () => {
    const { container } = render(Pipelines, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Pipelines, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/^[P]ipelines/i).className).toContain('case_title_h3')
  })
})
