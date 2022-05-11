import { render, screen } from '@testing-library/vue'

import HeaderNavigation from '@/components/core/HeaderV2/HeaderNavigation'

const stubs = ['HeaderSection']

jest.mock('~/helpers/generatorUid')

const store = {
  getters: {
    headerContent: () => (
      {
        name: 'text',
        link: 'https://maddevs.io/',
      }),
  },
}

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

describe('HeaderNavigation component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderNavigation, {
      stubs, props, store,
    })

    expect(screen.getAllByText('Company')).not.toBeNull()
    expect(screen.getAllByText('Services')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly change class if avtive', () => {
    render(HeaderNavigation, {
      stubs, props: { ...props, activeNavigation: 'services' }, store,
    })

    expect(screen.getAllByTestId('navigation__item')[1].className).toBe('header-navigation__item header-navigation__item-services header-navigation__item--is-hover')
    expect(screen.getAllByText('Company')).not.toBeNull()
    expect(screen.getAllByText('Services')).not.toBeNull()
  })
})
