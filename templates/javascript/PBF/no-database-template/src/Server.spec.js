const Server = require('./Server')

describe('Server', () => {
	test('Expect server to be defined', () => {
		const server = new Server()
		expect(server).toBeDefined()
	})
	test('Expect server to have an express application instance', () => {
		const server = new Server()
		expect(server.express).toBeDefined()
	})
})
