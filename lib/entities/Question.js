"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(props) {
        Object.assign(this, props);
    }
    Question.prototype.composeQuestion = function () {
        return {
            type: this.type,
            name: this.name,
            message: this.message,
            validate: this.validate,
            choices: this.choices
        };
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map