import { IAnswers } from '../QuestionAsker/QuestionAskerDTO';
import { IMessagesRepository } from '../../repositories/IMessagesRepository';
import { IFileManagerRepository } from '../../repositories/IFileManagerRepository';
export declare class CreateAppUseCase {
    private messagesRepository;
    private fileManager;
    private templateName;
    private githubUrl;
    constructor(messagesRepository: IMessagesRepository, fileManager: IFileManagerRepository);
    getPathToTemplate(answers: IAnswers): string;
    checkIfProjectDirectoryExists(projectName: string): string;
    createProjectDirectory(projectName: string, pathToProject: string): void;
    copyTemplateToProjectDirectory(templatePath: string, projectPath: string, projectName: string): Promise<void>;
    private directoryAlreadyExists;
    private formatPattern;
    private formatUseTypescript;
    private formatOrm;
    private unzipFiles;
    private removeZipFile;
    private creatingProjectError;
    private removeCreatedProjectDirectory;
    private exitProcess;
}
//# sourceMappingURL=CreateAppUseCase.d.ts.map