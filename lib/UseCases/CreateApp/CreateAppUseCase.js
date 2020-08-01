"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppUseCase = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const ncp_1 = __importDefault(require("ncp"));
class CreateAppUseCase {
    constructor() {
        this.cwd = process.cwd();
    }
    getPathToTemplate(answers) {
        const pattern = answers.pattern.split(' ')[0];
        const typescript = answers.typescript ? 'typescript' : 'javascript';
        const orm = answers.database
            .toLowerCase()
            .split(' ')
            .map((str) => `${str}-`)
            .join('');
        this.pathToTemplate = `./templates/${typescript}/${pattern}/${orm}template`;
    }
    createTemplate(projectName) {
        this.projectName = projectName;
        this.checkIfProjectDirectoryExists();
        this.createProjectDirectory();
        this.copyTemplateToProjectDirectory();
    }
    checkIfProjectDirectoryExists() {
        this.pathToProject = path_1.default.join(this.cwd, this.projectName);
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
        console.log(__dirname);
        const file = fs_1.default.readFileSync(path_1.default.join(__dirname, '/index.ts'));
        console.log(file);
        ncp_1.default(this.pathToTemplate, this.pathToProject, (err) => err ? this.creatingProjectError() : this.projectCreatedSuccessfully());
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