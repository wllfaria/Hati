import core from 'express-serve-static-core'
import { ServerStatusModel } from '../Models/ServerStatusModel'

export class ServerStatusController {
	public getServerStatus(_req: core.Request, res: core.Response): core.Response {
		const uptime = ServerStatusModel.getServerStatus()
		return res.status(200).json({ uptime })
	}
}
