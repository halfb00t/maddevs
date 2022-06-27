import { render } from '@testing-library/vue'
import HeaderMobileSection from '@/components/core/HeaderV2/HeaderMobile/HeaderMobileSection'

const stubs = ['HeaderMobileSection']

const props = {
  isActive: true,
  name: 'test',
  menus: [{ name: 'test menu', routes: [] }],
}

const mocks = {
  $route: {
    path: '/test',
    handler: jest.fn(),
  },
}

describe('HeaderMobileSection component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderMobileSection, {
      stubs,
      props,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
