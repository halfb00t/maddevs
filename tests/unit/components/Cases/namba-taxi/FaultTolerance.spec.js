import { render } from '@testing-library/vue'
import FaultTolerance from '@/components/Cases/nambataxi/FaultTolerance'
import '../../../__mocks__/intersectionObserverMock'

const stubs = ['LottieMad', 'Picture', 'StatisticCard', 'LottieMad', 'StatisticCard']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}
const directives = {
  'lazy-load': () => {},
}

describe('FaultTolerance component', () => {
  const arrayWithElements = []

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const containerToRender = document.createElement('div')
    containerToRender.setAttribute('id', `statistics-application-speed-${i}`)
    arrayWithElements.push(containerToRender)
  }

  Object.defineProperty(document, 'getElementById', {
    // eslint-disable-next-line array-callback-return
    value: id => arrayWithElements.find(item => item.id === id),
  })

  Object.defineProperty(global.window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: class IntersectionObserver {
      constructor(callback) {
        this.entries = []
        this.callback = callback
      }

      observe(target) {
        this.entries.push({ isIntersecting: true, target })
        this.callback(this.entries, this)
      }

      // eslint-disable-next-line class-methods-use-this
      unobserve() {
        return jest.fn()
      }
    },
  })

  it('should render correctly', () => {
    const { container } = render(FaultTolerance, {
      stubs,
      mocks,
      directives,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with return undefined from initIntersectionObserver', () => {
    const { container } = render(FaultTolerance, {
      stubs,
      mocks,
      directives,
      data: () => ({
        elementIdsForCountUp: [
          'statistics-application-speed-0',
          'statistics-application-speed-1',
          'statistics-application-speed-2',
          'statistics-application-speed-3',
        ],
      }),
    })

    expect(container).toMatchSnapshot()
  })
})
