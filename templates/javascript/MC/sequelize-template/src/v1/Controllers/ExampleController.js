const ExampleModel = require('../Models/ExampleModel')

class ExampleController {
	/**
	 *
	 * @param {express request} _req the request provided by express router
	 * @param {express response} res  the response provided by express router
	 * Every Controller must have only one @method handle
	 * to handle the request in the proper way
	 */
	async getExamples(_req, res) {
		const examples = await new ExampleModel().getExamples()
		return res.status(200).json(examples)
	}
}

module.exports = ExampleController
