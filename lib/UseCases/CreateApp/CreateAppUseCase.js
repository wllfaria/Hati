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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppUseCase = void 0;
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const superagent_1 = __importDefault(require("superagent"));
const adm_zip_1 = __importDefault(require("adm-zip"));
class CreateAppUseCase {
    constructor(messagesRepository, fileManager) {
        this.messagesRepository = messagesRepository;
        this.fileManager = fileManager;
        this.templateName = 'template.zip';
        this.githubUrl = 'https://api.github.com/repos/wllfaria/Hati/contents/';
    }
    getPathToTemplate(answers) {
        const pattern = this.formatPattern(answers.pattern);
        const typescript = this.formatUseTypescript(answers.typescript);
        const orm = this.formatOrm(answers.database);
        return `templates/${typescript}/${pattern}/${orm}template`;
    }
    checkIfProjectDirectoryExists(projectName) {
        const projectPath = path_1.default.join(process.cwd(), projectName);
        const folderExists = this.fileManager.directoryExists(projectPath);
        if (folderExists)
            this.directoryAlreadyExists(projectName);
        return projectPath;
    }
    createProjectDirectory(projectName, pathToProject) {
        this.messagesRepository.noDirectoryConflictFound(projectName);
        this.fileManager.createDirectory(pathToProject);
    }
    copyTemplateToProjectDirectory(templatePath, projectPath, projectName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.githubUrl}${templatePath}`);
                const file = response.data.find((content) => content.name === this.templateName);
                const zipfilePath = path_1.default.join(projectPath, this.templateName);
                superagent_1.default
                    .get(file.download_url)
                    .on('error', () => this.creatingProjectError(projectPath))
                    .pipe(this.fileManager.writeFileStream(zipfilePath))
                    .on('finish', () => this.unzipFiles(zipfilePath, projectPath, projectName));
            }
            catch (e) {
                this.creatingProjectError(projectPath);
            }
        });
    }
    directoryAlreadyExists(projectName) {
        this.messagesRepository.directoryAlreadyExists(projectName);
        this.exitProcess();
    }
    formatPattern(pattern) {
        if (!pattern)
            return '';
        const patternArray = pattern.split(' ');
        return patternArray[0];
    }
    formatUseTypescript(useTypescript) {
        return useTypescript ? 'typescript' : 'javascript';
    }
    formatOrm(databaseOrm) {
        return databaseOrm
            .toLowerCase()
            .split(' ')
            .map((str) => `${str}-`)
            .join('');
    }
    unzipFiles(zipfilePath, projectPath, projectName) {
        const zipFile = new adm_zip_1.default(zipfilePath);
        zipFile.getEntries().map((zipEntry) => zipFile.extractEntryTo(zipEntry.entryName, projectPath, true, true));
        this.removeZipFile(zipfilePath, projectName);
    }
    removeZipFile(templatePath, projectName) {
        this.fileManager.removeFile(templatePath);
        this.messagesRepository.projectCreated(projectName);
    }
    creatingProjectError(projectPath) {
        this.messagesRepository.creatingProjectError();
        this.removeCreatedProjectDirectory(projectPath);
        this.exitProcess();
    }
    removeCreatedProjectDirectory(projectPath) {
        this.fileManager.removeDirectory(projectPath);
    }
    exitProcess() {
        process.exit();
    }
}
exports.CreateAppUseCase = CreateAppUseCase;
//# sourceMappingURL=CreateAppUseCase.js.map