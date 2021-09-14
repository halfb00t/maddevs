const getRoutePrefix = routePrefix => {
  if (typeof routePrefix !== 'string' || !routePrefix) return '/'
  let prefix = routePrefix
  if (prefix.charAt(prefix.length - 1) !== '/') prefix = `${prefix}/`
  if (prefix.charAt(0) !== '/') prefix = `/${prefix}`
  return prefix
}

export default getRoutePrefix
