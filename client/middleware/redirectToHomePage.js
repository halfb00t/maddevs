// eslint-disable-next-line
export default ({ store, redirect, route }) => {
  if (route.path === '/success-and-faq/' && !store.getters.isFilledLeadForm) return redirect('/')
}
