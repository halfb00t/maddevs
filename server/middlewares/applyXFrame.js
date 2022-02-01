function applyXFrame(_, res, next) {
  res.set('X-Frame-Options', 'DENY')
  next()
}

export default applyXFrame
