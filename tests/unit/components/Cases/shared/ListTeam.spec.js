import { render } from '@testing-library/vue'
import ListTeam from '@/components/Cases/shared/ListTeam'

const slots = {
  default: '<li>List item</li>',
}

describe('ListTeam component', () => {
  it('should render correctly', () => {
    const { container } = render(ListTeam, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(ListTeam, {
      slots,
    })

    expect(html()).toContain(slots.default)
  })
})
