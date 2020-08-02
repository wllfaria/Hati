import { IAnswers } from '../QuestionAsker/QuestionAskerDTO'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import axios from 'axios'
import superagent from 'superagent'
import AdmZip from 'adm-zip'

export class CreateAppUseCase {
	private cwd: string = process.cwd()
	private pathToTemplate!: string
	private pathToProject!: string
	private projectName!: string
	private templatePath!: string
	private githubUrl: string = 'https://api.github.com/repos/wllfaria/Hati/contents/'

	public getPathToTemplate(answers: IAnswers): void {
		const pattern = answers.pattern.split(' ')[0]
		const typescript = answers.typescript ? 'typescript' : 'javascript'
		const orm = answers.database
			.toLowerCase()
			.split(' ')
			.map((str: string): string => `${str}-`)
			.join('')
		this.pathToTemplate = `templates/${typescript}/${pattern}/${orm}template`
	}

	public createTemplate(projectName: string): void {
		this.projectName = projectName
		this.checkIfProjectDirectoryExists()
		this.createProjectDirectory()
		this.copyTemplateToProjectDirectory()
	}

	private checkIfProjectDirectoryExists(): void {
		this.pathToProject = path.join(this.cwd, this.projectName)
		this.templatePath = path.join(this.pathToProject, 'template.zip')
		const folderExists = fs.existsSync(this.pathToProject)
		if (folderExists) {
			console.log()
			console.log(`The directory ${chalk.magenta.bold(this.projectName)} already exists and could conflict`)
			console.log(`Either try using a new ${chalk.green.bold('project name')} or remove the folder listed above.`)
			console.log()
			process.exit()
		}
	}

	private createProjectDirectory(): void {
		console.log()
		console.log(
			`Found no conflicts between existing directories and project name (${chalk.green.bold(this.projectName)}).`
		)
		console.log()
		console.log(chalk.magenta.bold('Starting the project creation process.'))
		console.log()
		try {
			fs.mkdirSync(this.pathToProject)
		} catch (e) {
			console.log(e)
		}
	}

	private async copyTemplateToProjectDirectory(): Promise<void> {
		try {
			const response = await axios.get(`${this.githubUrl}${this.pathToTemplate}`)
			const file = response.data.find((content: any) => content.name === 'template.zip')
			superagent
				.get(file.download_url)
				.on('error', () => this.creatingProjectError())
				.pipe(fs.createWriteStream(this.templatePath))
				.on('finish', () => this.unzipFiles())
		} catch (e) {
			console.log(e)
			this.creatingProjectError()
		}
	}

	private unzipFiles(): void {
		const zipFile = new AdmZip(this.templatePath)
		zipFile
			.getEntries()
			.map((zipEntry) => zipFile.extractEntryTo(zipEntry.entryName, this.pathToProject, true, true))
		this.removeZipFile()
	}

	private removeZipFile(): void {
		try {
			fs.unlinkSync(this.templatePath)
			this.projectCreatedSuccessfully()
		} catch (e) {
			this.creatingProjectError()
		}
	}

	private removeCreatedProjectDirectory(): void {
		try {
			fs.rmdirSync(this.pathToProject)
		} catch (e) {
			console.log('e')
		}
	}

	private creatingProjectError(): void {
		console.log('An error occurred while creating your project.')
		console.log(`Please try again and if the error persists, you can open a issue on ${chalk.red.bold('Github')}`)
		console.log()
		this.removeCreatedProjectDirectory()
		process.exit()
	}

	private projectCreatedSuccessfully(): void {
		console.log(chalk.green.bold('All done!'))
		console.log()
		console.log('All you gotta do now is:')
		console.log(chalk.magenta.bold(`cd ${this.projectName}`))
		console.log()
		console.log('Install the packages with:')
		console.log(`${chalk.green.bold('npm i')} or ${chalk.green.bold('yarn')}`)
		console.log()
		console.log('And run your project with:')
		console.log(`${chalk.magenta.bold('npm run dev')} or ${chalk.magenta.bold('yarn dev')}`)
		console.log()
	}
}
