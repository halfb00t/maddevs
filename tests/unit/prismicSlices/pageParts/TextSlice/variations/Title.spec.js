import { render, screen } from '@testing-library/vue'

import Title from '@/prismicSlices/pageParts/TextSlice/variations/Title'

const props = {
  title: 'test',
  maxWidth: '500px',
  tag: 'h1',
  position: 'center',
  size: '--16-px',
}

describe('Title with data', () => {
  it('should render correctly with data', () => {
    const { container } = render(Title, {
      props,
    })
    expect(screen.getByText('test')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
