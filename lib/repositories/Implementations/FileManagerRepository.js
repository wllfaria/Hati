"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManagerRepository = void 0;
const fs_1 = __importDefault(require("fs"));
class FileManagerRepository {
    createDirectory(pathToCreateDirectory) {
        fs_1.default.mkdirSync(pathToCreateDirectory);
    }
    directoryExists(pathToDirectory) {
        return fs_1.default.existsSync(pathToDirectory);
    }
    writeFileStream(pathToWriteFile) {
        return fs_1.default.createWriteStream(pathToWriteFile);
    }
    removeFile(pathToFile) {
        fs_1.default.unlinkSync(pathToFile);
    }
    removeDirectory(pathToDirectory) {
        fs_1.default.rmdirSync(pathToDirectory);
    }
}
exports.FileManagerRepository = FileManagerRepository;
//# sourceMappingURL=FileManagerRepository.js.map