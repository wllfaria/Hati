import core from 'express-serve-static-core'
import express from 'express'
import { Database } from './Database'
import cors from 'cors'

export class Server {
	public readonly express: core.Application
	private database: Database | undefined

	constructor() {
		this.express = express()
		this.buildMiddlewares()
		this.buildDatabase()
	}

	private buildMiddlewares() {
		this.express.use(express.json())
		this.express.use(cors())
	}

	public buildDatabase() {
		this.database = Database.getInstance()
	}
}
