import inquirer from 'inquirer';
export declare class Question implements inquirer.Question {
    readonly type: inquirer.QuestionTypeName;
    readonly name: string | undefined;
    readonly message: string | undefined;
    readonly validate: inquirer.Validator;
    readonly choices?: inquirer.ChoiceCollection;
    constructor(props: inquirer.Question);
    composeQuestion(): inquirer.DistinctQuestion;
}
//# sourceMappingURL=Question.d.ts.map