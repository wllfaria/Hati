"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const chalk_1 = __importDefault(require("chalk"));
class MessagesRepository {
    noDirectoryConflictFound(projectName) {
        console.log();
        console.log(`Found no conflicts between existing directories and project name (${chalk_1.default.green.bold(projectName)}).`);
        console.log();
        console.log(chalk_1.default.magenta.bold('Starting the project creation process.'));
        console.log();
    }
    directoryAlreadyExists(projectName) {
        console.log();
        console.log(`The directory ${chalk_1.default.magenta.bold(projectName)} already exists and could conflict`);
        console.log(`Either try using a new ${chalk_1.default.green.bold('project name')} or remove the folder listed above.`);
        console.log();
        process.exit();
    }
    creatingProjectError() {
        console.log('An error occurred while creating your project.');
        console.log(`Please try again and if the error persists, you can open a issue on ${chalk_1.default.red.bold('Github')}`);
        console.log();
    }
    projectCreated(projectName) {
        console.log(chalk_1.default.green.bold('All done!'));
        console.log();
        console.log('All you gotta do now is:');
        console.log(chalk_1.default.magenta.bold(`cd ${projectName}`));
        console.log();
        console.log('Install the packages with:');
        console.log(`${chalk_1.default.green.bold('npm i')} or ${chalk_1.default.green.bold('yarn')}`);
        console.log();
        console.log('And run your project with:');
        console.log(`${chalk_1.default.magenta.bold('npm run dev')} or ${chalk_1.default.magenta.bold('yarn dev')}`);
        console.log();
    }
}
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=MessagesRepository.js.map