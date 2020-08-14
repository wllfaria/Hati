const Example = require('../../Repositories/Example')

class ExampleUseCase {
	async getExamples() {
		try {
			/**
			 * Here is a example usage of sequelize models.
			 * you can find more about querying in sequelize here:
			 * https://sequelize.org/master/manual/model-querying-basics.html
			 */
			const result = await Example.findAll()
			return result
		} catch (err) {
			console.log(err)
		}
	}
}

module.exports = ExampleUseCase
