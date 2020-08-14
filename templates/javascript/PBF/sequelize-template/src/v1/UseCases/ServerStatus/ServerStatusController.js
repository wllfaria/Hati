const ServerStatusUseCase = require('./ServerStatusUseCase')

class ServerStatusController {
	/**
	 *
	 * @param {express request} _req the request provided by express router
	 * @param {express response} res  the response provided by express router
	 * Every Controller must have only one @method handle
	 * to handle the request in the proper way
	 */
	handle(_req, res) {
		const uptime = ServerStatusUseCase.getServerStatus()
		return res.status(200).json({ uptime })
	}
}

module.exports = ServerStatusController
