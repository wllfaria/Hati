import core from 'express-serve-static-core'
import { Controller } from '../../../Entities/Controller'
import { EHttpStatus } from '../../../Shared/Enums/EHttpStatus'
import { ServerStatusUseCase } from './ServerStatusUseCase'

export class ServerStatusController extends Controller {
	public handle(_req: core.Request, res: core.Response): core.Response {
		const uptime = ServerStatusUseCase.getServerStatus()
		return res.status(EHttpStatus.OK).json({ ok: true, uptime })
	}
}
