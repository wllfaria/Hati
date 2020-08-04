import { Hati } from './Hati'

describe('Hati', () => {
	test('Expect hati to be defined', () => {
		const hati = new Hati()
		expect(hati).toBeDefined()
	})

	test('Expect hati to be an instance of Hati', () => {
		const hati = new Hati()
		expect(hati).toBeInstanceOf(Hati)
	})
})
