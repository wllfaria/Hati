const Example = require('../Repositories/Example')

class ExampleModel {
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

module.exports = ExampleModel
