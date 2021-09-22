import { render, fireEvent, screen } from '@testing-library/vue'
import UIOutlinedButton from '@/components/shared/UIOutlinedButton'

describe('UIOutlinedButton component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(UIOutlinedButton, {
      slots: {
        default: 'Outlined button',
      },
    })

    expect(screen.getByText('Outlined button')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without slot', () => {
    const { container } = render(UIOutlinedButton)

    expect(screen.queryByText('Outlined button')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click', async () => {
    const { emitted } = render(UIOutlinedButton, {
      slots: {
        default: 'Button',
      },
    })

    const btn = screen.getByText('Button')
    await fireEvent.click(btn)
    expect(emitted().click).toHaveLength(1)
  })
})
