import getRoutePrefix from '@/helpers/getRoutePrefix'

describe('getRoutePrefix helper', () => {
  it('should return \'/\' with incorrect params', () => {
    const prefix = getRoutePrefix(123)
    expect(prefix).toBe('/')
  })

  it('should correct the perfix', () => {
    const prefix = getRoutePrefix('slug1/slug2/')
    expect(prefix).toBe('/slug1/slug2/')
  })

  it('should return the parameter', () => {
    const prefix = getRoutePrefix('/slug/')
    expect(prefix).toBe('/slug/')
  })
})
