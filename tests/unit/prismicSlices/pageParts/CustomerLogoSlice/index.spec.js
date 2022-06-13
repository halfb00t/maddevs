import { render, screen } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import CustomerLogoSlice from '@/prismicSlices/pageParts/CustomerLogoSlice'
// eslint-disable-next-line import/order
import lazyLoad from 'nuxt-lazy-load/lib/module'

const data = () => ({
  customers: [
    {
      logo: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'first customer logo',
      },
    },
    {
      logo: {
        url: 'https://maddevs.io/Open-Graph.png',
        alt: 'second customer logo',
      },
    },
  ],
})

const apiData = {
  background: 'black',
  colorTheme: 'white',
  animation: 'fade-up',
  title: 'Title',
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
  },
})

const localVue = createLocalVue()
localVue.directive('lazy-load', lazyLoad)
jest.mock('nuxt-lazy-load/lib/module')

describe('Custom logo slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(CustomerLogoSlice, {
      data,
      props: getProps(apiData),
      localVue,
    })
    expect(screen.getAllByTestId('customer-logo-slice-item')).toHaveLength(data().customers.length)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(CustomerLogoSlice, {
      data: () => ({
        customers: [],
      }),
      props: getProps({}),
      localVue,
    })
    expect(screen.queryByTestId('customer-logo-slice-item')).toBeNull()
    expect(container).toMatchSnapshot()
  })
})

describe('Custom logo slice data-aos animation attribute', () => {
  it(`should the data-aos to be '${apiData.animation}'`, () => {
    render(CustomerLogoSlice, {
      data,
      props: getProps(apiData),
      localVue,
    })

    expect(screen.getByTestId('customer-logo-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
  })

  it('should the data-aos to be null', () => {
    render(CustomerLogoSlice, {
      data,
      props: getProps({}),
      localVue,
    })
    expect(screen.getByTestId('customer-logo-slice-container').getAttribute('data-aos')).toBeNull()
  })
})
