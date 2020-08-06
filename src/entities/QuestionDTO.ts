import inquirer from 'inquirer'

export interface IQuestion {
	type: inquirer.QuestionTypeName
	name: string
	message: string
	choices?: string[]
	validate: (value: string) => boolean | string
}
