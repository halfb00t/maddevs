import { render, screen } from '@testing-library/vue'
import Swift from '@/components/Cases/nambafood/Swift.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: true,
}

const data = () => ({
  loaded: true,
})

const stubs = ['UIImage', 'Picture']

describe('Swift component', () => {
  it('should render correctly', () => {
    const { container } = render(Swift, {
      data,
      mocks,
      props,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Swift, {
      data,
      mocks,
      props,
      stubs,
    })

    expect(screen.getByText(/Swift admin panel — intelligent delivery control/i).className).toContain('case_title_h2')
  })

  it('should render images', () => {
    render(Swift, {
      data,
      mocks,
      props,
      stubs,
    })

    expect(screen.getByTestId('test-case_ios-map-video-image').src).toBe(global.location.href + mocks.$getMediaFromS3())
  })
})
