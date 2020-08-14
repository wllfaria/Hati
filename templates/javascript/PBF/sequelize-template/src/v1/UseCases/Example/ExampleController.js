const ExampleUseCase = require('./ExampleUseCase')

class ExampleController {
	/**
	 *
	 * @param {express request} _req the request provided by express router
	 * @param {express response} res  the response provided by express router
	 * Every Controller must have only one @method handle
	 * to handle the request in the proper way
	 */
	async handle(_req, res) {
		const examples = await new ExampleUseCase().getExamples()
		return res.status(200).json(examples)
	}
}

module.exports = ExampleController
