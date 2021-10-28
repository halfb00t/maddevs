import { render, screen } from '@testing-library/vue'

import SimpleText from '@/prismicSlices/pageParts/TextSlice/variations/SimpleText'

const props = {
  text: 'test',
}

describe('SimpleText with data', () => {
  it('should render correctly with data', () => {
    const { container } = render(SimpleText, {
      props,
    })
    expect(screen.getByText('test')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
