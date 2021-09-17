import { render, screen } from '@testing-library/vue'
import CustomerRatesSlice from '@/prismicSlices/pageParts/CustomerRatesSlice'

const apiData = {
  animation: 'zoom-in',
  items: [
    {
      title: 'CustomerRates title one',
      subtitle: 'CustomerRatesSlice subtitle one',
    },
    {
      title: 'CustomerRates title two',
      subtitle: 'CustomerRatesSlice subtitle two',
    },
    {
      title: 'CustomerRates title three',
      subtitle: 'CustomerRatesSlice subtitle three',
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      animation: params?.animation,
    },
    items: params?.items,
  },
})

describe('CustomerRates slice', () => {
  it('should render correctly', () => {
    const { container } = render(CustomerRatesSlice, {
      propsData: getProps(apiData),
    })
    expect(screen.getByTestId('container').getAttribute('data-aos')).toBe(apiData.animation)
    expect(screen.getAllByTestId('title')).toHaveLength(apiData.items.length)
    expect(screen.getAllByTestId('subtitle')).toHaveLength(apiData.items.length)
    expect(container)
      .toMatchSnapshot()
  })
})
