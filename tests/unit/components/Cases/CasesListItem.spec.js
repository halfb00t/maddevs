import { render, screen } from '@testing-library/vue'
import CasesListItem from '@/components/Cases/CasesListItem.vue'
import '../../__mocks__/intersectionObserverMock'

const stubs = ['NuxtLink']

const mocks = {
  $getMediaFromS3: image => image,
}

const data = () => ({
  loaded: true,
  isIphone: false,
})

const directives = {
  'lazy-load': () => {},
}

const props = {
  videoFileName: 'test',
  title: 'test',
  subtitle: 'Test test',
  desc: 'test test',
  posterLink: '/test',
}

describe('CasesListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(CasesListItem, {
      stubs,
      mocks,
      data,
      directives,
      props,
    })
    expect(screen.queryAllByTestId('test-video')).toHaveLength(1)
    expect(screen.queryAllByTestId('test-fallback-image')).toHaveLength(0)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly on Iphone', () => {
    render(CasesListItem, {
      stubs,
      mocks,
      data: () => ({
        loaded: true,
        isIphone: true,
      }),
      directives,
      props,
    })

    expect(screen.queryAllByTestId('test-video')).toHaveLength(0)
    expect(screen.queryAllByTestId('test-fallback-image')).toHaveLength(1)
  })
})
