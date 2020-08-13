import core from 'express-serve-static-core'
import { EHttpAllowedMethods } from '../Enums/EHttpAllowedMethods'

export type TApiRoute = {
	path: string
	method: EHttpAllowedMethods
	handler: (req: core.Request, res: core.Response) => core.Response
}
