import { render, screen } from '@testing-library/vue'
import СustomerUniversityTextCard from '@/components/Blog/shared/CustomerUniversityTextCard'

const props = {
  title: 'Сustomer University title',
  description: 'Сustomer University description',
}

describe('СustomerUniversityTextCard component', () => {
  it('should render correctly with data', () => {
    const { container } = render(СustomerUniversityTextCard, {
      props,
    })
    expect(screen.getByText(props.title)).not.toBeNull()
    expect(screen.getByText(props.description)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(СustomerUniversityTextCard, {
      props: {},
    })
    expect(container).toMatchSnapshot()
  })
})
