import { render } from '@testing-library/vue'
import CasesList from '@/components/Cases/CasesList.vue'
import '../../__mocks__/intersectionObserverMock'

const stubs = ['CasesListItem', 'NuxtLink', 'LazyHydrate']

const props = {
  limit: 3,
}

describe('CasesList component', () => {
  it('should render correctly', () => {
    const { container } = render(CasesList, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render three cards', () => {
    const { getAllByTestId } = render(CasesList, {
      stubs,
      props,
    })

    expect(getAllByTestId('test-case-card')).toHaveLength(props.limit)
  })
})
