import { Database } from './Database'

describe('Database', () => {
	test('Expect database to be defined', () => {
		const database = new Database()
		expect(database).toBeDefined()
	})
})
