import { QuestionsRepository } from './repositories/Implementations/QuestionsRepository'
import { QuestionAskerUseCase } from './UseCases/QuestionAsker/QuestionAskerUseCase'
import { QuestionAskerController } from './UseCases/QuestionAsker/QuestionAskerController'
import { IAnswers } from './UseCases/QuestionAsker/QuestionAskerDTO'
import { CreateAppUseCase } from './UseCases/CreateApp/CreateAppUseCase'
import { CreateAppController } from './UseCases/CreateApp/CreateAppController'
import { MessagesRepository } from './repositories/Implementations/MessagesRepository'

export class Hati {
	private answers!: IAnswers

	public async initialize(): Promise<void> {
		await this.handleQuestions()
		await this.handleAppCreation(this.answers)
	}

	private async handleQuestions(): Promise<void> {
		const questionsRepository = new QuestionsRepository()
		const questionAskerUseCase = new QuestionAskerUseCase()
		const questionAskerController = new QuestionAskerController(questionAskerUseCase, questionsRepository)
		this.answers = await questionAskerController.handle()
	}

	private async handleAppCreation(answers: IAnswers): Promise<void> {
		const messagesRepository = new MessagesRepository()
		const createAppUseCase = new CreateAppUseCase(messagesRepository)
		const createAppController = new CreateAppController(createAppUseCase)
		createAppController.handle(answers)
	}
}
