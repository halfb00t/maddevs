import { render, screen } from '@testing-library/vue'
import SupportedGadgets from '@/components/Cases/yourcast/SupportedGadgets'

const stubs = ['Picture']

describe('SupportedGadgets component', () => {
  it('should render correctly', () => {
    const { container } = render(SupportedGadgets, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(SupportedGadgets, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      stubs,
    })
    expect(screen.getByText(/Supported gadgets/i).className).toContain('case_title_h2')
  })
})
