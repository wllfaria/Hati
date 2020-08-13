import { Database } from './Database'

describe('Database', () => {
	test('Expect database to be defined', () => {
		const database = new Database()
		expect(database).toBeDefined()
	})
	test('Expect database.getInstance to be defined', () => {
		expect(Database.getInstance).toBeDefined()
	})
	test('Expect database.getInstance to be a function', () => {
		expect(Database.getInstance).toBeInstanceOf(Function)
	})
	test('Expect database.getInstance to return a Database', () => {
		const database = Database.getInstance()
		expect(database).toBeInstanceOf(Database)
	})
	test('Expect database.truncate to be defined', () => {
		expect(Database.truncate).toBeDefined()
	})
	test('Expect database.truncate to be a function', () => {
		expect(Database.truncate).toBeInstanceOf(Function)
	})
	test('Expect database.getTransaction to be defined', () => {
		expect(Database.getTransaction).toBeDefined()
	})
	test('Expect database.getTransaction to be a function', () => {
		expect(Database.getTransaction).toBeInstanceOf(Function)
	})
})
