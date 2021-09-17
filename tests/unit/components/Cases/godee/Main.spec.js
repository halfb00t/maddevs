import { render } from '@testing-library/vue'
import Main from '@/components/Cases/godee/Main.vue'
import '../../../__mocks__/intersectionObserverMock'

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

const mocks = {
  $getMediaFromS3: img => img,
}

const stubs = [
  'ClientOnly',
  'NuxtLink',
  'Footer',
  'DevelopmentGoals',
  'ParallaxImage',
  'CaseHeader',
  'Picture',
  'TextQuote',
  'IntellegentManagementPanel',
  'ListTechnologiesItem',
  'CardGoDeeFeature',
  'TripsMonitor',
  'RouteOptimisation',
]

const directives = {
  'lazy-load': () => {},
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
      stubs,
      container: document.body.appendChild(containerToRender),
      directives,
    })

    expect(container).toMatchSnapshot()
  })
})
