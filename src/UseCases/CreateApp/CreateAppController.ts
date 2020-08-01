import { CreateAppUseCase } from './CreateAppUseCase'
import { IAnswers } from '../QuestionAsker/QuestionAskerDTO'

export class CreateAppController {
	constructor(private createAppUseCase: CreateAppUseCase) {}

	public handle(answers: IAnswers): void {
		this.createAppUseCase.getPathToTemplate(answers)
		this.createAppUseCase.createTemplate(answers.projectName)
	}
}
