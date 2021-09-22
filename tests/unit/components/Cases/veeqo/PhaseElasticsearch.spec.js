import { render, screen } from '@testing-library/vue'
import PhaseElasticsearch from '@/components/Cases/veeqo/PhaseElasticsearch'

describe('PhaseElasticsearch component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseElasticsearch)

    expect(screen.getByText('Phase 3: Elasticsearch')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
