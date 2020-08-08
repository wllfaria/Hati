import fs, { WriteStream } from 'fs'
import { IFileManagerRepository } from '../IFileManagerRepository'

export class FileManagerRepository implements IFileManagerRepository {
	public createDirectory(pathToCreateDirectory: string): void {
		fs.mkdirSync(pathToCreateDirectory)
	}

	public directoryExists(pathToDirectory: string): boolean {
		return fs.existsSync(pathToDirectory)
	}

	public writeFileStream(pathToWriteFile: string): WriteStream {
		return fs.createWriteStream(pathToWriteFile)
	}

	public removeFile(pathToFile: string): void {
		fs.unlinkSync(pathToFile)
	}

	public removeDirectory(pathToDirectory: string): void {
		fs.rmdirSync(pathToDirectory)
	}
}
