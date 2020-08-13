/// <reference types="node" />
import { WriteStream } from 'fs';
import { IFileManagerRepository } from '../IFileManagerRepository';
export declare class FileManagerRepository implements IFileManagerRepository {
    createDirectory(pathToCreateDirectory: string): void;
    directoryExists(pathToDirectory: string): boolean;
    writeFileStream(pathToWriteFile: string): WriteStream;
    removeFile(pathToFile: string): void;
    removeDirectory(pathToDirectory: string): void;
}
//# sourceMappingURL=FileManagerRepository.d.ts.map