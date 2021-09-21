import { render } from '@testing-library/vue'
import DividerSlice from '@/components/slices/DividerSlice'

describe('DividerSlice component', () => {
  it('should render correctly', () => {
    const { container } = render(DividerSlice)

    expect(container).toMatchSnapshot()
  })
})
