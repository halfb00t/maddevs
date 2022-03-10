const debug = require('debug')('jsonp')

let count = 0

function noop() {}

export default function jsonp(url, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts
    opts = {}
  }
  if (!opts) opts = {}

  const prefix = opts.prefix || '__jp'
  // eslint-disable-next-line no-plusplus
  const id = opts.name || (prefix + count++)
  const param = opts.param || 'callback'
  const timeout = opts.timeout != null ? opts.timeout : 60000
  const enc = encodeURIComponent
  const target = document.getElementsByTagName('script')[0] || document.head
  let script
  let timer

  function cleanup() {
    if (script.parentNode) script.parentNode.removeChild(script)
    window[id] = noop
    if (timer) clearTimeout(timer)
  }

  if (timeout) {
    timer = setTimeout(() => {
      cleanup()
      if (fn) fn(new Error('Timeout'))
    }, timeout)
  }

  function cancel() {
    if (window[id]) {
      cleanup()
    }
  }

  // eslint-disable-next-line func-names
  window[id] = function (data) {
    debug('jsonp got', data)
    cleanup()
    if (fn) fn(null, data)
  }

  // eslint-disable-next-line no-bitwise
  url += `${(~url.indexOf('?') ? '&' : '?') + param}=${enc(id)}`
  url = url.replace('?&', '?')

  debug('jsonp req "%s"', url)

  script = document.createElement('script')
  script.src = url
  target.parentNode.insertBefore(script, target)

  return cancel
}
