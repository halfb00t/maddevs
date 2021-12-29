import { render } from '@testing-library/vue'
import СustomerUniversityCard from '@/components/Blog/shared/CustomerUniversityCard'

const stubs = ['NuxtLink']

const mocks = {
  $prismic: {
    asText: () => 'Сustomer University card',
  },
}

const directives = {
  'lazy-load': () => {},
}

describe('СustomerUniversityCard component', () => {
  it('should render correctly with data', () => {
    const { container } = render(СustomerUniversityCard, {
      mocks,
      directives,
      stubs,
    })
    expect(container).toMatchSnapshot()
  })
})
