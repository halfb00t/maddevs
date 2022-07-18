import initializeLazyLoad from '@/helpers/lazyLoad'

const actions = {
  remove: jest.fn(),
  add: jest.fn(),
}

describe('lazyLoad helper', () => {
  const arrayWithElements = []

  for (let i = 0; i < 2; i += 1) {
    const containerToRender = {
      src: `img-${i}.jpg`,
      dataset: {
        src: `img-${i}.jpg`,
        srcset: `img-${i}.jpg`,
      },
      srcset: `img-${i}.jpg`,
      classList: actions,
    }
    if (i === 1) delete containerToRender.dataset.srcset
    arrayWithElements.push(containerToRender)
  }

  Object.defineProperty(document, 'querySelectorAll', {
    value: () => arrayWithElements,
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
        if (!target.dataset.srcset) this.entries.push({ isIntersecting: false, target })
        this.entries.push({ isIntersecting: true, target })
        this.callback(this.entries, this)
      }

      // eslint-disable-next-line class-methods-use-this
      unobserve() {
        return jest.fn()
      }
    },
  })
  it('should correctly work lazyLoad', () => {
    initializeLazyLoad()
    const removeMock = jest.spyOn(actions, 'remove').mockImplementation()
    const addMock = jest.spyOn(actions, 'add').mockImplementation()
    expect(removeMock).toHaveBeenCalledTimes(3)
    expect(addMock).toHaveBeenCalledTimes(3)
  })

  it('should correctly dont work without IntersectionObserver', () => {
    delete global.window.IntersectionObserver
    initializeLazyLoad()
    const removeMock = jest.spyOn(actions, 'remove').mockImplementation()
    const addMock = jest.spyOn(actions, 'add').mockImplementation()
    expect(removeMock).toHaveBeenCalledTimes(3)
    expect(addMock).toHaveBeenCalledTimes(3)
  })
})
