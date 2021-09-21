import { render, screen } from '@testing-library/vue'
import IntellegentManagementPanel from '@/components/Cases/godee/IntellegentManagementPanel.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: false,
}

const stubs = ['Picture']

const directives = {
  'lazy-load': () => {},
}

describe('IntellegentManagementPanel component', () => {
  it('should render correctly', () => {
    const { container } = render(IntellegentManagementPanel, {
      props,
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(IntellegentManagementPanel, {
      props,
      mocks,
      stubs,
      directives,
    })

    expect(screen.getByText(/Intelligent management panel/i).className).toContain('case_title_h2')
  })

  it('should render isIphone property', () => {
    props.isIphone = true
    render(IntellegentManagementPanel, {
      props,
      mocks,
      stubs,
      directives,
    })

    const element = screen.getByTestId('test-video-flex-wrapper')

    expect(element).toBeTruthy()
  })
})
