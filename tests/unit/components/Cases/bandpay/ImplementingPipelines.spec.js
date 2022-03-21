import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import ImplementingPipelines from '@/components/Cases/bandpay/ImplementingPipelines'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

describe('BandPay ImplementingPipelines component', () => {
  it('should render correctly', () => {
    const { container } = render(ImplementingPipelines, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(ImplementingPipelines, {
      mocks,
      directives,
    })

    expect(screen.getByText(/to automate the delivery of the BandPay/i).className).toBeTruthy()
  })

  it('should render lottie', () => {
    const wrapper = mount(ImplementingPipelines, {
      mocks,
      directives,
    })

    const lottieDiv = wrapper.find('.case_lottie')
    expect(lottieDiv.exists()).toBeTruthy()
  })

  it('should render pipelines list', () => {
    const wrapper = mount(ImplementingPipelines, {
      mocks,
      directives,
    })

    const listItems = wrapper.findAll('.case_advantages-item')
    expect(listItems).toHaveLength(6)
  })
})
