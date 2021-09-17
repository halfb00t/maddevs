import { render, screen } from '@testing-library/vue'
import TechnologyStack from '@/components/Cases/godee/TechnologyStack.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['ListTechnologiesItem']

describe('TechnologyStack component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologyStack, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TechnologyStack, {
      mocks,
      stubs,
    })

    expect(screen.getByText(/Technology stack/i).className).toContain('case_title_h3')
  })
})
