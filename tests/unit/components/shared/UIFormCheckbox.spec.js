import { render, fireEvent, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import UIFormCheckbox from '@/components/shared/UIFormCheckbox'

describe('UIFormCheckboxes', () => {
  const props = {
    id: 'custom-id',
  }

  it('should render correctly with slot', () => {
    const { container } = render(UIFormCheckbox, { props })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with id prop', () => {
    const { container } = render(UIFormCheckbox, {
      props,
    })

    const result = screen.getByText('I agree to receive the monthly newsletter from Mad Devs')
    expect(result).not.toBeNull()
    expect(result.outerHTML).toContain(`for="sent_ebook_news-${props.id}`)
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click marketing-communications checkbox', async () => {
    const { getByTestId, emitted } = render(UIFormCheckbox, { props })
    const checkbox = getByTestId('user-agreement-checkbox-input')
    expect(checkbox.checked).toEqual(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
    expect(emitted().change).toHaveLength(2)
  })

  it('should correctly reset data after calling reset method', () => {
    const wrapper = mount(UIFormCheckbox, { props })
    wrapper.vm.$data.isAgree = true

    wrapper.vm.reset()

    expect(wrapper.vm.$data.isAgree).toBeTruthy()
  })
})
