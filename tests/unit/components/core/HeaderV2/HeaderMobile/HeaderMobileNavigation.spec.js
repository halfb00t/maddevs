import { render, screen } from '@testing-library/vue'
import HeaderMobileNavigation from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileNavigation'

const stubs = ['HeaderMobileSection']
const props = {
  navigation: [
    {
      name: 'company',
      label: 'Company',
    },
    {
      name: 'services',
      label: 'Services',
    },
  ],
}
const store = {
  getters: {
    headerContent: () => (
      {
        name: 'text',
        link: 'https://maddevs.io/',
      }),
  },
}

describe('HeaderMobileNavigation component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderMobileNavigation, {
      stubs, props, store,
    })

    expect(screen.getAllByText('Company')).not.toBeNull()
    expect(screen.getAllByText('Services')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly change class if avtive', () => {
    render(HeaderMobileNavigation, {
      stubs, props: { ...props, activeNavigation: 'services' }, store,
    })

    expect(screen.getAllByTestId('navigation__item')[1].className).toBe('header-mobile-navigation__item')
    expect(screen.getAllByText('Company')).not.toBeNull()
    expect(screen.getAllByText('Services')).not.toBeNull()
  })
})
