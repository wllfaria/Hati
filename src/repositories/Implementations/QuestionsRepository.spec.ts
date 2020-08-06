jest.mock('inquirer')

import { QuestionsRepository } from './QuestionsRepository'
import { Question } from '../../entities/Question'
const { prompt, expectPrompts } = require('inquirer')

describe('QuestionsRepository', () => {
	test('Expect questionsRepository to be defined', () => {
		const questionsRepository = new QuestionsRepository()
		expect(questionsRepository).toBeDefined()
	})
	test('Expect questionsRepository to be a instance of QuestionsRepository', () => {
		const questionsRepository = new QuestionsRepository()
		expect(questionsRepository).toBeInstanceOf(QuestionsRepository)
	})
	test('Expect getQuestion to receive a question index and return the question', () => {
		const questionsRepository = new QuestionsRepository()
		const question = questionsRepository.getQuestion(1)
		expect(question).toBeDefined()
		expect(question).toBeInstanceOf(Question)
	})
	test('Expect getQuestions to return an array', () => {
		const questionsRepository = new QuestionsRepository()
		expect(questionsRepository.getQuestions).toBeInstanceOf(Array)
	})
	test('Expect questions array to be filled with questions when questionsRepository is instantiated', () => {
		const questionsRepository = new QuestionsRepository()
		expect(questionsRepository.getQuestions.length).toBeGreaterThan(0)
	})
	test('Expect addQuestions to be a function', () => {
		const questionsRepository = new QuestionsRepository()
		expect(questionsRepository.addQuestions).toBeInstanceOf(Function)
	})
	test('Expect getTotalQuestions to be a function', () => {
		const questionsRepository = new QuestionsRepository()
		expect(questionsRepository.getTotalQuestions).toBeInstanceOf(Function)
	})
	test('Expect getTotalQuestions to return a number', () => {
		const questionsRepository = new QuestionsRepository()
		const totalQuestions = questionsRepository.getTotalQuestions()
		expect(totalQuestions).toBeGreaterThanOrEqual(0)
	})
	test('Expect question1 to have a validation function', () => {
		const questionsRepository = new QuestionsRepository()
		const firstQuestion = questionsRepository.getQuestion(0)
		expect(firstQuestion.validate).toBeInstanceOf(Function)
	})
	test('Expect question1 validation function to return true when it receives a string parameter', () => {
		const questionsRepository = new QuestionsRepository()
		const firstQuestion = questionsRepository.getQuestion(0).composeQuestion()
		const validateReturn = firstQuestion.validate('teste')
		expect(validateReturn).toEqual(true)
	})
	test('Expect question1 validation function to return a string when it receive an empty string', () => {
		const questionsRepository = new QuestionsRepository()
		const firstQuestion = questionsRepository.getQuestion(0).composeQuestion()
		const validateReturn = firstQuestion.validate('')
		expect(validateReturn).toStrictEqual('Your project name can not be empty')
	})
	test('Expect question2 validation function to return true', () => {
		const questionsRepository = new QuestionsRepository()
		const secondQuestion = questionsRepository.getQuestion(1).composeQuestion()
		const validateReturn = secondQuestion.validate('')
		expect(validateReturn).toEqual(true)
	})
	test('Expect question3 validation function to return true', () => {
		const questionsRepository = new QuestionsRepository()
		const thirdQuestion = questionsRepository.getQuestion(2).composeQuestion()
		const validateReturn = thirdQuestion.validate('')
		expect(validateReturn).toEqual(true)
	})
	test('Expect question4 validation function to return true', () => {
		const questionsRepository = new QuestionsRepository()
		const fourthQuestion = questionsRepository.getQuestion(3).composeQuestion()
		const validateReturn = fourthQuestion.validate('')
		expect(validateReturn).toEqual(true)
	})
	test('Expect question1 to be able to be prompted', async () => {
		const questionsRepository = new QuestionsRepository()
		const firstQuestion = questionsRepository.getQuestion(0)

		expectPrompts([{ ...firstQuestion, input: firstQuestion.name }])
		const expectedAnswer: { [key: string]: string } = {}
		expectedAnswer[firstQuestion.name] = firstQuestion.name

		const answer = await prompt([firstQuestion])
		expect(answer).toStrictEqual(expectedAnswer)
	})
	test('Expect question2 to be able to be prompted', async () => {
		const questionsRepository = new QuestionsRepository()
		const secondQuestion = questionsRepository.getQuestion(1).composeQuestion()

		expectPrompts([{ ...secondQuestion, choose: 0 }])
		const expectedAnswer: { [key: string]: string } = {}
		expectedAnswer[secondQuestion.name] = secondQuestion.choices![0]

		const answer = await prompt([secondQuestion])
		expect(answer).toStrictEqual(expectedAnswer)
	})
	test('Expect question3 to be able to be prompted', async () => {
		const questionsRepository = new QuestionsRepository()
		const thirdQuestion = questionsRepository.getQuestion(2)

		expectPrompts([{ ...thirdQuestion, confirm: true }])
		const expectedAnswer: { [key: string]: boolean } = {}
		expectedAnswer[thirdQuestion.name] = true

		const answer = await prompt([thirdQuestion])
		expect(answer).toStrictEqual(expectedAnswer)
	})
	test('Expect question4 to be able to be prompted', async () => {
		const questionsRepository = new QuestionsRepository()
		const fourthQuestion = questionsRepository.getQuestion(3)

		expectPrompts([{ ...fourthQuestion, choose: 0 }])
		const expectedAnswer: { [key: string]: string } = {}
		expectedAnswer[fourthQuestion.name] = fourthQuestion.choices![0]

		const answer = await prompt([fourthQuestion])
		expect(answer).toStrictEqual(expectedAnswer)
	})
})
