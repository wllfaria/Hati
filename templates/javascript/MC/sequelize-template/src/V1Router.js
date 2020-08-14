const express = require('express')
const ServerStatusController = require('./v1/Controllers/ServerStatusController')
const ExampleController = require('./v1/Controllers/ExampleController')

class V1Router {
	/**
	 * @property { v1Router } V1Router
	 * Here is the versioning router defined
	 */
	v1Router = express.Router()
	server

	/**
	 * Here we define our controllers that are responsible
	 * to handle requests
	 */
	statusController = new ServerStatusController()
	exampleController = new ExampleController()

	/**
	 * Every router have a routesList array
	 * which contains all routes related to that router.
	 * its nice to remember that each router is meant to be
	 * a version of the server.
	 *
	 * as this is the V1. every router defined here will be
	 * defined as /v1/route-path
	 */
	routesList = [
		/**
		 * Every route in the array must contain a @property path which
		 * indicates which route it will be instantiated
		 * @property handler which is the controller method that must handle the request
		 * @property method which tells the router how to handle that request
		 * method can be 'GET', 'POST', 'PUT', 'DELETE'
		 */
		{ path: '/status', handler: this.statusController.getServerStatus, method: 'GET' },
		{ path: '/example', handler: this.exampleController.getExamples, method: 'GET' }
	]

	/**
	 * RouteHandler is a object containing all the possible methods for routes
	 * it is responsible to instantiate the route on the correct behavior expected.
	 */
	routeHandler = {
		GET: (route) => this.v1Router.get(route.path, route.handler),
		POST: (route) => this.v1Router.post(route.path, route.handler),
		PUT: (route) => this.v1Router.put(route.path, route.handler),
		DELETE: (route) => this.v1Router.delete(route.path, route.handler)
	}

	constructor(server) {
		this.server = server
		this.initializeRouter()
	}

	/**
	 * here we initialize the router as /v1 on the main route of the server.
	 */
	initializeRouter() {
		this.server.express.use('/v1', this.v1Router)
	}

	buildRoutes() {
		this.routesList.map((route) => this.routeHandler[route.method](route))
	}
}

module.exports = V1Router
