"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(props) {
        Object.assign(this, props);
    }
    composeQuestion() {
        return {
            type: this.type,
            name: this.name,
            message: this.message,
            validate: this.validate,
            choices: this.choices
        };
    }
}
exports.Question = Question;
//# sourceMappingURL=Question.js.map