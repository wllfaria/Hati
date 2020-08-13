import inquirer from 'inquirer';
import { IQuestion } from './QuestionDTO';
export declare class Question implements inquirer.Question {
    readonly type: inquirer.QuestionTypeName;
    readonly name: string;
    readonly message: string;
    validate: (value: string) => boolean | string;
    readonly choices: string[];
    constructor(props: IQuestion);
    composeQuestion(): IQuestion;
}
//# sourceMappingURL=Question.d.ts.map