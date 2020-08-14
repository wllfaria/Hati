const ServerStatusModel = require('../Models/ServerStatusModel')

class ServerStatusController {
	/**
	 *
	 * @param {express request} _req the request provided by express router
	 * @param {express response} res  the response provided by express router
	 */
	getServerStatus(_req, res) {
		const uptime = ServerStatusModel.getServerStatus()
		return res.status(200).json({ uptime })
	}
}

module.exports = ServerStatusController
