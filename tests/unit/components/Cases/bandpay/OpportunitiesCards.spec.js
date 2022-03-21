import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import OpportunitiesCards from '@/components/Cases/bandpay/OpportunitiesCards'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

const imagesAlt = [
  'Promote business across the web and via SMS',
  'Receive payments automatically',
  'Deposit funds to start projects',
]

describe('BandPay OpportunitiesCards component', () => {
  it('should render correctly', () => {
    const { container } = render(OpportunitiesCards, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(OpportunitiesCards, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Opportunities with BandPay/i).className).toBeTruthy()
    expect(screen.getByText(/Promote business across the web and via SMS/i).className).toBeTruthy()
    expect(screen.getByText(/Receive payments automatically/i).className).toBeTruthy()
    expect(screen.getByText(/Set the timeline, amount, and deliverables for each project milestone/i).className).toBeTruthy()
    expect(screen.getByText(/Deposit funds to start projects/i).className).toBeTruthy()
    expect(screen.getByText(/Create agreements/i).className).toBeTruthy()
    expect(screen.getByText(/Automate invoicing/i).className).toBeTruthy()
  })

  it('should render colored cards', () => {
    const wrapper = mount(OpportunitiesCards, {
      mocks,
      directives,
    })

    const cards = wrapper.findAll('.colored-card')
    expect(cards).toHaveLength(6)
  })

  it('should render images in colored cards', () => {
    render(OpportunitiesCards, {
      mocks,
      directives,
    })

    const images = screen.getAllByTestId('test-picture-img')
    expect(images).toHaveLength(3)
    images.forEach((item, i) => {
      expect(item.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      expect(item.getAttribute('alt')).toBe(imagesAlt[i])
    })
  })
})
