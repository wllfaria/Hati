/**
 * Use Cases are like models in MVC, but as we use PBF.
 * We have one use case for every feature on the server.
 */
class ServerStatusUseCase {
	static getServerStatus() {
		return process.uptime()
	}
}

module.exports = ServerStatusUseCase
