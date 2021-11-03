import { render, screen } from '@testing-library/vue'
import UICustomersList from '@/components/shared/UICustomersList'

const props = {
  customers: ['topica'],
  light: true,
  iconBackground: 'rgb(255, 255, 255)',
}

const directives = {
  'lazy-load': () => {
  },
}

describe('UICustomersList', () => {
  it('should render correctly', () => {
    const { container } = render(UICustomersList, {
      props,
      directives,
    })
    const iconWrapper = screen.getByTestId('icon-wrapper')

    expect(iconWrapper.style.backgroundColor)
      .toBe('rgb(255, 255, 255)')
    expect(container)
      .toMatchSnapshot()
  })

  it('backgroundColor should be transparent', () => {
    const { container } = render(UICustomersList, {
      props: {
        customers: ['topica'],
      },
      directives,
    })
    const iconWrapper = screen.getByTestId('icon-wrapper')
    expect(iconWrapper.style.backgroundColor).toBe('transparent')
    expect(container).toMatchSnapshot()
  })

  it('should correctly render without data', () => {
    const { container } = render(UICustomersList, {
      directives,
    })
    expect(container).toMatchSnapshot()
  })
})
