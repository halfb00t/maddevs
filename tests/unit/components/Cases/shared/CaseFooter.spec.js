import { render } from '@testing-library/vue'
import Footer from '@/components/Cases/shared/CaseFooter'

const stubs = ['NuxtLink']

describe('CaseFooter component', () => {
  it('should render correctly', () => {
    const { container } = render(Footer, {
      stubs,
      slots: {
        default: 'Main Content',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should have correct data in slot', () => {
    const { html } = render(Footer, {
      stubs,
      slots: {
        default: 'Main Content',
      },
    })
    expect(html()).toContain('Main Content')
  })
})
