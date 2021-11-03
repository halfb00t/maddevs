import { render, screen } from '@testing-library/vue'
import HeaderLogo from '@/components/core/HeaderV2/HeaderLogo'

const props = {
  showText: true,
}

describe('HeaderLogo component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderLogo, {
      props,
    })

    expect(screen.queryByTestId('header-logo-text')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly logo text without prop', () => {
    render(HeaderLogo)
    expect(screen.queryByTestId('header-logo-text')).not.toBeNull()
  })

  it('should render correctly render logo with falsy showText prop', () => {
    render(HeaderLogo, {
      props: { showText: false },
    })
    expect(screen.queryByTestId('header-logo-text')).toBeNull()
  })
})
