import { render } from '@testing-library/vue'
import HeaderSection from '@/components/core/HeaderV2/HeaderSection'

const stubs = ['HeaderMenu', 'HeaderPost']

const props = {

  name: 'test',

  title: 'test',
  menus: [{ name: 'test menu', routes: [] }],
  post: {},
  postAuthor: {},
}

const mocks = {
  $route: {
    path: '/development-process',
    handler: jest.fn(),
  },
}

jest.mock('~/helpers/generatorUid')

describe('HeaderSection component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderSection, {
      stubs,
      props,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
