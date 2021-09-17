import { render, screen } from '@testing-library/vue'
import Applications from '@/components/Cases/nambafood/Applications.vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: true,
}

const data = () => ({
  loaded: true,
})

const directives = {
  'lazy-load': () => {},
}

describe('Applications component', () => {
  it('should render correctly', () => {
    const { container } = render(Applications, {
      directives,
      data,
      mocks,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render images', () => {
    render(Applications, {
      mocks,
      props,
      directives,
      data,
    })

    expect(screen.getByTestId('test-case_phone-ios-image').getAttribute('data-src')).toBe(mocks.$getMediaFromS3())
  })
})
