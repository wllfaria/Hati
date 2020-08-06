import inquirer from 'inquirer'
import { IQuestion } from './QuestionDTO'

export class Question implements inquirer.Question {
	public readonly type: inquirer.QuestionTypeName
	public readonly name: string
	public readonly message: string
	public validate: (value: string) => boolean | string
	public readonly choices: string[]

	constructor(props: IQuestion) {
		this.type = props.type
		this.name = props.name
		this.message = props.message
		this.validate = props.validate
		this.choices = props.choices!
	}

	public composeQuestion(): IQuestion {
		return {
			type: this.type,
			name: this.name,
			message: this.message,
			validate: this.validate,
			choices: this.choices
		}
	}
}
