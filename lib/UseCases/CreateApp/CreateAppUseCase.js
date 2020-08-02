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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const axios_1 = __importDefault(require("axios"));
const superagent_1 = __importDefault(require("superagent"));
const adm_zip_1 = __importDefault(require("adm-zip"));
class CreateAppUseCase {
    constructor() {
        this.cwd = process.cwd();
        this.githubUrl = 'https://api.github.com/repos/wllfaria/Hati/contents/';
    }
    getPathToTemplate(answers) {
        const pattern = answers.pattern.split(' ')[0];
        const typescript = answers.typescript ? 'typescript' : 'javascript';
        const orm = answers.database
            .toLowerCase()
            .split(' ')
            .map((str) => `${str}-`)
            .join('');
        this.pathToTemplate = `templates/${typescript}/${pattern}/${orm}template`;
    }
    createTemplate(projectName) {
        this.projectName = projectName;
        this.checkIfProjectDirectoryExists();
        this.createProjectDirectory();
        this.copyTemplateToProjectDirectory();
    }
    checkIfProjectDirectoryExists() {
        this.pathToProject = path_1.default.join(this.cwd, this.projectName);
        this.templatePath = path_1.default.join(this.pathToProject, 'template.zip');
        const folderExists = fs_1.default.existsSync(this.pathToProject);
        if (folderExists) {
            console.log();
            console.log(`The directory ${chalk_1.default.magenta.bold(this.projectName)} already exists and could conflict`);
            console.log(`Either try using a new ${chalk_1.default.green.bold('project name')} or remove the folder listed above.`);
            console.log();
            process.exit();
        }
    }
    createProjectDirectory() {
        console.log();
        console.log(`Found no conflicts between existing directories and project name (${chalk_1.default.green.bold(this.projectName)}).`);
        console.log();
        console.log(chalk_1.default.magenta.bold('Starting the project creation process.'));
        console.log();
        try {
            fs_1.default.mkdirSync(this.pathToProject);
        }
        catch (e) {
            console.log(e);
        }
    }
    copyTemplateToProjectDirectory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${this.githubUrl}${this.pathToTemplate}`);
                const file = response.data.find((content) => content.name === 'template.zip');
                superagent_1.default
                    .get(file.download_url)
                    .on('error', () => this.creatingProjectError())
                    .pipe(fs_1.default.createWriteStream(this.templatePath))
                    .on('finish', () => this.unzipFiles());
            }
            catch (e) {
                console.log(e);
                this.creatingProjectError();
            }
        });
    }
    unzipFiles() {
        const zipFile = new adm_zip_1.default(this.templatePath);
        zipFile
            .getEntries()
            .map((zipEntry) => zipFile.extractEntryTo(zipEntry.entryName, this.pathToProject, true, true));
        this.removeZipFile();
    }
    removeZipFile() {
        try {
            fs_1.default.unlinkSync(this.templatePath);
            this.projectCreatedSuccessfully();
        }
        catch (e) {
            this.creatingProjectError();
        }
    }
    removeCreatedProjectDirectory() {
        try {
            fs_1.default.rmdirSync(this.pathToProject);
        }
        catch (e) {
            console.log('e');
        }
    }
    creatingProjectError() {
        console.log('An error occurred while creating your project.');
        console.log(`Please try again and if the error persists, you can open a issue on ${chalk_1.default.red.bold('Github')}`);
        console.log();
        this.removeCreatedProjectDirectory();
        process.exit();
    }
    projectCreatedSuccessfully() {
        console.log(chalk_1.default.green.bold('All done!'));
        console.log();
        console.log('All you gotta do now is:');
        console.log(chalk_1.default.magenta.bold(`cd ${this.projectName}`));
        console.log();
        console.log('Install the packages with:');
        console.log(`${chalk_1.default.green.bold('npm i')} or ${chalk_1.default.green.bold('yarn')}`);
        console.log();
        console.log('And run your project with:');
        console.log(`${chalk_1.default.magenta.bold('npm run dev')} or ${chalk_1.default.magenta.bold('yarn dev')}`);
        console.log();
    }
}
exports.CreateAppUseCase = CreateAppUseCase;
//# sourceMappingURL=CreateAppUseCase.js.map