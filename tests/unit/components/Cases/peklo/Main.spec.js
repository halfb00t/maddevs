import { render } from '@testing-library/vue'
import Main from '@/components/Cases/peklo/Main'

const stubs = ['About',
  'BenefitsFromPekloTool',
  'HowPekloToolWorks',
  'KeywordGrouping',
  'ClusterisationAlgorithm',
  'PekloToolUnderTheHood',
  'Technologies',
  'Team',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
