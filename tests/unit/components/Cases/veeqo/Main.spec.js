import { render } from '@testing-library/vue'
import Main from '@/components/Cases/veeqo/Main'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = [
  'PhaseCuttingTheCosts',
  'HighLevelOverview',
  'ContinuousIntegrationResult',
  'ContinuousIntegrationResult',
  'PhasInfrastructureAsCodeResult',
  'InventoryChangeLog',
  'PhaseElasticsearchResult',
  'TextQuote',
  'CardTechSolution',
  'Picture',
  'PhaseFixingDatabaseOutages',
  'ListTechnologiesItem',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
