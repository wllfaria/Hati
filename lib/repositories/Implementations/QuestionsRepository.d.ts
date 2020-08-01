import { IQuestionsRepository } from '../IQuestionsRepository';
import { Question } from '../../entities/Question';
export declare class QuestionsRepository implements IQuestionsRepository {
    private questions;
    constructor();
    getQuestion(questionIndex: number): Question;
    addQuestions(): void;
    getTotalQuestions(): number;
    private get question1();
    private get question2();
    private get question3();
    private get question4();
}
//# sourceMappingURL=QuestionsRepository.d.ts.map