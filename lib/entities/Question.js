"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(props) {
        this.type = props.type;
        this.name = props.name;
        this.message = props.message;
        this.validate = props.validate;
        this.choices = props.choices;
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