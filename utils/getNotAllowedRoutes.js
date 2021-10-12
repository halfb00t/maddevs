import { routerConfig } from '../router.config'

export const getNotAllowedRoutes = () => routerConfig
  .reduce((acc, route) => (route[process.env.FF_ENVIRONMENT] ? acc : [...acc, route.path]), [])
