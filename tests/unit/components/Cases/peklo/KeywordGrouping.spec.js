import { render } from '@testing-library/vue'
import KeywordGrouping from '@/components/Cases/peklo/KeywordGrouping'

const stubs = ['Picture', 'TextQuote']

describe('KeywordGrouping component', () => {
  it('should render correctly', () => {
    const { container } = render(KeywordGrouping, {
      stubs,
      mocks: {
        $getMediaFromS3: () => 's3 image url',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
