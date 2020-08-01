import { QuestionAskerUseCase } from './QuestionAskerUseCase';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';
import { IAnswers } from './QuestionAskerDTO';
export declare class QuestionAskerController {
    private questionAskerUseCase;
    private questionsRepository;
    constructor(questionAskerUseCase: QuestionAskerUseCase, questionsRepository: IQuestionsRepository);
    handle(): Promise<IAnswers>;
}
//# sourceMappingURL=QuestionAskerController.d.ts.map