import { render } from '@testing-library/vue'
import DataAndPasswords from '@/components/Cases/clutch/DataAndPasswords'
import '../../../__mocks__/intersectionObserverMock'

describe('DataAndPasswords component', () => {
  it('should render correctly', () => {
    const { container } = render(DataAndPasswords)

    expect(container).toMatchSnapshot()
  })
})
