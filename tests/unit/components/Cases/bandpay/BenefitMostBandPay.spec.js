import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import BenefitMostBandPay from '@/components/Cases/bandpay/BenefitMostBandPay'

describe('BandPay BenefitMostBandPay component', () => {
  it('should render correctly', () => {
    const { container } = render(BenefitMostBandPay)

    expect(container).toMatchSnapshot()
  })

  it('should render with title text', () => {
    render(BenefitMostBandPay)

    expect(screen.getByText(/Who can benefit most from BandPay?/i).className).toBeTruthy()
  })

  it('should render paragraphs', () => {
    const wrapper = mount(BenefitMostBandPay)

    const paragraphs = wrapper.findAll('.case_paragraph')
    expect(paragraphs).toHaveLength(4)
  })
})
