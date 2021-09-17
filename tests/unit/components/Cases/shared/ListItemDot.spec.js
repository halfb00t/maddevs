import { render, screen } from '@testing-library/vue'
import ListItemDot from '@/components/Cases/shared/ListItemDot'

const slots = {
  default: 'Main Content',
}

describe('ListItemDot component', () => {
  it('should render correctly', () => {
    const { container } = render(ListItemDot, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
