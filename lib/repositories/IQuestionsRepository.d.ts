import { Question } from '../entities/Question';
export interface IQuestionsRepository {
    getQuestion: (questionIndex: number) => Question;
    addQuestions: () => void;
    getTotalQuestions: () => number;
}
//# sourceMappingURL=IQuestionsRepository.d.ts.map