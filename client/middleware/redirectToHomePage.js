// eslint-disable-next-line
export default ({ store, redirect, route }) => {
  if (route.path === '/success-and-faq/' && !store.getters.isFilledLeadForm) return redirect('/')
  if (route.path.startsWith('/about')) return redirect('/')
  if (route.path.startsWith('/ru/about/careers/')) return redirect(route.path.replace(/\/ru\/about\/careers\//ig, '/careers/', route.path))
  if (route.path.startsWith('/about/careers/')) return redirect(route.path.replace(/\/about\/careers\//ig, '/careers/', route.path))
  if (route.path.startsWith('/ru/careers/')) return redirect(route.path.replace(/\/ru\/careers\//ig, '/careers/', route.path))
}
