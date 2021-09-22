import { render, screen } from '@testing-library/vue'
import FooterContacts from '@/components/core/Footer/FooterContacts'

const directives = {
  'lazy-load': () => {},
}

const stubs = ['FooterSocialNetworks']

describe('FooterContacts component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterContacts, {
      directives,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(FooterContacts, {
      directives,
      stubs,
    })

    expect(screen.getByText(/Text us:/i)).toBeTruthy()
  })
})
