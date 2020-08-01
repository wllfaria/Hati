import { QuestionsRepository } from './repositories/Implementations/QuestionsRepository'
import { QuestionAskerUseCase } from './UseCases/QuestionAsker/QuestionAskerUseCase'
import { QuestionAskerController } from './UseCases/QuestionAsker/QuestionAskerController'
import { IAnswers } from './UseCases/QuestionAsker/QuestionAskerDTO'

class Hati {
	private answers!: IAnswers

	constructor() {
		this.initialize()
	}

	private async initialize(): Promise<void> {
		await this.handleQuestions()
		await this.handleAppCreation(this.answers)
	}

	private async handleQuestions(): Promise<void> {
		const questionsRepository = new QuestionsRepository()
		const questionAskerUseCase = new QuestionAskerUseCase()
		const questionAskerController = new QuestionAskerController(questionAskerUseCase, questionsRepository)
		this.answers = await questionAskerController.handle()
	}

	private async handleAppCreation(answers: IAnswers): Promise<void> {}
}

new Hati()
