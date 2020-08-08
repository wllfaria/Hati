import { CreateAppUseCase } from './CreateAppUseCase'
import { MessagesRepository } from '../../repositories/Implementations/MessagesRepository'

describe('CreateAppUseCase', () => {
	test('Expect createAppUseCase to be defined', () => {
		const messagesRepository = new MessagesRepository()
		const createAppUseCase = new CreateAppUseCase(messagesRepository)
		expect(createAppUseCase).toBeDefined()
	})
	test('Expect createAppUseCase to be instance of CreateAppUseCase', () => {
		const messagesRepository = new MessagesRepository()
		const createAppUseCase = new CreateAppUseCase(messagesRepository)
		expect(createAppUseCase).toBeInstanceOf(CreateAppUseCase)
	})
})
