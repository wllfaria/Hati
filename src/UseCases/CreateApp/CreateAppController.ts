import { CreateAppUseCase } from './CreateAppUseCase'
import { IAnswers } from '../QuestionAsker/QuestionAskerDTO'

export class CreateAppController {
	constructor(private createAppUseCase: CreateAppUseCase) {}

	public async handle(answers: IAnswers): Promise<void> {
		const templatePath = this.createAppUseCase.getPathToTemplate(answers)
		const projectPath = this.createAppUseCase.checkIfProjectDirectoryExists(answers.projectName)
		this.createAppUseCase.createProjectDirectory(answers.projectName, projectPath)
		this.createAppUseCase.copyTemplateToProjectDirectory(templatePath, projectPath, answers.projectName)
	}
}
