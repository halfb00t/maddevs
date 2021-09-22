import { render, screen } from '@testing-library/vue'
import Hardware from '@/components/Cases/sjmc/Hardware.vue'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: image => image,
}

const stubs = ['Picture', 'HardwareVideo']

const directives = {
  'lazy-load': () => {},
}

describe('Hardware component', () => {
  it('should render correctly', () => {
    const { container } = render(Hardware, {
      mocks,
      stubs,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Hardware, {
      mocks,
      stubs,
      directives,
    })

    expect(screen.getByText(/SJMC Hardware/i).className).toBeTruthy()
  })
})
