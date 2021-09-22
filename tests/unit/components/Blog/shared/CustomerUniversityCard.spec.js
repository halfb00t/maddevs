import { render } from '@testing-library/vue'
import СustomerUniversityCard from '@/components/Blog/shared/CustomerUniversityCard'

const mocks = {
  $prismic: {
    asText: () => 'Сustomer University card',
  },
}

describe('СustomerUniversityCard component', () => {
  it('should render correctly with data', () => {
    const { container } = render(СustomerUniversityCard, {
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
