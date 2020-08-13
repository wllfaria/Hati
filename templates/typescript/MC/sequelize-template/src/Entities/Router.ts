import { TRouterRouteHandler } from '../Shared/Types/TRouterRouteHandler'
import { TApiRoute } from '../Shared/Types/TApiRoute'

export abstract class Router {
	public abstract readonly routesList: TApiRoute[]

	public abstract readonly routeHandler: TRouterRouteHandler

	public abstract initializeRouter(): void

	public abstract buildRoutes(): void
}
