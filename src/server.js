const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlewares = jsonServer.defaults()
const loginMiddlewares = require('./login_middleware')


server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(loginMiddlewares)

server.post('/login', (req, res) => {
  if (req.body.username == 'admin' && req.body.password=="password")
    res.jsonp({ "token": "89e38e0ca1c5857c5f848d49fcb825f72926635a"})
  else{
    res.status(400).jsonp({ "message": "Wrong username/password" })
  }
})

server.use(router)

server.listen(12306, () => {
  console.log('JSON Server is running')
})