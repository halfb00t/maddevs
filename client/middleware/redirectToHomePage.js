// eslint-disable-next-line
export default ({ store, redirect, route }) => {
  if (route.path === '/test-anton-prismic-slices/' && !store.getters.isFilledLeadForm) return redirect('/')
}
