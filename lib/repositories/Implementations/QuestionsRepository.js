"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsRepository = void 0;
var Question_1 = require("../../entities/Question");
var QuestionsRepository = /** @class */ (function () {
    function QuestionsRepository() {
        this.questions = [];
        this.addQuestions();
    }
    QuestionsRepository.prototype.getQuestion = function (questionIndex) {
        return this.questions[questionIndex];
    };
    QuestionsRepository.prototype.addQuestions = function () {
        this.questions.push(new Question_1.Question(this.question1));
        this.questions.push(new Question_1.Question(this.question2));
        this.questions.push(new Question_1.Question(this.question3));
        this.questions.push(new Question_1.Question(this.question4));
    };
    QuestionsRepository.prototype.getTotalQuestions = function () {
        return this.questions.length;
    };
    Object.defineProperty(QuestionsRepository.prototype, "question1", {
        get: function () {
            return {
                type: 'input',
                name: 'projectName',
                message: 'Please give a name to your project:',
                validate: function (value) {
                    if (value.length)
                        return true;
                    return 'Your project name can not be empty';
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionsRepository.prototype, "question2", {
        get: function () {
            return {
                type: 'list',
                name: 'pattern',
                message: 'Please select a pattern',
                choices: ['MC (Model Controller)', 'PBF (Package by Feature)']
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionsRepository.prototype, "question3", {
        get: function () {
            return {
                type: 'confirm',
                name: 'typescript',
                message: 'Would you like to use Typescript?'
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionsRepository.prototype, "question4", {
        get: function () {
            return {
                type: 'list',
                name: 'database',
                message: 'Should I add a ORM?',
                choices: ['Sequelize', 'No Database']
            };
        },
        enumerable: false,
        configurable: true
    });
    return QuestionsRepository;
}());
exports.QuestionsRepository = QuestionsRepository;
//# sourceMappingURL=QuestionsRepository.js.map