jest.mock('inquirer')

import { QuestionAskerUseCase } from './QuestionAskerUseCase'
import factory from 'factory-girl'
import '../../../utils/QuestionFactory'
import { Question } from '../../entities/Question'

const { expectPrompts } = require('inquirer')

describe('QuestionAskerUseCase', () => {
	test('Expect questionAskerUseCase to be defined', () => {
		const questionAskerUseCase = new QuestionAskerUseCase()
		expect(questionAskerUseCase).toBeDefined()
	})
	test('Expect questionAskerUseCase to be instance of QuestionAskerUseCase', () => {
		const questionAskerUseCase = new QuestionAskerUseCase()
		expect(questionAskerUseCase).toBeInstanceOf(QuestionAskerUseCase)
	})
	test('Expect questionAskerUseCase.askQuestion to return an answer', async () => {
		const questionAskerUseCase = new QuestionAskerUseCase()
		const question = new Question(await factory.build('Question'))

		expectPrompts([{ ...question, input: question.name }])
		const expectedAnswer: { [key: string]: string } = {}
		expectedAnswer[question.name] = question.name

		const answer = await questionAskerUseCase.askQuestion(question)
		expect(answer).toStrictEqual(expectedAnswer)
	})
})
