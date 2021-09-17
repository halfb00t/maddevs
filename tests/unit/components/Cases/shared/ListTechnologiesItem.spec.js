import { render } from '@testing-library/vue'
import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'

describe('ListTechnologiesItem components', () => {
  it('should render correctly', () => {
    const { container } = render(ListTechnologiesItem)

    expect(container).toMatchSnapshot()
  })
})
