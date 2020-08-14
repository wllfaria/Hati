const ServerStatusUseCase = require('./ServerStatusUseCase')

describe('ServerStatusModel', () => {
	test('Expect serverStatusUseCase to be defined', () => {
		const serverStatusUseCase = new ServerStatusUseCase()
		expect(serverStatusUseCase).toBeDefined()
	})
	test('Expect ServerStatusUseCase.getServerStatus to be defined', () => {
		expect(ServerStatusUseCase.getServerStatus).toBeDefined()
	})
	test('Expect ServerStatusUseCase.getServerStatus to be a function', () => {
		expect(ServerStatusUseCase.getServerStatus).toBeInstanceOf(Function)
	})
	test('Expect ServerStatusUseCase.getServerStatus to return a number', () => {
		const uptime = ServerStatusUseCase.getServerStatus()
		expect(uptime).toBeGreaterThanOrEqual(0)
	})
})
