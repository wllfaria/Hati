import { Question } from './Question'
import factory from 'factory-girl'
import { IQuestion } from './QuestionDTO'
import '../../utils/QuestionFactory'

describe('Question', () => {
	test('Expect question to be defined', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		expect(question).toBeDefined()
	})
	test('Expect question to be instance of Question', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		expect(question).toBeInstanceOf(Question)
	})
	test('Expect question to have a type', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		expect(question.type).toBeDefined()
	})
	test('Expect question to have a name', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		expect(question.name).toBeDefined()
	})
	test('Expect question to have a message', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		expect(question.message).toBeDefined()
	})
	test('Expect question.composeQuestion to be a function', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		expect(question.composeQuestion).toBeInstanceOf(Function)
	})
	test('Expect question.composeQuestion to return a composed Question', async () => {
		const typeQuestion: IQuestion = await factory.build('Question')
		const question = new Question(typeQuestion)
		const composedQuestion = question.composeQuestion()
		expect(composedQuestion).toBeDefined()
	})
})
