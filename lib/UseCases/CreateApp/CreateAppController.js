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
exports.CreateAppController = void 0;
class CreateAppController {
    constructor(createAppUseCase) {
        this.createAppUseCase = createAppUseCase;
    }
    handle(answers) {
        return __awaiter(this, void 0, void 0, function* () {
            const templatePath = this.createAppUseCase.getPathToTemplate(answers);
            const projectPath = this.createAppUseCase.checkIfProjectDirectoryExists(answers.projectName);
            this.createAppUseCase.createProjectDirectory(answers.projectName, projectPath);
            this.createAppUseCase.copyTemplateToProjectDirectory(templatePath, projectPath, answers.projectName);
        });
    }
}
exports.CreateAppController = CreateAppController;
//# sourceMappingURL=CreateAppController.js.map