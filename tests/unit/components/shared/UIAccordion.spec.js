import { fireEvent, render, screen } from '@testing-library/vue'
import UIAccordion from '@/components/shared/UIAccordion'

const props = {
  sectionId: 1,
  accordionId: 'Test accordion',
  question: 'Test accordion',
  answer: 'Test answer',
  isPrismic: true,
}

describe('UIAccordion component', () => {
  it('should correctly render component', () => {
    const { container } = render(UIAccordion, {
      propsData: props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly click open answer', async () => {
    render(UIAccordion, {
      propsData: props,
    })

    const button = screen.getByTestId('accordionBtn')
    await fireEvent.click(button)
    expect(button.classList.contains('accordion__question--active')).toBeTruthy()
  })
})
