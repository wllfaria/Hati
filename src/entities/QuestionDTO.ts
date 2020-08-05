import inquirer from 'inquirer'

export type TQuestion = {
	type: inquirer.QuestionTypeName
	name: string
	message: string
	validate?: inquirer.Validator
	choices?: string[]
}
