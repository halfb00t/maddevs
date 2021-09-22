import { render, screen } from '@testing-library/vue'
import CaseHeader from '@/components/Cases/shared/CaseHeader.vue'

const props = {
  logo: {
    width: 100,
    height: 100,
    pictureFolder: 'godee',
    file: 'godee-logo',
    alt: 'some-logo-alt',
  },
  width: 100,
  height: 100,
  pictureFolder: '',
  file: 'some-filename',
  alt: 'some-alt',
  videoName: 'video-name',
}

const data = () => ({
  loaded: true,
})

const mocks = {
  $getMediaFromS3: img => img,
}

const directives = {
  'lazy-load': () => {},
}

describe('CaseHeader component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    const { container } = render(CaseHeader, {
      data,
      props,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
    expect(screen.queryAllByTestId('test-case_main-video')).toHaveLength(1)
  })

  it('should render with navigation type iphone', async () => {
    await Object.defineProperty(global.navigator, 'userAgent', { value: 'iPhone' })

    await render(CaseHeader, {
      data,
      props,
      mocks,
      directives,
    })

    expect(screen.queryAllByTestId('test-case_main-video')).toHaveLength(0)
  })
})
