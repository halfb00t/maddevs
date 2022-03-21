import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import ProjectDevelopment from '@/components/Cases/bandpay/ProjectDevelopment'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay ProjectDevelopment component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectDevelopment, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(ProjectDevelopment, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Project development workflow/i).className).toBeTruthy()
    expect(screen.getByText(/Transparency is the fundamental principle/i).className).toBeTruthy()
  })

  it('should render lottie', () => {
    const wrapper = mount(ProjectDevelopment, {
      mocks,
      directives,
    })

    expect(wrapper.find('.case_lottie').exists()).toBeTruthy()
  })
})
