"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsRepository = void 0;
const Question_1 = require("../../entities/Question");
class QuestionsRepository {
    constructor() {
        this.questions = [];
        this.addQuestions();
    }
    getQuestion(questionIndex) {
        return this.questions[questionIndex];
    }
    addQuestions() {
        this.questions.push(new Question_1.Question(this.question1));
        this.questions.push(new Question_1.Question(this.question2));
        this.questions.push(new Question_1.Question(this.question3));
        this.questions.push(new Question_1.Question(this.question4));
    }
    getTotalQuestions() {
        return this.questions.length;
    }
    get question1() {
        return {
            type: 'input',
            name: 'projectName',
            message: 'Please give a name to your project:',
            validate: (value) => {
                if (value.length)
                    return true;
                return 'Your project name can not be empty';
            }
        };
    }
    get question2() {
        return {
            type: 'list',
            name: 'pattern',
            message: 'Please select a pattern',
            choices: ['MC (Model Controller)', 'PBF (Package by Feature)']
        };
    }
    get question3() {
        return {
            type: 'confirm',
            name: 'typescript',
            message: 'Would you like to use Typescript?'
        };
    }
    get question4() {
        return {
            type: 'list',
            name: 'database',
            message: 'Should I add a ORM?',
            choices: ['Sequelize', 'No Database']
        };
    }
}
exports.QuestionsRepository = QuestionsRepository;
//# sourceMappingURL=QuestionsRepository.js.map