import { render } from '@testing-library/vue'
import CustomerUniversityListItem from '@/components/Blog/shared/CustomerUniversityListItem'

const mocks = {
  $prismic: {
    asText: () => 'cluster name',
  },
}

describe('CustomerUniversityListItem component', () => {
  it('should render correctly with data', () => {
    const { container } = render(CustomerUniversityListItem, {
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
