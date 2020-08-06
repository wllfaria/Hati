import { IQuestionsRepository } from '../IQuestionsRepository'
import inquirer from 'inquirer'
import { Question } from '../../entities/Question'
import { IQuestion } from '../../entities/QuestionDTO'

export class QuestionsRepository implements IQuestionsRepository {
	private questions: Question[] = []

	constructor() {
		this.addQuestions()
	}

	public getQuestion(questionIndex: number): Question {
		return this.questions[questionIndex]
	}

	public get getQuestions() {
		return this.questions
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

	private get question1(): IQuestion {
		return {
			type: 'input',
			name: 'projectName',
			message: 'Please give a name to your project:',
			validate: (value: string): boolean | string => {
				if (value.length) return true
				return 'Your project name can not be empty'
			}
		}
	}

	private get question2(): IQuestion {
		return {
			type: 'list',
			name: 'pattern',
			message: 'Please select a pattern',
			choices: ['MC (Model Controller)', 'PBF (Package by Feature)'],
			validate: (value: string): boolean => {
				return true
			}
		}
	}

	private get question3(): IQuestion {
		return {
			type: 'confirm',
			name: 'typescript',
			message: 'Would you like to use Typescript?',
			validate: (value: string): boolean => {
				return true
			}
		}
	}

	private get question4(): IQuestion {
		return {
			type: 'list',
			name: 'database',
			message: 'Should I add a ORM?',
			choices: ['Sequelize', 'No Database'],
			validate: (value: string): boolean => {
				return true
			}
		}
	}
}
