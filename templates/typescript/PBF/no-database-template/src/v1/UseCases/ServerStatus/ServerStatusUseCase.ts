export class ServerStatusUseCase {
	public static getServerStatus(): number {
		return process.uptime()
	}
}
