import { render, screen } from '@testing-library/vue'
import CustomerUniversityTitle from '@/components/Blog/shared/СustomerUniversityTitle'

const props = {
  title: 'Customer',
  subtitle: 'University',
}

describe('CustomerUniversityTitle component', () => {
  it('should render correctly with data', () => {
    const { container } = render(CustomerUniversityTitle, {
      props,
    })
    expect(screen.getByText(props.title)).not.toBeNull()
    expect(screen.getByText(props.subtitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(CustomerUniversityTitle, {
      props: {},
    })
    expect(container).toMatchSnapshot()
  })
})
