import { render } from '@testing-library/vue'
import Boilerplates from '@/components/OpenSource/Boilerplates'

const stubs = ['TitleDesc', 'BoilerplatesList']

jest.mock('~/helpers/generatorUid')

describe('Boilerplates component', () => {
  it('should render correctly', () => {
    const { container } = render(Boilerplates, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
