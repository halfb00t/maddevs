import { render, fireEvent, screen } from '@testing-library/vue'
import UILinkButton from '@/components/shared/UILinkButton'

describe('UILinkButton component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(UILinkButton, {
      slots: {
        default: 'Link button',
      },
    })

    expect(screen.getByText('Link button')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without slot', () => {
    const { container } = render(UILinkButton)

    expect(screen.queryByText('Link button')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click', async () => {
    const { emitted } = render(UILinkButton, {
      slots: {
        default: 'Button',
      },
    })

    const btn = screen.getByText('Button')
    await fireEvent.click(btn)
    expect(emitted().click).toHaveLength(1)
  })
})
