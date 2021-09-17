import { render } from '@testing-library/vue'
import WhyCityCam from '@/components/Cases/citycam/WhyCityCam'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['Picture']

describe('WhyCityCam component', () => {
  it('should render correctly', () => {
    const { container } = render(WhyCityCam, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
