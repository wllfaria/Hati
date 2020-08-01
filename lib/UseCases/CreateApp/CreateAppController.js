"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppController = void 0;
class CreateAppController {
    constructor(createAppUseCase) {
        this.createAppUseCase = createAppUseCase;
    }
    handle(answers) {
        this.createAppUseCase.getPathToTemplate(answers);
        this.createAppUseCase.createTemplate(answers.projectName);
    }
}
exports.CreateAppController = CreateAppController;
//# sourceMappingURL=CreateAppController.js.map