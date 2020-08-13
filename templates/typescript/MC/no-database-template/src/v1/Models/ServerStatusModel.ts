export class ServerStatusModel {
	public static getServerStatus(): number {
		return process.uptime()
	}
}
