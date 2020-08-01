import { IQuestionsRepository } from '../IQuestionsRepository'
import inquirer, { ChoiceBase, ChoiceCollection, DistinctChoice } from 'inquirer'
import { Question } from '../../entities/Question'

export class QuestionsRepository implements IQuestionsRepository {
	private questions: Question[] = []

	constructor() {
		this.addQuestions()
	}

	public getQuestion(questionIndex: number): Question {
		return this.questions[questionIndex]
	}

	public addQuestions(): void {
		this.questions.push(new Question(this.question1))
		this.questions.push(new Question(this.question2))
		this.questions.push(new Question(this.question3))
		this.questions.push(new Question(this.question4))
	}

	public getTotalQuestions(): number {
		return this.questions.length
	}

	private get question1(): inquirer.Question {
		return {
			type: 'input',
			name: 'projectName',
			message: 'Please give a name to your project:',
			validate: (value: string) => {
				if (value.length) return true
				return 'Your project name can not be empty'
			}
		}
	}

	private get question2(): inquirer.DistinctQuestion {
		return {
			type: 'list',
			name: 'pattern',
			message: 'Please select a pattern',
			choices: ['MC (Model Controller)', 'PBF (Package by Feature)']
		}
	}

	private get question3(): inquirer.Question {
		return {
			type: 'confirm',
			name: 'typescript',
			message: 'Would you like to use Typescript?'
		}
	}

	private get question4(): inquirer.DistinctQuestion {
		return {
			type: 'list',
			name: 'database',
			message: 'Should I add a ORM?',
			choices: ['Sequelize', 'No Database']
		}
	}
}
