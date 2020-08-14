const { Sequelize } = require('sequelize')
const config = require('./Database/config/config.json')
const Example = require('./v1/Repositories/Example')

class Database {
	static repository
	static _instance = null

	/**
	 * @method
	 * as a singleton, Database class have a getInstance method
	 * to instantiate itself once and only once.
	 * refer to this to learn more about singletons:
	 * https://en.wikipedia.org/wiki/Singleton_pattern
	 */
	static getInstance() {
		if (Database._instance === null) {
			Database._instance = new Database()
			Database.initialize()
		}
		return Database._instance
	}

	/**
	 * @method
	 * Initialize is the method that instanciate sequelize using
	 * development configuration by default.
	 */
	static initialize() {
		Database.repository = new Sequelize(config.development)
		Database.initModels()
		Database.repository.sync()
	}

	/**
	 * Sequelize provides a transaction feature which grants
	 * atomicity to multiple queries.
	 * here are some information about sequelize transactions:
	 * https://sequelize.org/master/manual/transactions.html
	 * and here you can find more about ACID sql principles:
	 * https://en.wikipedia.org/wiki/ACID
	 */
	static async getTransaction() {
		return await Database.repository.transaction()
	}

	/**
	 * @method
	 * here we initialize all the repositories
	 * every other sequelize model you create should be added here following
	 * the example.
	 */
	static initModels() {
		Example.init(Database.repository)
	}
}

module.exports = Database
