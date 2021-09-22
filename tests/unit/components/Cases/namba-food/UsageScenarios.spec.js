import { render, screen } from '@testing-library/vue'
import UsageScenarios from '@/components/Cases/nambafood/UsageScenarios.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['ClientOnly', 'Picture']

describe('UsageScenarios component', () => {
  it('should render correctly', () => {
    const { container } = render(UsageScenarios, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(UsageScenarios, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Typical usage scenarios and user roles/i).className).toContain('case_title_h2')
  })
})
