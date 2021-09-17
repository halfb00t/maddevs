import { render, screen } from '@testing-library/vue'
import ListNumbered from '@/components/Cases/shared/ListNumbered'

const slots = {
  default: 'Main Content',
}

describe('ListNumbered component', () => {
  it('should render correctly', () => {
    const { container } = render(ListNumbered, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
