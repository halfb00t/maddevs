import { render, screen } from '@testing-library/vue'
import UICustomersList from '@/components/shared/UICustomersList'

const props = {
  customers: ['topica'],
  light: true,
  iconBackground: 'rgb(255, 255, 255)',
}

const directives = {
  'lazy-load': () => {},
}

describe('UICustomersList', () => {
  it('should render correctly', () => {
    const { container } = render(UICustomersList, {
      props,
      directives,
    })
    const iconWrapper = screen.getByTestId('icon-wrapper')

    expect(iconWrapper.style.backgroundColor).toBe(props.iconBackground)
    expect(container).toMatchSnapshot()
  })
})
