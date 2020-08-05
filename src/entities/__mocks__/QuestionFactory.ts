import factory from 'factory-girl'
import faker from 'faker'
import { Question } from '../Question'

factory.define('Question', Question, {
	type: 'input',
	name: faker.name.firstName(),
	message: faker.lorem.words(4)
})
