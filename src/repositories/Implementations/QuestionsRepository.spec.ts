import { QuestionsRepository } from './QuestionsRepository'
import { Question } from '../../entities/Question'

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
})
