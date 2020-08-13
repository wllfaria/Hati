import core from 'express-serve-static-core'

export abstract class Controller {
	public abstract handle(req: core.Request, res: core.Response): core.Response
}
