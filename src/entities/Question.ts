import inquirer from 'inquirer'

export class Question implements inquirer.Question {
	public readonly type: inquirer.QuestionTypeName
	public readonly name: string | undefined
	public readonly message: string | undefined
	public readonly validate: inquirer.Validator
	public readonly choices?: inquirer.ChoiceCollection

	constructor(props: inquirer.Question) {
		Object.assign(this, props)
	}

	public composeQuestion(): inquirer.DistinctQuestion {
		return {
			type: this.type,
			name: this.name,
			message: this.message,
			validate: this.validate,
			choices: this.choices
		}
	}
}
