import { IMessagesRepository } from '../IMessagesRepository';
export declare class MessagesRepository implements IMessagesRepository {
    noDirectoryConflictFound(projectName: string): void;
    directoryAlreadyExists(projectName: string): void;
    creatingProjectError(): void;
    projectCreated(projectName: string): void;
}
//# sourceMappingURL=MessagesRepository.d.ts.map