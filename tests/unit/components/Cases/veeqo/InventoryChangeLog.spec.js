import { render } from '@testing-library/vue'
import InventoryChangeLog from '@/components/Cases/veeqo/InventoryChangeLog'

const stubs = ['Picture']

describe('InventoryChangeLog component', () => {
  it('should render correctly', () => {
    const { container } = render(InventoryChangeLog, {
      directives: {
        prlx: () => {},
      },
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
