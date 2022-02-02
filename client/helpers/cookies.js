export const Cookies = {
  checkCookie(name) {
    const haveCookie = document.cookie.includes(name)
    return haveCookie
  },
  setCookie({ name, value, expires }) {
    if (!this.checkCookie(name)) {
      const expiresDate = new Date(Date.now() + (expires || 365) * 864e5) // 864e5 - Day after January 1, 1970
      document.cookie = `${name}=${value};expires=${expiresDate.toUTCString()};path=/`
    }
  },
}
