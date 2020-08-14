const express = require('express')
const cors = require('cors')
const Database = require('./Database')

class Server {
	express
	database

	constructor() {
		this.express = express()
		this.buildMiddlewares()
		this.buildDatabase()
	}

	/**
	 * The server is configured to only accept JSON.
	 * we also added cors by default.
	 */
	buildMiddlewares() {
		this.express.use(express.json())
		this.express.use(cors())
	}

	buildDatabase() {
		this.database = Database.getInstance()
	}
}

module.exports = Server
