const V1Router = require('./V1Router')
const Server = require('./Server')

const PORT = process.env.port || 3333

const server = new Server()
const v1Router = new V1Router(server)
v1Router.buildRoutes()

server.express.listen(PORT, () => console.log(`Im up and listening on http://localhost:${PORT}`))
