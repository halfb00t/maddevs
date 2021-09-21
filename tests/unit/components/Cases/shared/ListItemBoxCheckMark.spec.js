import { render, screen } from '@testing-library/vue'
import ListItemBoxCheckMark from '@/components/Cases/shared/ListItemBoxCheckMark'

const slots = {
  default: 'Main Content',
}

describe('ListItemBoxCheckMark component', () => {
  it('should render correctly', () => {
    const { container } = render(ListItemBoxCheckMark, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
