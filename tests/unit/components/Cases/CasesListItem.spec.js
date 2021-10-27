import { render } from '@testing-library/vue'
import CasesListItem from '@/components/Cases/CasesListItem.vue'
import '../../__mocks__/intersectionObserverMock'

const stubs = ['NuxtLink']

const mocks = {
  $getMediaFromS3: image => image,
}

const data = () => ({
  isMobile: false,
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

    expect(container).toMatchSnapshot()
  })
})
