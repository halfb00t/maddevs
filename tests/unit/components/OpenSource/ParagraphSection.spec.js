import { render } from '@testing-library/vue'
import ParagraphSection from '@/components/OpenSource/ParagraphSection'

describe('ParagraphSection component', () => {
  it('should render correctly', () => {
    const { container } = render(ParagraphSection)

    expect(container).toMatchSnapshot()
  })
})
