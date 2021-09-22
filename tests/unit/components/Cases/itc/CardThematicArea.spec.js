import { render } from '@testing-library/vue'
import CardThematicArea from '@/components/Cases/itc/CardThematicArea'

const stubs = ['Card', 'Picture']

describe('CardThematicArea component', () => {
  it('should render correctly', () => {
    const { container } = render(CardThematicArea, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
