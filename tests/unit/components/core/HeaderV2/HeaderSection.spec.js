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

describe('HeaderSection component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderSection, { stubs, props })
    expect(container).toMatchSnapshot()
  })
})
