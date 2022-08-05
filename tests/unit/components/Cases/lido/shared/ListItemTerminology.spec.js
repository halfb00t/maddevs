import { render } from '@testing-library/vue'
import ListItemTerminology from '../../../../../../client/components/Cases/lido/shared/ListItemTerminology'

describe('Lido ListItemTerminology component', () => {
  it('should correctly render component', () => {
    const { container } = render(ListItemTerminology)

    expect(container).toMatchSnapshot()
  })
})
