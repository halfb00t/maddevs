const getRoutePrefix = routePrefix => {
  if (typeof routePrefix !== 'string' || !routePrefix) return ''
  let prefix = routePrefix
  if (prefix.charAt(prefix.length - 1) === '/') prefix = prefix.slice(0, prefix.length - 1)
  if (prefix.charAt(0) === '/') prefix = prefix.slice(1)
  return prefix
}

export default getRoutePrefix
