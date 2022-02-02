import { Cookies } from '~/helpers/cookies'

const testCookie = {
  name: 'test',
  value: 'test',
  expires: 1,
}
describe('Cookies', () => {
  const date = new Date(Date.now() + (864e5))
  const cookie = `test=test;expires=${date.toUTCString()};path=/`
  beforeEach(() => {
    Object.defineProperty(document, 'doctype', {
      value: '<!DOCTYPE html>',
    })
    const setCookie = v => v
    Object.defineProperty(window.document, 'cookie', (_value => ({
      get: function _get() {
        return _value
      },
      set: function _set(v) {
        _value = setCookie(v)
      },
      configurable: true,
    }))(''))
  })
  it('should set document cookie', () => {
    Cookies.setCookie(testCookie)
    expect(document.cookie).toBe(cookie)
  })
  it('should received false because there are no cookies', () => {
    expect(Cookies.checkCookie('test')).toBeFalsy()
  })
  it('should received true because there are cookies', () => {
    Cookies.setCookie(testCookie)
    expect(Cookies.checkCookie('test')).toBeTruthy()
  })
})
