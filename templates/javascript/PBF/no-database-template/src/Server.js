const express = require('express')
const cors = require('cors')

class Server {
	express

	constructor() {
		this.express = express()
		this.buildMiddlewares()
	}

	/**
	 * The server is configured to only accept JSON.
	 * we also added cors by default.
	 */
	buildMiddlewares() {
		this.express.use(express.json())
		this.express.use(cors())
	}
}

module.exports = Server
