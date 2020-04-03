const cluster = require("cluster")
const numCPUs = require("os").cpus().length

if (cluster.isMaster) {
  cluster.fork()

  // When a worker dies create another one
  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.id} exited, respawning...`)
    cluster.fork()
  })
} else {
  const next = require("next")
  const express = require("express")

  // Middlewares
  const compression = require("compression")

  const app = next({ dev: true })
  const handle = app.getRequestHandler()

  app.prepare()
    .then(() => {
      const server = express()

      server.use(compression())

      // Handle with next.js
      server.get("*", (req, res) => {
        return handle(req, res)
      })

      server.listen(8080, (err) => {
        if (err) throw err
        console.log(`> Ready on port ${8080}`)
      })
    })
    .catch((e) => {
      console.log(e)
      process.exit(1)
    })
}
