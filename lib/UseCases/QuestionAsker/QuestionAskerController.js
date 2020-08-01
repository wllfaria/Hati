"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionAskerController = void 0;
class QuestionAskerController {
    constructor(questionAskerUseCase, questionsRepository) {
        this.questionAskerUseCase = questionAskerUseCase;
        this.questionsRepository = questionsRepository;
    }
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalQuestions = this.questionsRepository.getTotalQuestions();
            let answers = {};
            for (let i = 0; i < totalQuestions; i++) {
                const question = this.questionsRepository.getQuestion(i);
                const answer = yield this.questionAskerUseCase.askQuestion(question);
                answers = Object.assign(Object.assign({}, answers), answer);
            }
            return answers;
        });
    }
}
exports.QuestionAskerController = QuestionAskerController;
//# sourceMappingURL=QuestionAskerController.js.map