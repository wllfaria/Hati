import express from 'express'
import core from 'express-serve-static-core'
import { Router } from './Entities/Router'
import { Server } from './Server'
import { TApiRoute } from './Shared/Types/TApiRoute'
import { EHttpAllowedMethods } from './Shared/Enums/EHttpAllowedMethods'
import { TRouterRouteHandler } from './Shared/Types/TRouterRouteHandler'
import { ServerStatusController } from './v1/Controllers/ServerStatusController'

export class V1Router extends Router {
	private v1Router: core.Router = express.Router()

	private statusController: ServerStatusController = new ServerStatusController()

	public readonly routesList: TApiRoute[] = [
		{ path: '/status', handler: this.statusController.getServerStatus, method: EHttpAllowedMethods.GET }
	]

	public readonly routeHandler: TRouterRouteHandler = {
		GET: (route: TApiRoute): core.Router => this.v1Router.get(route.path, route.handler),
		POST: (route: TApiRoute): core.Router => this.v1Router.post(route.path, route.handler),
		PUT: (route: TApiRoute): core.Router => this.v1Router.put(route.path, route.handler),
		DELETE: (route: TApiRoute): core.Router => this.v1Router.delete(route.path, route.handler)
	}

	constructor(private server: Server) {
		super()
		this.initializeRouter()
	}

	public initializeRouter(): void {
		this.server.express.use('/v1', this.v1Router)
	}

	public buildRoutes() {
		this.routesList.map((route: TApiRoute) => this.routeHandler[route.method](route))
	}
}
