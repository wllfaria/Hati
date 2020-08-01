import { QuestionAskerUseCase } from './QuestionAskerUseCase'
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository'
import { IAnswers } from './QuestionAskerDTO'

export class QuestionAskerController {
	constructor(
		private questionAskerUseCase: QuestionAskerUseCase,
		private questionsRepository: IQuestionsRepository
	) {}

	public async handle() {
		const totalQuestions = this.questionsRepository.getTotalQuestions()
		let answers: IAnswers = {}
		for (let i = 0; i < totalQuestions; i++) {
			const question = this.questionsRepository.getQuestion(i)
			const answer = await this.questionAskerUseCase.askQuestion(question)
			answers = {
				...answers,
				...answer
			}
		}
		return answers
	}
}
