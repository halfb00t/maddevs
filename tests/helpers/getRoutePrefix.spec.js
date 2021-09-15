import getRoutePrefix from '@/helpers/getRoutePrefix'

describe('getRoutePrefix helper', () => {
  it('should return empty string with incorrect parameter', () => {
    const prefix = getRoutePrefix(123)
    expect(prefix).toBe('')
  })

  it('should correct trim first and last characters(\'/\')', () => {
    const prefix = getRoutePrefix('/slug1/slug2/')
    expect(prefix).toBe('slug1/slug2')
  })

  it('should return the parameter', () => {
    const prefix = getRoutePrefix('slug')
    expect(prefix).toBe('slug')
  })
})
