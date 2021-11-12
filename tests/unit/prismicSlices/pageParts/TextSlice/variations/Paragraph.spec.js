import { render, screen } from '@testing-library/vue'

import Paragraph from '@/prismicSlices/pageParts/TextSlice/variations/Paragraph'

const props = {
  text: 'test',
  position: 'center',
  size: '--16-px',
}

describe('Paragraph with data', () => {
  it('should render correctly with data', () => {
    const { container } = render(Paragraph, {
      props,
    })
    expect(screen.getByText('test')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
