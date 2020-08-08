import { CreateAppUseCase } from './CreateAppUseCase'
import { MessagesRepository } from '../../repositories/Implementations/MessagesRepository'
import { FileManagerRepository } from '../../repositories/Implementations/FileManagerRepository'

describe('CreateAppUseCase', () => {
	test('Expect createAppUseCase to be defined', () => {
		const messagesRepository = new MessagesRepository()
		const fileManager = new FileManagerRepository()
		const createAppUseCase = new CreateAppUseCase(messagesRepository, fileManager)
		expect(createAppUseCase).toBeDefined()
	})
	test('Expect createAppUseCase to be instance of CreateAppUseCase', () => {
		const messagesRepository = new MessagesRepository()
		const fileManager = new FileManagerRepository()
		const createAppUseCase = new CreateAppUseCase(messagesRepository, fileManager)
		expect(createAppUseCase).toBeInstanceOf(CreateAppUseCase)
	})
})
