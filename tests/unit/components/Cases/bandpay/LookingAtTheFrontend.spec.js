import { render, screen } from '@testing-library/vue'
import { createLocalVue, mount } from '@vue/test-utils'
import LookingAtTheFrontend from '@/components/Cases/bandpay/LookingAtTheFrontend'
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

describe('BandPay LookingAtTheFrontend component', () => {
  it('should render correctly', () => {
    const { container } = render(LookingAtTheFrontend, {
      mocks,
      directives,
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(LookingAtTheFrontend, {
      mocks,
      directives,
      localVue,
    })

    expect(screen.getByText(/Looking at the frontend/i).className).toBeTruthy()
    expect(screen.getByText(/We chose React.js to develop the frontend/i).className).toBeTruthy()
    expect(screen.getByText(/High performance/i).className).toBeTruthy()
    expect(screen.getByText(/React.js uses Virtual DOM/i).className).toBeTruthy()
    expect(screen.getByText(/Flexibility/i).className).toBeTruthy()
    expect(screen.getByText(/Due to the modular structure of the code/i).className).toBeTruthy()
    expect(screen.getByText(/Reusability/i).className).toBeTruthy()
    expect(screen.getByText(/React components are independent pieces/i).className).toBeTruthy()
    expect(screen.getByText(/Stability/i).className).toBeTruthy()
    expect(screen.getByText(/React uses downward data flow so the changes/i).className).toBeTruthy()
    expect(screen.getByText(/SEO-friendliness/i).className).toBeTruthy()
    expect(screen.getByText(/The React library supports all modern browsers/i).className).toBeTruthy()
    expect(screen.getByText(/We used Stripe.js and Stripe elements to integrate/i).className).toBeTruthy()
  })

  it('should render cards', () => {
    const wrapper = mount(LookingAtTheFrontend, {
      mocks,
      directives,
      localVue,
    })

    const cards = wrapper.findAll('.colored-card')
    expect(cards).toHaveLength(5)
  })

  describe('LookingAtTheFrontend images', () => {
    it('should render high performance image', () => {
      render(LookingAtTheFrontend, {
        mocks,
        directives,
        localVue,
      })

      const image = screen.getByAltText('High performance')
      expect(image.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      expect(image.getAttribute('width')).toBe('396')
      expect(image.getAttribute('height')).toBe('200')
    })

    it('should render flexibility image', () => {
      render(LookingAtTheFrontend, {
        mocks,
        directives,
        localVue,
      })

      const image = screen.getByAltText('Flexibility')
      expect(image.getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
      expect(image.getAttribute('width')).toBe('396')
      expect(image.getAttribute('height')).toBe('200')
    })
  })
})
