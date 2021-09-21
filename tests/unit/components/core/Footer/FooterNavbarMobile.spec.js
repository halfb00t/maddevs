import { render } from '@testing-library/vue'
import FooterNavbarMobile from '@/components/core/Footer/FooterNavbarMobile'

const stubs = ['NuxtLink']

describe('FooterNavbarMobile component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterNavbarMobile, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with current year', () => {
    const { html } = render(FooterNavbarMobile, {
      stubs,
    })

    expect(html()).toContain(` © Mad Devs - ${new Date().getFullYear()}`)
  })
})
