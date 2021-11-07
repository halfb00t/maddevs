import { render, screen } from '@testing-library/vue'
import RadioButtons from '@/components/core/forms/RadioButtons'

describe('RadioButtons', () => {
  const props = {
    id: 'custom-id',
    showLabel: false,
    radioInputLabels: ['Label One', 'Label Two', 'Label Two'],
    name: 'test',

  }

  it('should render correctly without prop', () => {
    const { container } = render(RadioButtons)
    expect(screen.getAllByTestId('test-radio-buttons')).toHaveLength(2)
    expect(screen.getByTestId('test-radio-label')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with prop', () => {
    const { container } = render(RadioButtons, {
      props,
    })

    const checkboxes = screen.getAllByTestId('test-radio-buttons')

    expect(checkboxes).toHaveLength(3)
    expect(screen.queryByTestId('test-radio-label')).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
