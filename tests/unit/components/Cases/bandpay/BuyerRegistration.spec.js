import { render, screen } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import BuyerRegistration from '@/components/Cases/bandpay/BuyerRegistration'
import '../../../__mocks__/intersectionObserverMock'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const directives = {
  'lazy-load': () => {},
}

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('BandPay BuyerRegistration component', () => {
  it('should render correctly', () => {
    const { container } = render(BuyerRegistration, {
      mocks,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(BuyerRegistration, {
      mocks,
      directives,
      localVue,
    })

    expect(screen.getByText(/Buyer registration/i).className).toBeTruthy()
  })

  it('should render paragraphs', () => {
    const wrapper = mount(BuyerRegistration, {
      mocks,
      directives,
      localVue,
    })

    const paragraphs = wrapper.findAll('.case_paragraph')
    expect(paragraphs).toHaveLength(3)
  })

  it('should render image', () => {
    render(BuyerRegistration, {
      mocks,
      directives,
      localVue,
    })

    expect(screen.getByTestId('test-picture-img').getAttribute('data-src'))
      .toBe(mocks.$getMediaFromS3())
    expect(screen.getByTestId('test-picture-img').getAttribute('width')).toBe('1028')
    expect(screen.getByTestId('test-picture-img').getAttribute('height')).toBe('612')
  })
})
