import { render } from '@testing-library/vue'
import TextParagraphUppercase from '@/components/Cases/shared/TextParagraphUppercase'

const slots = {
  default: 'test',
}

describe('TextParagraphUppercase component', () => {
  it('should render correctly', () => {
    const { container } = render(TextParagraphUppercase, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(TextParagraphUppercase, {
      slots,
    })

    expect(html()).toContain(slots.default)
  })
})
