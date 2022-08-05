import playVideo from '@/helpers/playVideo'

describe('playVideo helper', () => {
  it('should correctly work', () => {
    const testElemSuccess = {
      target: {
        play: jest.fn(() => Promise.resolve()),
      },
    }
    playVideo(testElemSuccess)
    const playMock = jest.spyOn(testElemSuccess.target, 'play').mockImplementation()
    expect(playMock).toHaveBeenCalledTimes(1)
    jest.clearAllMocks()
  })

  it('should correctly work with catch', () => {
    jest.clearAllMocks()
    const testElemError = {
      target: {
        play: jest.fn(() => Promise.reject()),
      },
    }
    playVideo(testElemError)
    const playMock = jest.spyOn(testElemError.target, 'play').mockImplementation()
    expect(playMock).toHaveBeenCalledTimes(1)
  })

  it('should correctly work with playPromise undefined', () => {
    jest.clearAllMocks()
    const testElemError = {
      target: {
        play: jest.fn(() => undefined),
      },
    }
    playVideo(testElemError)
    expect(testElemError.target.play.call()).toBeUndefined()
  })
})
