const V1Router = require('./V1Router')
const Server = require('./Server')

describe('V1Router', () => {
	test('Expect v1Router to be defined', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router).toBeDefined()
	})
	test('Expect v1Router.routesList to be defined', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router.routesList).toBeDefined()
	})
	test('Expect v1Router.routeHandler to be defined', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router.routeHandler).toBeDefined()
	})
	test('Expect v1Router.initializeRouter to be defined', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router.initializeRouter).toBeDefined()
	})
	test('Expect v1Router.initializeRouter to be a function', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router.initializeRouter).toBeInstanceOf(Function)
	})
	test('Expect v1Router.buildRoutes to be defined', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router.buildRoutes).toBeDefined()
	})
	test('Expect v1Router.buildRoutes to be a function', () => {
		const server = new Server()
		const v1Router = new V1Router(server)
		expect(v1Router.buildRoutes).toBeInstanceOf(Function)
	})
})
