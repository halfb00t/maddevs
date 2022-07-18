import playLottie from '@/helpers/playLottie'

const animation = {
  play: jest.fn(),
}

describe('playLottie helper', () => {
  const arrayWithElements = []

  for (let i = 0; i < 2; i += 1) {
    const containerToRender = document.createElement('div')
    containerToRender.setAttribute('id', `test-lottie-id-${i}`)
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
        if (target.id === 'test-lottie-id-1') this.entries.push({ isIntersecting: false, target })
        this.entries.push({ isIntersecting: true, target })
        this.callback(this.entries, this)
      }

      // eslint-disable-next-line class-methods-use-this
      unobserve() {
        return jest.fn()
      }
    },
  })

  it('should correctly work playLottie function', () => {
    playLottie(animation, 'test-lottie-id-0')
    const playMock = jest.spyOn(animation, 'play').mockImplementation()
    expect(playMock).toHaveBeenCalledTimes(1)
    jest.clearAllMocks()
  })

  it('should correctly work playLottie withou element', () => {
    jest.clearAllMocks()
    playLottie(animation, 'test-lottie-id-3')
    const playMock = jest.spyOn(animation, 'play').mockImplementation()
    expect(playMock).toHaveBeenCalledTimes(0)
  })

  it('should correctly work playLottie catch', () => {
    jest.clearAllMocks()
    playLottie(animation, 'test-lottie-id-1')
    const playMock = jest.spyOn(animation, 'play').mockImplementation()
    expect(playMock).toHaveBeenCalledTimes(1)
  })
})
