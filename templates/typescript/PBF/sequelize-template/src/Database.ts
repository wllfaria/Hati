import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import config from './Database/config/config.json'

export class Database {
	private static repository: Sequelize
	private static _instance: Database | null = null

	public static getInstance(): Database {
		if (Database._instance === null) {
			Database._instance = new Database()
			Database.initialize()
		}
		return Database._instance
	}

	private static async initialize() {
		this.repository = new Sequelize(config.development as SequelizeOptions)
		Database.addModels()
	}

	public static truncate() {
		return Promise.all(
			Object.keys(Database.repository.models).map((key) => {
				return Database.repository.models[key].destroy({ truncate: true, force: true })
			})
		)
	}

	public static async getTransaction() {
		return await Database.repository.transaction()
	}

	private static addModels(): void {
		Database.repository.addModels([])
	}
}
