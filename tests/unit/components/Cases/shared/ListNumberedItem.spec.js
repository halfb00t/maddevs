import { render, screen } from '@testing-library/vue'
import ListNumberedItem from '@/components/Cases/shared/ListNumberedItem'

const slots = {
  bold: 'Main Bold',
  default: 'Main Content',
}

describe('ListNumberedItem component', () => {
  it('should render correctly', () => {
    const { container } = render(ListNumberedItem, {
      slots,
    })
    expect(screen.getAllByText(slots.bold)).toBeTruthy()
    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
