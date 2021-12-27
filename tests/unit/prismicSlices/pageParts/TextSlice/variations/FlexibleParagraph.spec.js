import { render, screen } from '@testing-library/vue'

import FlexibleParagraph from '@/prismicSlices/pageParts/TextSlice/variations/FlexibleParagraph'

const props = {
  text: 'test',
  maxWidth: '500px',
  tag: 'h1',
  position: 'center',
  size: '--16-px',
  fontWeight: '700',
  textAlign: 'left',
}

describe('FlexibleParagraph with data', () => {
  it('should render correctly with data', () => {
    const { container } = render(FlexibleParagraph, {
      props,
    })
    expect(screen.getByText('test')).not.toBeNull()
    expect(screen.getByText('test').getAttribute('style')).toEqual('--font-weight: 700; --text-align: left; --max-width: 500px; font-family: Poppins;')
    expect(container).toMatchSnapshot()
  })
})
