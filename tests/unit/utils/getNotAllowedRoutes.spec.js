import { getNotAllowedRoutes } from '../../../utils/getNotAllowedRoutes'
import * as routerConfig from '../../../router.config'

const firstRouterConfig = [
  {
    path: '/services/mobile-development/',
    development: false,
    staging: false,
    production: false,
  },
  {
    path: '/services/',
    development: true,
    staging: true,
    production: true,
  },
]

const secondRouterConfig = [
  {
    path: '/services/mobile-development/',
    development: true,
    staging: true,
    production: true,
  },
]

describe('getNotAllowedRoutes function', () => {
  beforeEach(() => {
    process.env.FF_ENVIRONMENT = 'development'
  })
  it('should correctly return the not allowed routes', () => {
    routerConfig.routerConfig = firstRouterConfig
    const data = getNotAllowedRoutes()
    expect(data)
      .toEqual(['/services/mobile-development/'])
  })
  it('should correctly return the not allowed routes (alternative case)', () => {
    routerConfig.routerConfig = secondRouterConfig
    const data = getNotAllowedRoutes()
    expect(data)
      .toEqual([])
  })
})
