import { IAnswers } from '../QuestionAsker/QuestionAskerDTO';
export declare class CreateAppUseCase {
    private cwd;
    private pathToTemplate;
    private pathToProject;
    private projectName;
    getPathToTemplate(answers: IAnswers): void;
    createTemplate(projectName: string): void;
    private checkIfProjectDirectoryExists;
    private createProjectDirectory;
    private copyTemplateToProjectDirectory;
    private removeCreatedProjectDirectory;
    private creatingProjectError;
    private projectCreatedSuccessfully;
}
//# sourceMappingURL=CreateAppUseCase.d.ts.map