export interface IMessagesRepository {
	noDirectoryConflictFound: (projectName: string) => void
	directoryAlreadyExists: (projectName: string) => void
	creatingProjectError: () => void
	projectCreated: (projectName: string) => void
}
