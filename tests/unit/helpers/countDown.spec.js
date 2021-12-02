import countDown from '@/helpers/countDown'

describe('Count Down', () => {
  it('should call unobserve with params', () => {
    const entry = {
      target: {
        id: 'test',
        dataset: {
          endValue: 100,
        },
      },
    }
    const observer = {
      unobserve: jest.fn(),
    }

    countDown(entry, observer)

    expect(observer.unobserve).toHaveBeenCalledTimes(1)
    expect(observer.unobserve).toHaveBeenCalledWith(entry.target)
  })
})
