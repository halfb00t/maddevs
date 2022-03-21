import { render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import IntegratingOnline from '@/components/Cases/bandpay/IntegratingOnline'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

const listItemsText = [
  'It is easy to use and customise',
  'It is quick and scalable',
  'It accepts all major credit and debit cards',
  'It detects and prevents fraudulent transactions',
]

describe('BandPay About component', () => {
  it('should render correctly', () => {
    const { container } = render(IntegratingOnline, {
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(IntegratingOnline, {
      mocks,
      directives,
    })

    expect(screen.getByText(/Integrating online payment processing/i).className).toBeTruthy()
  })

  it('should render stripe logo image', () => {
    render(IntegratingOnline, {
      mocks,
      directives,
    })

    const image = screen.getByAltText('Payment processor for businesses')
    expect(image.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
    expect(image.getAttribute('width')).toBe('298')
    expect(image.getAttribute('height')).toBe('124')
  })

  it('should render title in stripe block', () => {
    render(IntegratingOnline, {
      mocks,
      directives,
    })
    expect(screen.getByText(/Payment processor for businesses/i).className).toBeTruthy()
  })

  describe('IntegratingOnline list', () => {
    it('should render list items', () => {
      const wrapper = mount(IntegratingOnline, {
        mocks,
        directives,
      })

      const listItems = wrapper.findAll('.integrating-online__list-item')
      expect(listItems).toHaveLength(4)
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < listItems.length; i++) {
        expect(listItems.at(i).text()).toBe(listItemsText[i])
      }
    })

    it('should render icon in list items', () => {
      const wrapper = mount(IntegratingOnline, {
        mocks,
        directives,
      })

      const images = wrapper.findAll('.list-item__box-icon')
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < images.length; i++) {
        expect(images.at(i).element.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
        expect(images.at(i).element.getAttribute('width')).toBe('23.44')
        expect(images.at(i).element.getAttribute('height')).toBe('23.44')
      }
    })
  })
})
