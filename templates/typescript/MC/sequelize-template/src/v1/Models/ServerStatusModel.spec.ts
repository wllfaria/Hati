import { ServerStatusModel } from './ServerStatusModel'

describe('ServerStatusModel', () => {
	test('Expect serverStatusModel to be defined', () => {
		const serverStatusModel = new ServerStatusModel()
		expect(serverStatusModel).toBeDefined()
	})
	test('Expect ServerStatusModel.getServerStatus to be defined', () => {
		expect(ServerStatusModel.getServerStatus).toBeDefined()
	})
	test('Expect ServerStatusModel.getServerStatus to be a function', () => {
		expect(ServerStatusModel.getServerStatus).toBeInstanceOf(Function)
	})
	test('Expect ServerStatusModel.getServerStatus to return a number', () => {
		const uptime = ServerStatusModel.getServerStatus()
		expect(uptime).toBeGreaterThanOrEqual(0)
	})
})
