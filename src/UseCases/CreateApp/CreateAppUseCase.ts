import { IAnswers } from '../QuestionAsker/QuestionAskerDTO'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import axios from 'axios'
import superagent from 'superagent'
import AdmZip from 'adm-zip'
import { IMessagesRepository } from '../../repositories/IMessagesRepository'

export class CreateAppUseCase {
	private templateName: string = 'template.zip'
	private githubUrl: string = 'https://api.github.com/repos/wllfaria/Hati/contents/'

	constructor(private messagesRepository: IMessagesRepository) {}

	public getPathToTemplate(answers: IAnswers): string {
		const pattern = this.formatPattern(answers.pattern)
		const typescript = this.formatUseTypescript(answers.typescript)
		const orm = this.formatOrm(answers.database)
		return `templates/${typescript}/${pattern}/${orm}template`
	}

	public checkIfProjectDirectoryExists(projectName: string): string {
		const projectPath = path.join(process.cwd(), projectName)
		const templatePath = path.join(projectPath, this.templateName)
		const folderExists = fs.existsSync(projectPath)
		if (folderExists) {
			this.messagesRepository.directoryAlreadyExists(projectName)
			process.exit()
		}
		return projectPath
	}

	public createProjectDirectory(projectName: string, pathToProject: string): void {
		this.messagesRepository.noDirectoryConflictFound(projectName)
		fs.mkdirSync(pathToProject)
	}

	public async copyTemplateToProjectDirectory(
		templatePath: string,
		projectPath: string,
		projectName: string
	): Promise<void> {
		try {
			console.log(this.githubUrl + templatePath)
			const response = await axios.get(`${this.githubUrl}${templatePath}`)
			console.log(response)
			const file = response.data.find((content: any): boolean => content.name === this.templateName)
			superagent
				.get(file.download_url)
				.on('error', () => this.creatingProjectError(projectPath))
				.pipe(fs.createWriteStream(templatePath))
				.on('finish', () => this.unzipFiles(templatePath, projectPath, projectName))
		} catch (e) {
			this.creatingProjectError(projectPath)
		}
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

	private unzipFiles(templatePath: string, projectPath: string, projectName: string): void {
		const zipFile = new AdmZip(templatePath)
		zipFile.getEntries().map((zipEntry) => zipFile.extractEntryTo(zipEntry.entryName, projectPath, true, true))
		this.removeZipFile(templatePath, projectName)
	}

	private removeZipFile(templatePath: string, projectName: string): void {
		fs.unlinkSync(templatePath)
		this.messagesRepository.projectCreated(projectName)
	}

	private creatingProjectError(projectPath: string): void {
		this.messagesRepository.creatingProjectError()
		this.removeCreatedProjectDirectory(projectPath)
		process.exit()
	}

	private removeCreatedProjectDirectory(projectPath: string): void {
		fs.rmdirSync(projectPath)
	}
}
