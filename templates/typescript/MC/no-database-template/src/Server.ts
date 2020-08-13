import core from 'express-serve-static-core'
import express from 'express'
import cors from 'cors'

export class Server {
	public readonly express: core.Application

	constructor() {
		this.express = express()
		this.buildMiddlewares()
	}

	private buildMiddlewares() {
		this.express.use(express.json())
		this.express.use(cors())
	}
}
