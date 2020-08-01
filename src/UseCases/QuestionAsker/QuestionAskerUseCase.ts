import inquirer from 'inquirer'
import { Question } from '../../entities/Question'

export class QuestionAskerUseCase {
	public async askQuestion(question: Question) {
		const answer = await inquirer.prompt(question.composeQuestion())
		return answer
	}
}
