import inquirer from 'inquirer'
import { TQuestion } from './QuestionDTO'

export class Question implements inquirer.Question {
	public readonly type: inquirer.QuestionTypeName
	public readonly name: string
	public readonly message: string
	public readonly validate?: inquirer.Validator
	public readonly choices?: string[]

	constructor(props: TQuestion) {
		this.type = props.type
		this.name = props.name
		this.message = props.message
		this.validate = props.validate
		this.choices = props.choices
	}

	public composeQuestion(): TQuestion {
		return {
			type: this.type,
			name: this.name,
			message: this.message,
			validate: this.validate,
			choices: this.choices
		}
	}
}
