module.exports = (req, res, next) => {
  if (req.path == '/') next();
  if (req.method == 'POST' && req.path == '/api/login') {
    next()
  } else {
    console.log('verify token')
    if (req.headers.authorization === 'Bearer 89e38e0ca1c5857c5f848d49fcb825f72926635a') {
      next()
    } else {
      res.status(401).json({ message: 'Need Authentication' })
    }
  }
}