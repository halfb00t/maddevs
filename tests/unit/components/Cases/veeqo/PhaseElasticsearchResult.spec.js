import { render, screen } from '@testing-library/vue'
import PhaseElasticsearchResult from '@/components/Cases/veeqo/PhaseElasticsearchResult'

describe('PhaseElasticsearchResult component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseElasticsearchResult, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives: {
        prlx: () => {},
      },
      stubs: ['CardResult'],
    })

    expect(screen.getByText('Result')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
