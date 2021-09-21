import { render } from '@testing-library/vue'
import BoilerplatesList from '@/components/OpenSource/shared/BoilerplatesList'

const stubs = ['BoilerplatesListItem']

describe('BoilerplatesList component', () => {
  it('should render correctly', () => {
    const { container } = render(BoilerplatesList, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
