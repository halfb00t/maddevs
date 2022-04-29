import { fireEvent, render, screen } from '@testing-library/vue'
import TestComp from './TestComp'

// const directives = {
//   'lazy-load': () => {},
// }

describe('TestComp', () => {
  it('should render correctly', () => {
    const { container } = render(TestComp)
    expect(container).toMatchSnapshot()
  })
})
