import { IMessagesRepository } from '../IMessagesRepository'

import chalk from 'chalk'

export class MessagesRepository implements IMessagesRepository {
	public noDirectoryConflictFound(projectName: string): void {
		console.log()
		console.log(
			`Found no conflicts between existing directories and project name (${chalk.green.bold(projectName)}).`
		)
		console.log()
		console.log(chalk.magenta.bold('Starting the project creation process.'))
		console.log()
	}

	public directoryAlreadyExists(projectName: string): void {
		console.log()
		console.log(`The directory ${chalk.magenta.bold(projectName)} already exists and could conflict`)
		console.log(`Either try using a new ${chalk.green.bold('project name')} or remove the folder listed above.`)
		console.log()
		process.exit()
	}

	public creatingProjectError(): void {
		console.log('An error occurred while creating your project.')
		console.log(`Please try again and if the error persists, you can open a issue on ${chalk.red.bold('Github')}`)
		console.log()
	}

	public projectCreated(projectName: string): void {
		console.log(chalk.green.bold('All done!'))
		console.log()
		console.log('All you gotta do now is:')
		console.log(chalk.magenta.bold(`cd ${projectName}`))
		console.log()
		console.log('Install the packages with:')
		console.log(`${chalk.green.bold('npm i')} or ${chalk.green.bold('yarn')}`)
		console.log()
		console.log('And run your project with:')
		console.log(`${chalk.magenta.bold('npm run dev')} or ${chalk.magenta.bold('yarn dev')}`)
		console.log()
	}
}
