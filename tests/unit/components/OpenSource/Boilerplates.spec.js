import { render } from '@testing-library/vue'
import Boilerplates from '@/components/OpenSource/Boilerplates'

const stubs = ['TitleDesc', 'BoilerplatesList']

describe('Boilerplates component', () => {
  it('should render correctly', () => {
    const { container } = render(Boilerplates, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
