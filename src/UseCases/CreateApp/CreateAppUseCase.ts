import { IAnswers } from '../QuestionAsker/QuestionAskerDTO'
import path from 'path'
import axios from 'axios'
import superagent from 'superagent'
import AdmZip from 'adm-zip'
import { IMessagesRepository } from '../../repositories/IMessagesRepository'
import { IFileManagerRepository } from '../../repositories/IFileManagerRepository'

export class CreateAppUseCase {
	private templateName: string = 'template.zip'
	private githubUrl: string = 'https://api.github.com/repos/wllfaria/Hati/contents/'

	constructor(private messagesRepository: IMessagesRepository, private fileManager: IFileManagerRepository) {}

	public getPathToTemplate(answers: IAnswers): string {
		const pattern = this.formatPattern(answers.pattern)
		const typescript = this.formatUseTypescript(answers.typescript)
		const orm = this.formatOrm(answers.database)
		return `templates/${typescript}/${pattern}/${orm}template`
	}

	public checkIfProjectDirectoryExists(projectName: string): string {
		const projectPath = path.join(process.cwd(), projectName)
		const folderExists = this.fileManager.directoryExists(projectPath)
		if (folderExists) this.directoryAlreadyExists(projectName)
		return projectPath
	}

	public createProjectDirectory(projectName: string, pathToProject: string): void {
		this.messagesRepository.noDirectoryConflictFound(projectName)
		this.fileManager.createDirectory(pathToProject)
	}

	public async copyTemplateToProjectDirectory(
		templatePath: string,
		projectPath: string,
		projectName: string
	): Promise<void> {
		try {
			const response = await axios.get(`${this.githubUrl}${templatePath}`)
			const file = response.data.find((content: any): boolean => content.name === this.templateName)
			const zipfilePath = path.join(projectPath, this.templateName)
			superagent
				.get(file.download_url)
				.on('error', () => this.creatingProjectError(projectPath))
				.pipe(this.fileManager.writeFileStream(zipfilePath))
				.on('finish', () => this.unzipFiles(zipfilePath, projectPath, projectName))
		} catch (e) {
			this.creatingProjectError(projectPath)
		}
	}

	private directoryAlreadyExists(projectName: string): void {
		this.messagesRepository.directoryAlreadyExists(projectName)
		this.exitProcess()
	}

	private formatPattern(pattern: string): string {
		if (!pattern) return ''
		const patternArray = pattern.split(' ')
		return patternArray[0]
	}

	private formatUseTypescript(useTypescript: boolean): string {
		return useTypescript ? 'typescript' : 'javascript'
	}

	private formatOrm(databaseOrm: string): string {
		return databaseOrm
			.toLowerCase()
			.split(' ')
			.map((str: string): string => `${str}-`)
			.join('')
	}

	private unzipFiles(zipfilePath: string, projectPath: string, projectName: string): void {
		const zipFile = new AdmZip(zipfilePath)
		zipFile.getEntries().map((zipEntry) => zipFile.extractEntryTo(zipEntry.entryName, projectPath, true, true))
		this.removeZipFile(zipfilePath, projectName)
	}

	private removeZipFile(templatePath: string, projectName: string): void {
		this.fileManager.removeFile(templatePath)
		this.messagesRepository.projectCreated(projectName)
	}

	private creatingProjectError(projectPath: string): void {
		this.messagesRepository.creatingProjectError()
		this.removeCreatedProjectDirectory(projectPath)
		this.exitProcess()
	}

	private removeCreatedProjectDirectory(projectPath: string): void {
		this.fileManager.removeDirectory(projectPath)
	}

	private exitProcess(): void {
		process.exit()
	}
}
