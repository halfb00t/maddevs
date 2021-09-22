import { render } from '@testing-library/vue'
import SoftwareDevelopmentIcons from '@/components/Services/SoftwareDevelopmentIcons'

describe('SoftwareDevelopmentIcons component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopmentIcons, {
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })
})
