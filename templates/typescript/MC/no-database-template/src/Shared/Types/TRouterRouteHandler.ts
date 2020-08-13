import core from 'express-serve-static-core'
import { EHttpAllowedMethods } from '../Enums/EHttpAllowedMethods'
import { TApiRoute } from './TApiRoute'

export type TRouterRouteHandler = { [key in EHttpAllowedMethods]: (route: TApiRoute) => core.Router }
