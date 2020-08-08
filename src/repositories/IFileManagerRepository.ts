import { WriteStream } from 'fs'

export interface IFileManagerRepository {
	createDirectory: (pathToCreateDirectory: string) => void
	directoryExists: (pathToDirectory: string) => boolean
	writeFileStream: (pathToWriteFile: string) => WriteStream
	removeFile: (pathToFile: string) => void
	removeDirectory: (pathToDirectory: string) => void
}
