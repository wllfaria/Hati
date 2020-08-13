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
exports.Hati = void 0;
const QuestionsRepository_1 = require("./repositories/Implementations/QuestionsRepository");
const QuestionAskerUseCase_1 = require("./UseCases/QuestionAsker/QuestionAskerUseCase");
const QuestionAskerController_1 = require("./UseCases/QuestionAsker/QuestionAskerController");
const CreateAppUseCase_1 = require("./UseCases/CreateApp/CreateAppUseCase");
const CreateAppController_1 = require("./UseCases/CreateApp/CreateAppController");
const MessagesRepository_1 = require("./repositories/Implementations/MessagesRepository");
const FileManagerRepository_1 = require("./repositories/Implementations/FileManagerRepository");
class Hati {
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleQuestions();
            yield this.handleAppCreation(this.answers);
        });
    }
    handleQuestions() {
        return __awaiter(this, void 0, void 0, function* () {
            const questionsRepository = new QuestionsRepository_1.QuestionsRepository();
            const questionAskerUseCase = new QuestionAskerUseCase_1.QuestionAskerUseCase();
            const questionAskerController = new QuestionAskerController_1.QuestionAskerController(questionAskerUseCase, questionsRepository);
            this.answers = yield questionAskerController.handle();
        });
    }
    handleAppCreation(answers) {
        return __awaiter(this, void 0, void 0, function* () {
            const messagesRepository = new MessagesRepository_1.MessagesRepository();
            const fileManager = new FileManagerRepository_1.FileManagerRepository();
            const createAppUseCase = new CreateAppUseCase_1.CreateAppUseCase(messagesRepository, fileManager);
            const createAppController = new CreateAppController_1.CreateAppController(createAppUseCase);
            createAppController.handle(answers);
        });
    }
}
exports.Hati = Hati;
//# sourceMappingURL=Hati.js.map