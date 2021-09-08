export default ({ app }, inject) => { // eslint-disable-line
  inject('setTransparentHeaderForArea', area => {
    app.store.dispatch('setTransparentArea', area)
  })
  inject('removeTransparentHeader', () => {
    app.store.dispatch('setTransparentArea', null)
  })
}
