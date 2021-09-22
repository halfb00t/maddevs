import { render } from '@testing-library/vue'
import PositionsGridItem from '@/components/Careers/shared/PositionsGridItem'
import PositionsGrid from '@/components/Careers/shared/PositionsGrid'

const stubs = ['router-link']

describe('PositionsGridItem component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionsGridItem, {
      stubs,
      parentComponent: PositionsGrid,
    })

    expect(container).toMatchSnapshot()
  })
})
