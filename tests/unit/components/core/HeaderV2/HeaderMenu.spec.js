import { render, screen } from '@testing-library/vue'
import HeaderMenu from '@/components/core/HeaderV2/HeaderMenu'

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

describe('HeaderMenu component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderMenu, {
      stubs, props,
    })

    expect(screen.queryByTestId('menu-item-internal-link')).not.toBeNull()
    expect(screen.queryByTestId('menu-item-external-link')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly only external link', () => {
    render(HeaderMenu, {
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
    render(HeaderMenu, {
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
    render(HeaderMenu, { stubs })
    expect(screen.queryByTestId('menu-item-internal-link')).toBeNull()
    expect(screen.queryByTestId('menu-item-external-link')).toBeNull()
  })
})
