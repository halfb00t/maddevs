import { render, screen } from '@testing-library/vue'
import CustomerLogoSlice from '@/prismicSlices/pageParts/CustomerLogoSlice'

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

describe('Custom logo slice', () => {
  it('should render correctly with data', () => {
    const { container } = render(CustomerLogoSlice, {
      data,
      props: getProps(apiData),
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
    })

    expect(screen.getByTestId('customer-logo-slice-container').getAttribute('data-aos')).toBe(apiData.animation)
  })

  it('should the data-aos to be null', () => {
    render(CustomerLogoSlice, {
      data,
      props: getProps({}),
    })
    expect(screen.getByTestId('customer-logo-slice-container').getAttribute('data-aos')).toBeNull()
  })
})
