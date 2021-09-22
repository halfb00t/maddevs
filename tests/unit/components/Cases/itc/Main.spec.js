import { render } from '@testing-library/vue'
import Main from '@/components/Cases/itc/Main'

const stubs = ['About', 'ProjectMission', 'Challenges', 'SavingTime', 'CollectingDataForAnalysis', 'DevelopingTheInnovation', 'Technologies', 'Team', 'FuturePlans', 'Partnership']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
