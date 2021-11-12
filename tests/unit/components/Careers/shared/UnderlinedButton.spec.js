import { fireEvent, render, screen } from '@testing-library/vue'
import UnderlinedButton from '@/components/Careers/shared/UnderlinedButton'

describe('UnderlinedButton component', () => {
  it('should render correctly', () => {
    const { container } = render(UnderlinedButton)
    expect(container).toMatchSnapshot()
  })
  it('should correctly handle click', async () => {
    const { emitted } = render(UnderlinedButton, {
      slots: {
        default: 'Button',
      },
    })

    const btn = screen.getByText('Button')
    await fireEvent.click(btn)
    expect(emitted().click).toHaveLength(1)
  })
})
