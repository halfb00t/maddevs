export default function checkCurrentRoute(urlPath) {
  this.menus.forEach(menu => {
    menu.routes.forEach(route => {
      if (route?.link?.url.endsWith(urlPath) && urlPath !== '/') {
        return this.$emit('name', this.name)
      }
      if (urlPath === '/') {
        return this.$emit('name', null)
      }
      return null
    })
  })
}
