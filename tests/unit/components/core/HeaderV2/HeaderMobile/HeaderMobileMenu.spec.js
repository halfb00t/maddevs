import { render, screen } from '@testing-library/vue'
import HeaderMobileMenu from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileMenu'

const stubs = ['NuxtLink']

const props = {
  menuName: 'test',
  menuRoutes: [{
    label: 'internal link',
    link: {
      link_type: 'Web',
      url: 'https://maddevs.io/',
    },
  }, {
    label: 'external link',
    link: {
      link_type: 'Web',
      url: 'http://twitter.com',
    },
  }],
}

describe('HeaderMobileMenu component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderMobileMenu, {
      stubs,
      props,
    })

    expect(screen.queryByTestId('menu-item-internal-link')).not.toBeNull()
    expect(screen.queryByTestId('menu-item-external-link')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly only external link', () => {
    render(HeaderMobileMenu, {
      stubs,
      props: {
        ...props,
        menuRoutes: [{
          label: 'external link',
          link: {
            link_type: 'Web',
            url: 'http://twitter.com',
          },
        }],
      },

    })

    expect(screen.queryByTestId('menu-item-internal-link')).toBeNull()
    expect(screen.queryByTestId('menu-item-external-link')).not.toBeNull()
  })

  it('should render correctly only internal link', () => {
    render(HeaderMobileMenu, {
      stubs,
      props: {
        ...props,
        menuRoutes: [{
          label: 'internal link',
          link: {
            link_type: 'Web',
            url: 'https://maddevs.io/',
          },
        }],
      },
    })
    expect(screen.queryByTestId('menu-item-internal-link')).not.toBeNull()
    expect(screen.queryByTestId('menu-item-external-link')).toBeNull()
  })

  it('should render correctly render without props', () => {
    render(HeaderMobileMenu, { stubs })
    expect(screen.queryByTestId('menu-item-internal-link')).toBeNull()
    expect(screen.queryByTestId('menu-item-external-link')).toBeNull()
  })
})
